import React from 'react'
import { TabsProps } from './project-info'


    export default function ConceptReview({step}: TabsProps) {
        return (
    
      <div
            className={`tab-pane fade ${step == 2 ? "show active" : ""}`}
            id="step2"
          >
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
              <input type="radio" name="field3" id="field3"/>
              <label htmlFor="field3" className='w-25'>Model Build</label>
                <div>
                  <input type="radio" name="field3" id="field3"/>
                  <label htmlFor="field3" className='w-25'>Model Calibration/Verification</label>
                </div>
                <div>
                  <input type="radio" name="field3" id="field3"/>
                  <label htmlFor="field3" className='w-25'>Sensitivity Testing</label>
                </div>
                <div>
                  <input type="radio" name="field3" id="field3"/>
                  <label htmlFor="field3" className='w-25'>RUA</label>
                </div>
                <div>
                  <input type="radio" name="field3" id="field3"/>
                  <label htmlFor="field3" className='w-25'>Scenario Modelling</label>
                </div>
                <div>
                  <input type='radio'></input><label htmlFor="field3">Other</label>
                  <input type="input" name="field3" id="field3"/>
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

