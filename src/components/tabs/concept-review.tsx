import React, { useState } from 'react'
import { TabsProps } from './project-info'
import { conceptReview } from '@/utilities/axios/project/createProject';


export default function ConceptReview({ step }: TabsProps) {
  const [showOther, setshowOther] = React.useState(false)

  const [formData, setFormData] = useState({
    Modelling_Objective:'' ,
    Link_to_Hydrology: '',
    Main_Data_Gaps: '',
    Main_Assumption_Risk: '',
    Data_Management_Strategy: '',
    Events_To_Be_Modelled: '',
    Climate_Change_Approach: '',
    ModellingTaskOther: '',
    Modelling_Task:4,
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await conceptReview(formData);
      setFormData(formData);
      console.log('successfully created CONCEPT-REVIEW')
    } catch (error) {
 
      console.error('Error creating project:', error);
    }
  };
  // conceptReview(formData)
  //     .then(e => {
  //       console.log("successfully created concept-review")
  //       setFormData(formData);
  //     })
  //     .catch(err => console.log(err.message))

  return (

    <div
      className={`tab-pane fade ${step == 2 ? "show active" : ""}`}
      style={{backgroundColor: 'white',padding: '3rem'}}
      id="step2"
    >
      <form onSubmit={handleSubmit}>
      <button type="submit" style={{'backgroundColor':'#263c9c','padding':'0.5rem','color':'white','borderRadius':'10px'}}>Submit</button>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="Modelling_Objective" className='w-25'>Modelling Objectives and how does it meet the overall project aims</label>
        <input type="text" name="Modelling_Objective" className="form-control w-25" id="Modelling_Objective" onChange={(e => {handleInputChange(e);})}/>
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="Modelling_approach" className='w-25'>Define Modelling approach</label>
        {/* <input type="text" name="field3" className="form-control w-25" id="field3" /> */}
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="Link_to_Hydrology" className='w-25'>Link to Hydrology MS</label>
        <input type="text" name="Link_to_Hydrology" className="form-control w-25" id="Link_to_Hydrology" onChange={(e => {handleInputChange(e);})}/>
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field3" className='w-25'>Input Data Required</label>
        {/* <input type="text" name="field3" className="form-control w-25" id="field3" /> */}
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field3" className='w-25'>Key Output Required</label>
        {/* <input type="text" name="field3" className="form-control w-25" id="field3" /> */}
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="Main_Data_Gaps" className='w-25'>Main Data gaps</label>
        <input type="text" name="Main_Data_Gaps" className="form-control w-25" id="Main_Data_Gaps" onChange={(e => {handleInputChange(e);})} />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="Main_Assumption_Risk" className='w-25'>Main Assumptions/Risks/Concerns</label>
        <input type="text" name="Main_Assumption_Risk" className="form-control w-25" id="Main_Assumption_Risk" onChange={(e => {handleInputChange(e);})} />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="Data_Management_Strategy" className='w-25'>Data Management Strategy</label>
        <input type="text" name="Data_Management_Strategy" className="form-control w-25" id="Data_Management_Strategy" onChange={(e => {handleInputChange(e);})}/>
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="Modelling_Task" className='w-25'>Modelling Tasks</label>
      </div>
      <div>
        <input type="radio" name="Modelling_Task" id="Modelling_Task" onClick={()=>{setshowOther(false)}} />
        <label htmlFor="Modelling_Task" className='w-25' style={{ marginLeft: "8px" }}>Model Build</label>
        <div>
          <input type="radio" name="Modelling_Task" id="Modelling_Task" onClick={()=>{setshowOther(false)}} />
          <label htmlFor="Modelling_Task" className='w-25' style={{ marginLeft: "8px" }}>Model Calibration/Verification</label>
        </div>
        <div>
          <input type="radio" name="Modelling_Task" id="Modelling_Task" onClick={()=>{setshowOther(false)}} />
          <label htmlFor="Modelling_Task" className='w-25' style={{ marginLeft: "8px" }}>Sensitivity Testing</label>
        </div>
        <div>
          <input type="radio" name="Modelling_Task" id="Modelling_Task" onClick={()=>{setshowOther(false)}} />
          <label htmlFor="Modelling_Task" className='w-25' style={{ marginLeft: "8px" }}>RUA</label>
        </div>
        <div>
          <input type="radio" name="Modelling_Task" id="Modelling_Task" onClick={()=>{setshowOther(false)}} />
          <label htmlFor="Modelling_Task" className='w-25' style={{ marginLeft: "8px" }}>Scenario Modelling</label>
        </div>
        <div className='mb-4 d-flex flex-row' style={{  }}>
          <input type='radio' name="ModellingTaskOther" id="ModellingTaskOther" onClick={()=>{setshowOther(true)}}></input>
          <label htmlFor="ModellingTaskOther" style={{ marginLeft: "8px", marginRight: "19.9%" , paddingTop:"7px"}}>Other</label>
          {showOther && <input type="text" name="ModellingTaskOther" className="form-control w-25 ml-[rem]" id="ModellingTaskOther" />}
        </div>
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="Events_To_Be_Modelled" className='w-25'>Events to be modelled</label>
        <input type="text" name="Events_To_Be_Modelled" className="form-control w-25" id="Events_To_Be_Modelled" onChange={(e => {handleInputChange(e);})}/>
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="Climate_Change_Approach" className='w-25'>Climate Change Approach</label>
        <input type="text" name="Climate_Change_Approach" className="form-control w-25" id="Climate_Change_Approach" onChange={(e => {handleInputChange(e);})}/>
      </div>
      </form>
    </div>
  )
}

