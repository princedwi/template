import React, { useState } from 'react'
export interface TabsProps {
  step: number;
}
import { MasterTypeStudy } from '@/types/master_data.types';
import axios from 'axios';
import { useProjectInfoContext } from '@/context/context';
import { createProject, getProject, createActivityLog, updateProject, getUsers } from '@/utilities/axios/project/createProject';
import { getProjectInfoMasterData } from '@/utilities/axios/masterData/masterDataApi';
import { Project_Info, ProjectinfoUsers } from '@/types/project.types';
import Loader from '../Loader';
import { useSearchParams } from 'next/navigation'


export default function ProjectInfo({ step }: TabsProps) {

  const searchParams = useSearchParams()
  const paramsid: unknown = searchParams.get('id')
  const [users, setusers] = React.useState<ProjectinfoUsers[]>([])
  const [createdproject, setcreatedproject] = React.useState(0);
  const [prevcreated, setprevcreated] = React.useState(false);
  const [isfetchdata, setisfetchdata] = React.useState(false);
  const { ProjectContextData, setProjectContextData, setLoaderData, setProjectId, userId } = useProjectInfoContext();
  const [showOther, setshowOther] = React.useState(false)
  const [otherID, setotherID] = useState(0);
  const [counter, setcounter] = React.useState(0);
  const [data, setData] = useState<Project_Info>({
    ProjectName: "",
    ProjectCode: "",
    ProjectManager: "",
    ProjectVerifier: "",
    ClientScope: "",
    Budget: "",
    Originator: 0,
    Lead: 0,
    Advisor: 0,
    StudyOther: "",
    master_type_study: 0,
    UpdatedByUserName: -1,
    CreatedByUserName: -1,
  });

  const [masterTypeStudy, setMasterTypeStudy] = useState<MasterTypeStudy[]>([]);
  const [LoaderData, setLoaderDatastate] = useState({ data: "", display: false });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, tname: string = "") => {
    const { name, value } = e.target;
    if (tname === "master_type_study") {
      setData({ ...data, "master_type_study": Number(value) })
      return;
    }
    setData({ ...data, [tname === "" ? name : tname]: (name && name==="ModellingTeam")?Number(value):value })
    console.log(tname, value, typeof value, name)
  };

  const handleradiobutton = (e: HTMLTextAreaElement) => {
    setData({ ...data, [e.name]: Number(e.value) })
  }
  const fetchproject = async () => {
    try {

      const ds = await getProject((paramsid as number));
      const currentUserdata = localStorage.getItem("user");
      console.log(ds);
      setData({ ...data, UpdatedByUserName: currentUserdata ? JSON.parse(currentUserdata).id : 1 });
      setData({
        ...data,
        ProjectName: ds.data.attributes.ProjectName ? ds.data.attributes.ProjectName : "",
        ProjectCode: ds.data.attributes.ProjectCode ? ds.data.attributes.ProjectCode : "",
        ProjectManager: ds.data.attributes.ProjectManager ? ds.data.attributes.ProjectManager : "",
        ProjectVerifier: ds.data.attributes.ProjectVerifier ? ds.data.attributes.ProjectVerifier : "",
        ClientScope: ds.data.attributes.ClientScope ? ds.data.attributes.ClientScope : "",
        Budget: ds.data.attributes.Budget ? ds.data.attributes.Budget : "",
        Originator: ds.data.attributes.Originator.data.id ? ds.data.attributes.Originator.data.id : -1,
        Lead: ds.data.attributes.Lead.data.id ? ds.data.attributes.Lead.data.id : -1,
        Advisor: ds.data.attributes.Advisor.data.id ? ds.data.attributes.Advisor.data.id : -1,
        StudyOther: ds.data.attributes.StudyOther ? ds.data.attributes.StudyOther : "",
        master_type_study: ds.data.attributes.master_type_study.data.id ? ds.data.attributes.master_type_study.data.id : 0,
        CreatedByUserName: ds.data.attributes.CreatedByUserName ? ds.data.attributes.CreatedByUserName : 1,
      });
      setisfetchdata(true);
      setProjectContextData(data);

    } catch (error) {
      console.log(error);
    }
  }
  const fill = () => {
    setLoaderData({ data: "Saving Data...", display: true, type: 1 });
    setProjectContextData(data); // set context
    if (isfetchdata || prevcreated) {
      updateProject(data, paramsid ? (paramsid as number) : createdproject).then(e => {
        console.log("successfully updated Project-Info")
        setData(data);
        setLoaderData({ data: "Data Updated", display: true, type: 2 });
        setTimeout(() => {
          setLoaderData({ data: "", display: false, type: 1 });
        }, 2000);
        createActivityLog({
          ProjectID: paramsid ? (paramsid as number) : createdproject,
          ModifiedDate: new Date(),
          Section: "Project Info",
          Entity: "Project Info",
          UpdatedByUserName: userId
        }).then(e => {
          console.log("activity created")
        }).catch(err => {
          console.log("activity not created", err)
        })
      })
        .catch(err => {
          setLoaderData({ data: err, display: true, type: 3 });
          console.log(err)
        })
      return;
    }
    console.log(data)
    createProject(data)
      .then(e => {
        console.log("successfully created Project-Info")
        setData(data);
        setProjectId(e.data.id);
        setcreatedproject(e.data.id);
        setLoaderData({ data: "Data Saved", display: true, type: 2 });
        setTimeout(() => {
          setLoaderData({ data: "", display: false, type: 1 });
        }, 2000);
        setprevcreated(true);
        createActivityLog({
          ProjectID: e.data.id,
          ModifiedDate: new Date(),
          Section: "Project Info",
          Entity: "Project Info",
          UpdatedByUserName: userId
        }).then(e => {
          console.log("activity created")
        }).catch(err => {
          console.log("activity not created", err)
        })
      })
      .catch(err => {
        setLoaderData({ data: err, display: true, type: 3 });
        console.log("err in error")
      })
  }
  const fetchdata = async () => {
    try {
      const userdata: any = await getUsers();
      var arr: ProjectinfoUsers[] = [];
      for (var i = 0; i < userdata.length; i++) {
        arr.push({
          name: userdata[i].username,
          id: userdata[i].id,
        })
      }
      setusers(arr);
    } catch (error) {
      console.log(error, "errror");
    }
    const response = await getProjectInfoMasterData();
    setMasterTypeStudy(response.data);
    const otherTask = response.data.find((task: MasterTypeStudy) => task.attributes.Field === "Other");
    setotherID(otherTask.attributes.MasterTypeStudy_Id);
  }
  React.useEffect(() => {
    if (masterTypeStudy.length == 0 && counter == 0) {
      const currentUserdata = localStorage.getItem("user");
      if (!paramsid) {
        setData({ ...data, CreatedByUserName: currentUserdata ? JSON.parse(currentUserdata).id : 1, UpdatedByUserName: currentUserdata ? JSON.parse(currentUserdata).id : 1 });
      }
      else {
        setData({ ...data, UpdatedByUserName: currentUserdata ? JSON.parse(currentUserdata).id : 1 });
      }
      fetchdata();
      setcounter(counter + 1);
    }
    if (paramsid && !isfetchdata && counter <= 10) {
      fetchproject();
      setcounter(1);
    }
  }, [data]);
  return (
    <>
      <div
        className={`tab-pane fade relative ${step == 1 ? "show active" : ""}`}
        style={{ backgroundColor: 'white', padding: '3rem' }}
        id="step1"
      >
        <link href='tabs/style.css'></link>
        {/* <form> */}
        <div className=' text-center flex  items-end justify-end absolute top-[1rem] right-[1rem] float-right '>
          <div className='border w-[fit-content] p-1 px-3 mb-4 rounded-xl bg-[#263c9c]  text-white text-[18px] cursor-pointer' onClick={() => { fill() }}>Submit</div>
        </div>
        {/* <button type="submit" className='border w-[fit-content] p-1 px-3 mb-4 rounded-xl bg-[#263c9c]  text-white text-[18px] cursor-pointer' onClick={() => { fill() }} style={{ 'backgroundColor': '#263c9c', 'padding': '0.5rem', 'color': 'white', 'borderRadius': '10px' }}>Submit</button> */}
        <div className="mb-3 d-flex flex-row w-[65%]">
          <label htmlFor="ProjectName" className='w-25'>Project Name</label>
          <input type="text" name="ProjectName" className="form-control w-[20rem]" id="ProjectName" required value={data.ProjectName}
            onChange={(e => {
              handleInputChange(e);
            })} />
        </div>
        <div className="mb-3 d-flex flex-row w-[65%]">
          <label htmlFor="ProjectCode" className='w-25'>Project Code</label>
          <input type="text" name="ProjectCode" className="form-control w-[20rem]" id="ProjectCode" value={data.ProjectCode} required
            onChange={(e => {
              handleInputChange(e);
            })}
          />
        </div>
        <div className="mb-3 d-flex flex-row w-[65%]">
          <label htmlFor="ProjectManager" className='w-25'>Project Manager</label>
          <select name="ProjectManager" className='form-control w-[20rem] relative' value={data.ProjectManager} onChange={(e => {
            handleInputChange(e);
          })}>
            <option value="" className='' >Select Project Manager</option>
            {users.map((item, index) => (
              <option key={index} value={item.name}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-3 d-flex flex-row w-[65%]">
          <label htmlFor="ProjectVerifier" className='w-25'>Project Verifier</label>
          <select name="ProjectVerifier" className='form-control w-[20rem]' value={data.ProjectVerifier}
            onChange={(e => {
              handleInputChange(e);
            })}>
            <option value="" className=''>Select Project Verifier</option>
            {users.map((item, index) => (
              <option key={index} value={item.name}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-3 d-flex flex-row w-[65%]">
          <label htmlFor="ClientScope" className='w-25'>Client Scope</label>
          <input type="text" name="ClientScope" className="form-control w-[20rem]" id="ClientScope" value={data.ClientScope}
            onChange={(e => {
              handleInputChange(e);
            })}
          />
        </div>
        <div className="mb-3 d-flex flex-row w-[65%]">
          <label htmlFor="Budget" className='w-25'>Budget</label>
          <input type="text" name="Budget" className="form-control w-[20rem]" id="Budget" value={data.Budget}
            onChange={(e => {
              handleInputChange(e);
            })} />
        </div>
        <label htmlFor="ModellingTeam" className='w-[12rem]'><b>Modelling Team</b></label>
        <br />
        <br />
        <div className="mb-3 d-flex flex-row w-[65%]">
          <label htmlFor="ModellingTeam" className='w-25'>Originator</label>
          <select className='form-control w-[20rem]' value={Number(data.Originator)} name={"ModellingTeam"}
            onChange={(e => {
              handleInputChange(e, "Originator");
            })}>
            <option value="" className=''>Select Originator</option>
            {users.map((item, index) => (
              <option key={index} value={Number(item.id)} id={`${item.id}`}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-3 d-flex flex-row w-[65%]">
          <label htmlFor="ModellingTeam" className='w-25'>Lead</label>
          <select className='form-control w-[20rem]'  name={"ModellingTeam"} value={data.Lead}
            onChange={(e => {
              handleInputChange(e, "Lead");
            })}>
            <option value="" className=''>Select Lead</option>
            {users.map((item, index) => (
              <option key={index} value={item.id}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-3 d-flex flex-row w-[65%]">
          <label htmlFor="ModellingTeam" className='w-25'>Advisor</label>
          <select className='form-control w-[20rem]'  name={"ModellingTeam"} value={data.Advisor}
            onChange={(e => {
              handleInputChange(e, "Advisor");
            })}>
            <option value="" className=''>Select Advisor</option>
            {users.map((item, index) => (
              <option key={index} value={item.id}>{item.name}</option>
            ))}
          </select>
        </div>
        {/* <div className="mb-3 grid grid-cols-4 items-right ml-[-9rem]" style={{ gap: "0rem" }}>
            <div></div>
          </div> */}
        <div className="mb-3 d-flex flex-row w-[65%] mt-[30px]" style={{ marginTop: "30px" }}>
          <label htmlFor="master_type_study" className='w-25'>Type of Study</label>
          <select className='form-control w-[20rem]' name="master_type_study" id="master_type_study" required
            value={data.master_type_study}
            onChange={(e) => {
              if (Number(e.target.value) === otherID) {
                setshowOther(true);
              }
              else {
                setshowOther(false);
              }
              handleInputChange(e, "master_type_study");
            }}
          >
            <option value="" className=''>Select Type of Study</option>
            {masterTypeStudy.map((group, index) => (
              <option key={group.id} value={group.attributes.MasterTypeStudy_Id}>{group.attributes.Field}</option>
            ))}
          </select>
        </div>
        <div className="mb-3 d-flex flex-row w-[65%]">
          <label htmlFor="master_type_study" className='w-25'>&nbsp;</label>
          {showOther && <input type="text" name="StudyOther" className="form-control w-[20rem]" onChange={(e) => { handleInputChange(e); }} id="ModellingTaskOther" />}
        </div>
        {/* </form> */}
      </div>
    </>
  )
}