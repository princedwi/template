import React, { useState } from 'react'
import { TabsProps } from './project-info'
import { conceptReview, conceptReviewUpdate, getconceptReview } from '@/utilities/axios/project/createProject';
import { getConceptReviewMasterData } from '@/utilities/axios/masterData/masterDataApi';
import { MasterModellingTask } from '@/types/master_data.types';
import { useProjectInfoContext } from '@/context/context';
import { stringifyError } from 'next/dist/shared/lib/utils';
import { useSearchParams } from 'next/navigation'
export default function ConceptReview({ step }: TabsProps) {
  const searchParams = useSearchParams()
  const paramsid: unknown = searchParams.get('id')
  const [isfetchdata, setisfetchdata] = React.useState(false);
  const [showOther, setshowOther] = React.useState(false)
  const [masterModellingTasks, setmasterModellingTasks] = useState<MasterModellingTask[]>([]);
  const [otherID, setotherID] = useState(0);
  const { setLoaderData, projectId } = useProjectInfoContext();
  const [ID, setID] = useState(-1);

  const [formData, setFormData] = useState({
    Modelling_Objective: '',
    Link_to_Hydrology: '',
    Main_Data_Gaps: '',
    Main_Assumption_Risk: '',
    Data_Management_Strategy: '',
    Events_To_Be_Modelled: '',
    Climate_Change_Approach: '',
    ModellingTaskOther: '',
    Modelling_Task: 0,
    ProjectID: paramsid?paramsid as number:projectId
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, str: string = "") => {
    const { name, value } = e.target;
    setFormData({ ...formData, [str === "" ? name : str]: value });
  };
  const handleradiobutton = (e: HTMLTextAreaElement) => {
    setFormData({ ...formData, [e.name]: Number(e.value) })
  }
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoaderData({ data: "Saving Data...", display: true, type: 1 });
    e.preventDefault();
    // return;
    try {
      if (ID !== -1) {
        setLoaderData({ data: "Updating Data", display: true, type: 1 });
        const res = await conceptReviewUpdate({ ...formData, ProjectID: paramsid?paramsid as number:projectId }, ID);
        setFormData(formData);
        setLoaderData({ data: "Data Updated", display: true, type: 2 });
        console.log('successfully updated CONCEPT-REVIEW')
        return;
      }
      setFormData({ ...formData, ProjectID: projectId })
      setLoaderData({ data: "Saving Data", display: true, type: 1 });
      const res = await conceptReview({ ...formData, ProjectID: paramsid?paramsid as number:projectId });
      setLoaderData({ data: "Data Saved", display: true, type: 2 });
      setID(res.data.id);
      setFormData(formData);
      console.log('successfully created CONCEPT-REVIEW')
    } catch (error) {
      console.error('Error creating project:', error);
      setLoaderData({ data: JSON.stringify(error) ? JSON.stringify(error) : "Some Error Occurred, Please Try Again Later", display: true, type: 3 });
    }
  };
  // conceptReview(formData)
  //     .then(e => {
  //       console.log("successfully created concept-review")
  //       setFormData(formData);
  //     })
  //     .catch(err => console.log(err.message))
  React.useEffect(() => {
    if (masterModellingTasks.length == 0) {
      getConceptReviewMasterData().then((response) => {
        setmasterModellingTasks(response.data);
        const otherTask = response.data.find((task: MasterModellingTask) => task.attributes.Field === "Other");
        setotherID(otherTask.id);
      });
    }
    if (paramsid && !isfetchdata) {
      getconceptReview(Number(paramsid)).then((response) => {
        if (response.data.length > 0) {
          setID(response.data[0].id);
          if (response && response.data && response.data.length > 0) {
            setFormData({
              Modelling_Objective: response.data[0].attributes.Modelling_Objective,
              Link_to_Hydrology: response.data[0].attributes.Link_to_Hydrology,
              Main_Data_Gaps: response.data[0].attributes.Main_Data_Gaps,
              Main_Assumption_Risk: response.data[0].attributes.Main_Assumption_Risk,
              Data_Management_Strategy: response.data[0].attributes.Data_Management_Strategy,
              Events_To_Be_Modelled: response.data[0].attributes.Events_To_Be_Modelled,
              Climate_Change_Approach: response.data[0].attributes.Climate_Change_Approach,
              Modelling_Task: response.data[0].attributes.Modelling_Task.data.id,
              ModellingTaskOther: response.data[0].attributes.ModellingTaskOther,
              ProjectID: paramsid as number
            });
          }
        }
      }
      )
        .catch(error =>
          console.log(error, "ERRRr")
        )

      setisfetchdata(true);
    }
  }, [formData])
  return (

    <div
      className={`tab-pane fade relative ${step == 2 ? "show active" : ""}`}
      style={{ backgroundColor: 'white', padding: '3rem' }}
      id="step2"
    >

      <div>
        <div className=' text-center flex  items-end justify-end absolute top-[1rem] right-[1rem] float-right '>
          <button type="submit" style={{ 'backgroundColor': '#263c9c', 'padding': '0.5rem', 'color': 'white', 'borderRadius': '10px', 'float': 'right' }} className='border w-[fit-content] p-1 px-3 mb-4 rounded-xl bg-[#263c9c]  text-white text-[18px] cursor-pointer' onClick={handleSubmit}>Submit</button>
        </div>
        <div className="mb-3 d-flex flex-row">
          <label htmlFor="Modelling_Objective" className='w-25'>Modelling Objectives and how does it meet the overall project aims</label>
          <input type="text" name="Modelling_Objective" className="form-control w-25 h-[fit-content]" id="Modelling_Objective"
            value={
              formData.Modelling_Objective
            } onChange={(e => { handleInputChange(e); })} />
        </div>
        <div className="mb-3 d-flex flex-row">
          <label htmlFor="Modelling_approach" className='w-25'>Define Modelling approach</label>
          <input type="text" disabled name="field3" className="form-control w-25" id="field3" />
        </div>
        <div className="mb-3 d-flex flex-row">
          <label htmlFor="Link_to_Hydrology" className='w-25'>Link to Hydrology MS</label>
          <input type="text" name="Link_to_Hydrology" className="form-control w-25" id="Link_to_Hydrology"
            value={
              formData.Link_to_Hydrology
            }
            onChange={(e => { handleInputChange(e); })} />
        </div>
        <div className="mb-3 d-flex flex-row">
          <label htmlFor="field3" className='w-25'>Input Data Required</label>
          <input type="text" disabled name="field3" className="form-control w-25" id="field3" />
        </div>
        <div className="mb-3 d-flex flex-row">
          <label htmlFor="field3" className='w-25'>Key Output Required</label>
          <input type="text" disabled name="field3" className="form-control w-25" id="field3" />
        </div>
        <div className="mb-3 d-flex flex-row">
          <label htmlFor="Main_Data_Gaps" className='w-25'>Main Data gaps</label>
          <input type="text" name="Main_Data_Gaps"
            value={
              formData.Main_Data_Gaps
            }
            className="form-control w-25" id="Main_Data_Gaps" onChange={(e => { handleInputChange(e); })} />
        </div>
        <div className="mb-3 d-flex flex-row">
          <label htmlFor="Main_Assumption_Risk" className='w-25'>Main Assumptions/Risks/Concerns</label>
          <input type="text" name="Main_Assumption_Risk"
          value={
            formData.Main_Assumption_Risk
          }
           className="form-control w-25" id="Main_Assumption_Risk" onChange={(e => { handleInputChange(e); })} />
        </div>
        <div className="mb-3 d-flex flex-row">
          <label htmlFor="Data_Management_Strategy" className='w-25'>Data Management Strategy</label>
          <input type="text" name="Data_Management_Strategy"
            value={
              formData.Data_Management_Strategy
            }
            className="form-control w-25" id="Data_Management_Strategy" onChange={(e => { handleInputChange(e); })} />
        </div>
        <div className='mb-3 d-flex flex-row'>
          <label htmlFor="Modelling_Task" className='w-25'>Modelling Tasks</label>
          <select name="Modelling_Task" className='form-control w-25'
            value={
              formData.Modelling_Task
            }
            onChange={(e) => {
              if (Number(e.target.value) === otherID) {
                console.log("Other selected");
                setshowOther(true);
              }
              else {
                setshowOther(false);
              }
              handleInputChange(e, "Modelling_Task");
            }}
          >
            <option value="">Select Modelling Task</option>
            {masterModellingTasks.map(function (task, index) {
              // if(task.attributes.Field.toLowerCase()==="other"){
              //   setotherID(task.attributes.MasterModellingTask_ID);
              // }
              return (
                <option key={task.id} value={task.id}>{task.attributes.Field}</option>
              )
            })}
          </select>
        </div>
        <div>
          <div className='mb-3 d-flex flex-row'>
            <label className='w-25'></label>
            {showOther && <input type="text" name="ModellingTaskOther"
            value={
              formData.ModellingTaskOther
            }
            className="form-control w-25" onChange={(e) => { handleInputChange(e); }} id="ModellingTaskOther" />}
          </div>
          {/* <div className='mb-4 d-flex flex-row' style={{}}>
            <input type='radio' name="Modelling_Task" id="ModellingTaskOther" value={6} onClick={(e) => { setshowOther(true); handleradiobutton(e.target as HTMLTextAreaElement); }}></input>
            <label htmlFor="ModellingTaskOther" style={{ marginLeft: "8px", marginRight: "19.9%", paddingTop: "7px" }}>Other</label>
            {showOther && <input type="text" name="ModellingTaskOther" className="form-control w-25 ml-[rem]" onChange={(e) => { handleInputChange(e); }} id="ModellingTaskOther" />}
          </div> */}
        </div>

        <div className="mb-3 d-flex flex-row">
          <label htmlFor="Events_To_Be_Modelled" className='w-25'>Events to be modelled</label>
          <input type="text" name="Events_To_Be_Modelled"
            value={
              formData.Events_To_Be_Modelled
            }
            className="form-control w-25" id="Events_To_Be_Modelled" onChange={(e => { handleInputChange(e); })} />
        </div>
        <div className="mb-3 d-flex flex-row">
          <label htmlFor="Climate_Change_Approach" className='w-25'>Climate Change Approach</label>
          <input type="text" name="Climate_Change_Approach"
            value={
              formData.Climate_Change_Approach
            }
            className="form-control w-25" id="Climate_Change_Approach" onChange={(e => { handleInputChange(e); })} />
        </div>
      </div>
    </div>
  )
}

