import React, { useState } from 'react'
export interface TabsProps {
  step: number;
}
import { MasterTypeStudy } from '@/types/master_data.types';
import axios from 'axios';
import { useProjectInfoContext } from '@/context/context';
import { createProject } from '@/utilities/axios/project/createProject';
import { getProjectInfoMasterData } from '@/utilities/axios/masterData/masterDataApi';
import { Project_Info } from '@/types/project.types';
import Loader from '../Loader';


export default function ProjectInfo({ step }: TabsProps) {

  const { ProjectContextData, setProjectContextData, setLoaderData, projectId } = useProjectInfoContext();
  const [showOther, setshowOther] = React.useState(false)
  const [otherID, setotherID] = useState(0);

  const [data, setData] = useState<Project_Info>({
    ProjectName: "",
    ProjectCode: "",
    ProjectManager: "",
    ProjectVerifier: "",
    ClientScope: "",
    Budget: "",
    Originator: "",
    Lead: "",
    Advisor: "",
    StudyOther: "",
    master_type_study: 0, // Set an initial value
  });
  const [masterTypeStudy, setMasterTypeStudy] = useState<MasterTypeStudy[]>([]);
  const [LoaderData, setLoaderDatastate] = useState({ data: "", display: false });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, tname: string = "") => {
    const { name, value } = e.target;
    if (tname === "master_type_study") {
      setData({ ...data, "master_type_study": Number(value) })
      return;
    }
    setData({ ...data, [tname === "" ? name : tname]: value })
  };

  const handleradiobutton = (e: HTMLTextAreaElement) => {
    setData({ ...data, [e.name]: Number(e.value) })
  }

  const fill = () => {
    setLoaderData({ data: "Saving Data...", display: true, type:1 });
    setProjectContextData(data); // set context
    createProject(data)
      .then(e => {
        console.log("successfully created Project-Info")
        setData(data);
        setLoaderData({ data: "Data Saved", display: true, type:2 });
        setTimeout(() => {
          setLoaderData({ data: "", display: false, type:1 });
        }, 2000);
      })
      .catch(err => {
        setLoaderData({ data: err.message, display: true, type:3 });
        console.log(err.message)
      })
  }
  const fetchdata = async () => {
    const response = await getProjectInfoMasterData();
    setMasterTypeStudy(response.data);
    const otherTask = response.data.find((task: MasterTypeStudy) => task.attributes.Field === "Other");
    setotherID(otherTask.attributes.MasterTypeStudy_Id);
  }
  React.useEffect(() => {
    fetchdata();
  }, [])
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
          <select name="ProjectManager" className='form-control w-[20rem] relative' onChange={(e => {
            handleInputChange(e);
          })}>
            <option value="" className=''>Select Project Manager</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <div className="mb-3 d-flex flex-row w-[65%]">
          <label htmlFor="ProjectVerifier" className='w-25'>Project Verifier</label>
          <select name="ProjectVerifier" className='form-control w-[20rem]'
            onChange={(e => {
              handleInputChange(e);
            })}>
            <option value="" className=''>Select Project Verifier</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
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
          <select className='form-control w-[20rem]'
            onChange={(e => {
              handleInputChange(e, "Originator");
            })}>
            <option value="" className=''>Select Originator</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <div className="mb-3 d-flex flex-row w-[65%]">
          <label htmlFor="ModellingTeam" className='w-25'>Lead</label>
          <select className='form-control w-[20rem]'
            onChange={(e => {
              handleInputChange(e, "Lead");
            })}>
            <option value="" className=''>Select Lead</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <div className="mb-3 d-flex flex-row w-[65%]">
          <label htmlFor="ModellingTeam" className='w-25'>Advisor</label>
          <select className='form-control w-[20rem]'
            onChange={(e => {
              handleInputChange(e, "Advisor");
            })}>
            <option value="" className=''>Select Advisor</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        {/* <div className="mb-3 grid grid-cols-4 items-right ml-[-9rem]" style={{ gap: "0rem" }}>
            <div></div>
          </div> */}
        <div className="mb-3 d-flex flex-row w-[65%] mt-[30px]" style={{ marginTop: "30px" }}>
          <label htmlFor="master_type_study" className='w-25'>Type of Study</label>
          <select className='form-control w-[20rem]' name="master_type_study" id="master_type_study" required
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