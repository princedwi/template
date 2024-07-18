import React from 'react'
import { TabsProps } from './project-info'


export default function ConceptReview({ step }: TabsProps) {
  const [showOther, setshowOther] = React.useState(false)
  return (

    <div
      className={`tab-pane fade relative ${step == 2 ? "show active" : ""}`}
      style={{backgroundColor: 'white',padding: '3rem'}}
      id="step2"
    >
            <div className=' text-center flex  items-end justify-end absolute top-[1rem] right-[1rem] float-right '>
            <div className='border w-[fit-content] p-1 px-3 mb-4 rounded-xl bg-[#263c9c]  text-white text-[18px] cursor-pointer' onClick={() => {  }}>Submit</div>
          </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-25'>Modelling Objectives and how does it meet the overall project aims</label>
        <input type="text" name="field1" className="form-control w-25" id="field1" />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field2" className='w-25'>Define Modelling approach</label>
        {/* <input type="text" name="field3" className="form-control w-25" id="field3" /> */}
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field3" className='w-25'>Link to Hydrology MS</label>
        <input type="text" name="field3" className="form-control w-25" id="field3" />
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
        <label htmlFor="field3" className='w-25'>Main Data gaps</label>
        <input type="text" name="field3" className="form-control w-25" id="field3" />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field3" className='w-25'>Main Assumptions/Risks/Concerns</label>
        <input type="text" name="field3" className="form-control w-25" id="field3" />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field3" className='w-25'>Data Management Strategy</label>
        <input type="text" name="field3" className="form-control w-25" id="field3" />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field3" className='w-25'>Modelling Tasks</label>
      </div>
      <div>
        <input type="radio" name="field3" id="field3" onClick={()=>{setshowOther(false)}} />
        <label htmlFor="field3" className='w-25' style={{ marginLeft: "8px" }}>Model Build</label>
        <div>
          <input type="radio" name="field3" id="field3" onClick={()=>{setshowOther(false)}} />
          <label htmlFor="field3" className='w-25' style={{ marginLeft: "8px" }}>Model Calibration/Verification</label>
        </div>
        <div>
          <input type="radio" name="field3" id="field3" onClick={()=>{setshowOther(false)}} />
          <label htmlFor="field3" className='w-25' style={{ marginLeft: "8px" }}>Sensitivity Testing</label>
        </div>
        <div>
          <input type="radio" name="field3" id="field3" onClick={()=>{setshowOther(false)}} />
          <label htmlFor="field3" className='w-25' style={{ marginLeft: "8px" }}>RUA</label>
        </div>
        <div>
          <input type="radio" name="field3" id="field3" onClick={()=>{setshowOther(false)}} />
          <label htmlFor="field3" className='w-25' style={{ marginLeft: "8px" }}>Scenario Modelling</label>
        </div>
        <div className='mb-4 d-flex flex-row' style={{  }}>
          <input type='radio' name="field3" id="field3" onClick={()=>{setshowOther(true)}}></input>
          <label htmlFor="field3" style={{ marginLeft: "8px", marginRight: "19.9%" , paddingTop:"7px"}}>Other</label>
          {showOther && <input type="text" name="field3" className="form-control w-25 ml-[rem]" id="field3" />}
        </div>
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field3" className='w-25'>Events to be modelled</label>
        <input type="text" name="field3" className="form-control w-25" id="field3" />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field3" className='w-25'>Climate Change Approach</label>
        <input type="text" name="field3" className="form-control w-25" id="field3" />
      </div>
    </div>
  )
}

