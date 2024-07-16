import React, { useState } from 'react'
export interface TabsProps {
  step: number;
}
import { useProjectInfoContext } from '@/context/context';
import { createProject } from '@/utilities/axios/project/createProject';
import { Project_Info } from '@/types/project.types';
// import { createProject } from '@/utilities/axios/createproject';
export default function ProjectInfo({ step }: TabsProps) {

  const { ProjectContextData, setProjectContextData } = useProjectInfoContext();
  const [showOther, setshowOther] = React.useState(false)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, tname: string = "") => {
    const { name, value } = e.target;
    setData({ ...data, [tname === "" ? name : tname]: value })
  };

  const handleradiobutton = (e: HTMLTextAreaElement) => {
    setData({ ...data, [e.name]: Number(e.value) })
  }

  const fill = () => {
    // to check if none of the field is empty
    for (const key in data)
      if ((key === "StudyOther" && data["master_type_study" as keyof Project_Info] === 9 && data[key as keyof Project_Info] === "") || ((key) != "StudyOther" && data[key as keyof Project_Info] === ""))
        return;

    setProjectContextData(data); // set context

    createProject(data)
      .then(e => {
        console.log("successfully created")
        setData(data);
      })
      .catch(err => console.log(err.message))
  }

  return (
    <>
      <div
        className={`tab-pane fade relative ${step == 1 ? "show active" : ""}`}
        style={{ backgroundColor: 'white', padding: '3rem' }}
        id="step1"
      >
        <link href='tabs/style.css'></link>
        <form>
          <div className=' text-center flex  items-end justify-end absolute top-[1rem] right-[1rem] float-right '>
            {/* <button type="submit" className='border w-[fit-content] p-1 px-3 mb-4 rounded-xl bg-[#263c9c]  text-white text-[18px] cursor-pointer' onClick={() => { fill() }} style={{ 'backgroundColor': '#263c9c', 'padding': '0.5rem', 'color': 'white', 'borderRadius': '10px' }}>Submit</button> */}
            <div className='border w-[fit-content] p-1 px-3 mb-4 rounded-xl bg-[#263c9c]  text-white text-[18px] cursor-pointer' onClick={() => { fill() }}>Submit</div>
          </div>
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
          <div className='w-full'>

            <div className="mb-3 flex" style={{
              justifyContent: "start",
              justifyItems: "start",
            }}>
              <label htmlFor="ModellingTeam" className='w-[12rem]'>Modelling Team</label>
              <label htmlFor="ModellingTeam" className='w-[21rem]'>Originator</label>
              <label htmlFor="ModellingTeam" className='w-[21rem]'>Lead</label>
              <label htmlFor="ModellingTeam" className='w-[21rem]'>Advisor</label>
            </div>
          </div>
          <div className="mb-3 grid grid-cols-4 items-right ml-[-9rem]" style={{ gap: "0rem" }}>
            <div></div>
            <select className='form-control w-[95%]'
              onChange={(e => {
                handleInputChange(e, "Originator");
              })}>
              <option value="" className=''>Select Originator</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
            <select className='form-control w-[95%]'
              onChange={(e => {
                handleInputChange(e, "Lead");

              })}
            >
              <option value="" className=''>Select Lead</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
            <select className='form-control w-[95%]'
              onChange={(e => {
                handleInputChange(e, "Advisor");

              })}>
              <option value="" className=''>Select Advisor</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          <div className="mb-3 d-flex flex-row w-[65%]">
            <label htmlFor="master_type_study" className='w-25'>Type of Study</label>
          </div>
          <div>
            <input type="radio" name="master_type_study" id="master_type_study" value="0" onClick={(e) => {
              handleradiobutton(e.target as HTMLTextAreaElement);
              setshowOther(false)
            }} />
            <label htmlFor="master_type_study" className='w-25' style={{ marginLeft: "8px" }}>SOB</label>
            <input type="radio" name="master_type_study" id="master_type_study" value="1" onClick={(e) => {
              handleradiobutton(e.target as HTMLTextAreaElement);

              setshowOther(false)
            }} className='' />
            <label htmlFor="master_type_study" className='w-25' style={{ marginLeft: "8px" }}>Surface Water Flood Mapping</label>
            <input type="radio" name="master_type_study" value="2" id="master_type_study" onClick={(e) => {
              handleradiobutton(e.target as HTMLTextAreaElement);

              setshowOther(false)
            }} />
            <label htmlFor="master_type_study" style={{ marginLeft: "8px" }}>Flood Risk Assessment</label>
          </div>
          <div>
            <input type="radio" name="master_type_study" id="master_type_study" value="3" onClick={(e) => {
              handleradiobutton(e.target as HTMLTextAreaElement);
              setshowOther(false)
            }} />
            <label htmlFor="master_type_study" className='w-25' style={{ marginLeft: "8px" }}>OBC</label>
            <input type="radio" name="master_type_study" id="master_type_study" value="4" onClick={(e) => {
              handleradiobutton(e.target as HTMLTextAreaElement);
              setshowOther(false)
            }} />
            <label htmlFor="master_type_study" className='w-25' style={{ marginLeft: "8px" }}>Reservoir Inundation Flood Mapping</label>
            {/* <div className=''> */}
            <input type="radio" name="master_type_study" id="master_type_study" value="9" onClick={(e) => {
              setshowOther(true);
              handleradiobutton(e.target as HTMLTextAreaElement);
            }} />
            <label htmlFor="StudyOther" style={{ marginLeft: "0.5rem" }}>Other: </label>
            {showOther && <input type="input" name="StudyOther" id="StudyOther" onChange={(e) => { handleInputChange(e, "StudyOther") }} style={{ marginLeft: "8rem" }} className={` border border-sm rounded-lg`} />}
            {/* </div> */}
          </div>
          <div>
            <input type="radio" name="master_type_study" id="master_type_study" value="5" onClick={(e) => {
              handleradiobutton(e.target as HTMLTextAreaElement);
              setshowOther(false)
            }} />
            <label htmlFor="master_type_study" className='w-25' style={{ marginLeft: "8px" }}>Detailed Desgin</label>
            <input type="radio" name="master_type_study" id="master_type_study" value="6" onClick={(e) => {
              handleradiobutton(e.target as HTMLTextAreaElement);
              setshowOther(false)
            }} />
            <label htmlFor="master_type_study" style={{ marginLeft: "8px" }}>Reservoir Flood Safety</label>
          </div>
          <div>
            <input type="radio" name="master_type_study" id="master_type_study" value="7" onClick={(e) => {
              handleradiobutton(e.target as HTMLTextAreaElement);
              setshowOther(false)
            }} />
            <label htmlFor="master_type_study" className='w-25' style={{ marginLeft: "8px" }}>Fluvial Flood Mapping</label>
            <input type="radio" name="master_type_study" id="master_type_study" value="8" onClick={(e) => {
              handleradiobutton(e.target as HTMLTextAreaElement);
              setshowOther(false)
            }} />
            <label htmlFor="master_type_study" style={{ marginLeft: "8px" }}>Initial Assessment</label>
          </div>
        </form>
      </div>
    </>
  )
}