import React, { useState } from 'react'
import { ProjectInfoInterface } from '@/app/CreateQA/page';
export interface TabsProps {
  step: number;
}
import { useProjectInfoContext } from '@/context/context';
import { mpdata2 } from '@/app/CreateQA/page';
import { createProject } from '@/utilities/axios/createProject';
// import { createProject } from '@/utilities/axios/createproject';
export default function ProjectInfo({ step }: TabsProps) {
  const [formData, setFormData] = useState({
    ProjectName: '',
    ProjectCode: '',
    ProjectManager: '',
    ProjectVerifier: '',
    ClientScope: '',
    Budget: '',
    ModellingTeam: '',
    StudyOther: '',
    master_type_study: 0, // Set an initial value
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormData({ ...formData, [name]: value });
    console.log("Formdata", formData)
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let u = { ProjectName: "DDS" };
    console.log("Formdata", formData)
    try {
      console.log("Formdata", formData)
      await createProject(formData);
      console.log('successfully created')
    } catch (error) {

      console.error('Error creating project:', error);
    }
  };
  const [showOther, setshowOther] = React.useState(false)
  // const [context, setContext] = React.useContext<string>(ProjectInfoContext);

  const [data, setData] = React.useState<mpdata2>({
    projectname: "",
    projectcode: "",
    projectmanager: "",
    projectverifier: "",
    clientscope: "",
    budget: "",
    originator: "",
    lead: "",
    advisor: "",
    typeofstudy: "",
  })
  const { mpdata, setdatam } = useProjectInfoContext();
  const fill = () => {
    if (data["projectname"] === "" ||
      data["projectcode"] === "" ||
      data["projectmanager"] === "" ||
      data["projectverifier"] === "" ||
      data["clientscope"] === "" ||
      data["budget"] === "" ||
      data["originator"] === "" ||
      data["lead"] === "" ||
      data["advisor"] === "" ||
      data["typeofstudy"] === "") {
      return;
    }
    setdatam(data);
  }
  return (
    <>
      <div
        className={`tab-pane fade relative ${step == 1 ? "show active" : ""}`}
        style={{ backgroundColor: 'white', padding: '3rem' }}
        id="step1"
      >
        <link href='tabs/style.css'></link>
        <form onSubmit={handleSubmit}>
        <div className=' text-center flex  items-end justify-end absolute top-[1rem] right-[1rem] float-right '>
          {/* <button type="submit" className='border w-[fit-content] p-1 px-3 mb-4 rounded-xl bg-[#263c9c]  text-white text-[18px] cursor-pointer' onClick={() => { fill() }} style={{ 'backgroundColor': '#263c9c', 'padding': '0.5rem', 'color': 'white', 'borderRadius': '10px' }}>Submit</button> */}
          <div className='border w-[fit-content] p-1 px-3 mb-4 rounded-xl bg-[#263c9c]  text-white text-[18px] cursor-pointer' onClick={() => { fill() }}>Submit</div>
        </div>
          <div className="mb-3 d-flex flex-row w-[65%]">
            <label htmlFor="ProjectName" className='w-25'>Project Name</label>
            <input type="text" name="ProjectName" className="form-control w-[20rem]" id="ProjectName" required value={data.projectname}
              onChange={(e => {
                handleInputChange(e);
                setData((prevData) => ({
                  ...prevData,
                  projectname: e.target.value
                }));
              })} />
          </div>
          <div className="mb-3 d-flex flex-row w-[65%]">
            <label htmlFor="ProjectCode" className='w-25'>Project Code</label>
            <input type="text" name="ProjectCode" className="form-control w-[20rem]" id="ProjectCode" value={data.projectcode} required
              onChange={(e => {
                handleInputChange(e);
                setData((prevData) => ({
                  ...prevData,
                  projectcode: e.target.value
                }));
              })}
            />
          </div>
          <div className="mb-3 d-flex flex-row w-[65%]">
            <label htmlFor="ProjectManager" className='w-25'>Project Manager</label>
            <select className='form-control w-[20rem]' onChange={(e => {
              setData((prevData) => ({
                ...prevData,
                projectmanager: e.target.value
              }));
            })}>
              <option value="" className=''>Select Project Manager</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          <div className="mb-3 d-flex flex-row w-[65%]">
            <label htmlFor="ProjectVerifier" className='w-25'>Project Verifier</label>
            <select className='form-control w-[20rem]'
              onChange={(e => {
                setData((prevData) => ({
                  ...prevData,
                  projectverifier: e.target.value
                }));
              })}>
              <option value="" className=''>Select Project Verifier</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          <div className="mb-3 d-flex flex-row w-[65%]">
            <label htmlFor="ClientScope" className='w-25'>Client Scope</label>
            <input type="text" name="ClientScope" className="form-control w-[20rem]" id="ClientScope" value={data.clientscope}
              onChange={(e => {
                handleInputChange(e);
                setData((prevData) => ({
                  ...prevData,
                  clientscope: e.target.value
                }));
              })}
            />
          </div>
          <div className="mb-3 d-flex flex-row w-[65%]">
            <label htmlFor="Budget" className='w-25'>Budget</label>
            <input type="text" name="Budget" className="form-control w-[20rem]" id="Budget" value={data.budget}
              onChange={(e => {
                handleInputChange(e);
                setData((prevData) => ({
                  ...prevData,
                  budget: e.target.value
                }));
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
                setData((prevData) => ({
                  ...prevData,
                  originator: e.target.value
                }));
              })}>
              <option value="" className=''>Select Originator</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
            <select className='form-control w-[95%]'
              onChange={(e => {
                setData((prevData) => ({
                  ...prevData,
                  lead: e.target.value
                }));
              })}
            >
              <option value="" className=''>Select Lead</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
            <select className='form-control w-[95%]'
              onChange={(e => {
                setData((prevData) => ({
                  ...prevData,
                  advisor: e.target.value
                }));
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
            <input type="radio" name="master_type_study" id="master_type_study" value="SOB" onClick={(e) => {
              const target = e.target as HTMLTextAreaElement;
              setData((prevData) => ({
                ...prevData,
                typeofstudy: target.value
              })); setshowOther(false)
            }} />
            <label htmlFor="master_type_study" className='w-25' style={{ marginLeft: "8px" }}>SOB</label>
            <input type="radio" name="master_type_study" id="master_type_study" value="Surface Water Flood Mapping" onClick={(e) => {
              const target = e.target as HTMLTextAreaElement;
              setData((prevData) => ({
                ...prevData,
                typeofstudy: target.value
              })); setshowOther(false)
            }} className='' />
            <label htmlFor="master_type_study" className='w-25' style={{ marginLeft: "8px" }}>Surface Water Flood Mapping</label>
            <input type="radio" name="master_type_study" value="Flood Risk Assessment" id="master_type_study" onClick={(e) => {
              const target = e.target as HTMLTextAreaElement;
              setData((prevData) => ({
                ...prevData,
                typeofstudy: target.value
              })); setshowOther(false)
            }} />
            <label htmlFor="master_type_study" style={{ marginLeft: "8px" }}>Flood Risk Assessment</label>
          </div>
          <div>
            <input type="radio" name="master_type_study" id="master_type_study" value="OBC" onClick={(e) => {
              const target = e.target as HTMLTextAreaElement;
              setData((prevData) => ({
                ...prevData,
                typeofstudy: target.value
              }));
              setshowOther(false)
            }} />
            <label htmlFor="master_type_study" className='w-25' style={{ marginLeft: "8px" }}>OBC</label>
            <input type="radio" name="master_type_study" id="master_type_study" value="Reservoir Inundation Flood Mapping" onClick={(e) => {
              const target = e.target as HTMLTextAreaElement;
              setData((prevData) => ({
                ...prevData,
                typeofstudy: target.value
              }));
              setshowOther(false)
            }} />
            <label htmlFor="master_type_study" className='w-25' style={{ marginLeft: "8px" }}>Reservoir Inundation Flood Mapping</label>
            {/* <div className=''> */}
            <input type="radio" name="master_type_study" id="master_type_study" onClick={(e) => { setshowOther(true) }} />
            <label htmlFor="StudyOther" style={{ marginLeft: "0.5rem" }}>Other: </label>
            {showOther && <input type="input" name="StudyOther" id="StudyOther" onClick={(e) => { setshowOther(false) }} style={{ marginLeft: "8rem" }} className={` border border-sm rounded-lg`} />}
            {/* </div> */}
          </div>
          <div>
            <input type="radio" name="master_type_study" id="master_type_study" value="Detailed Design" onClick={(e) => {
              const target = e.target as HTMLTextAreaElement;
              setData((prevData) => ({
                ...prevData,
                typeofstudy: target.value
              }));
              setshowOther(false)
            }} />
            <label htmlFor="master_type_study" className='w-25' style={{ marginLeft: "8px" }}>Detailed Desgin</label>
            <input type="radio" name="master_type_study" id="master_type_study" value="Reservoir Flood Safety" onClick={(e) => {
              const target = e.target as HTMLTextAreaElement;
              setData((prevData) => ({
                ...prevData,
                typeofstudy: target.value
              }));
              setshowOther(false)
            }} />
            <label htmlFor="master_type_study" style={{ marginLeft: "8px" }}>Reservoir Flood Safety</label>
          </div>
          <div>
            <input type="radio" name="master_type_study" id="master_type_study" value="Fluvial Flood Mapping" onClick={(e) => {
              const target = e.target as HTMLTextAreaElement;
              setData((prevData) => ({
                ...prevData,
                typeofstudy: target.value
              }));
              setshowOther(false)
            }} />
            <label htmlFor="master_type_study" className='w-25' style={{ marginLeft: "8px" }}>Fluvial Flood Mapping</label>
            <input type="radio" name="master_type_study" id="master_type_study" value="Initial Assessment" onClick={(e) => {
              const target = e.target as HTMLTextAreaElement;
              setData((prevData) => ({
                ...prevData,
                typeofstudy: target.value
              }));
              setshowOther(false)
            }} />
            <label htmlFor="master_type_study" style={{ marginLeft: "8px" }}>Initial Assessment</label>
          </div>
          {/* <button type="submit" style={{ 'backgroundColor': '#263c9c', 'padding': '0.5rem', 'color': 'white', 'borderRadius': '10px' }}>Submit</button> */}
        </form>
      </div>
    </>

  )
}

