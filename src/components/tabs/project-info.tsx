import React from 'react'

export interface TabsProps {
    step: number;
}
export default function ProjectInfo({step}: TabsProps) {
  return (
    
      <div
            className={`tab-pane fade ${step == 1 ? "show active" : ""}`}
            id="step1"
          >
            <link href='tabs/style.css'></link>
            <div className="mb-3 d-flex flex-row">
              <label htmlFor="field1" className='w-25'>Project Name</label>
              <input type="text" name="field1" className="form-control w-25 ml-3" id="field1" required />
            </div>
            <div className="mb-3 d-flex flex-row">
              <label htmlFor="field2" className='w-25'>Project Code</label>
              <input type="email" name="field2" className="form-control w-25" id="field2" required />
            </div>
            <div className="mb-3 d-flex flex-row">
              <label htmlFor="field3" className='w-25'>Project Manager</label>
              <input type="text" name="field3" className="form-control w-25" id="field3" />
            </div>
            <div className="mb-3 d-flex flex-row">
              <label htmlFor="field3" className='w-25'>Project Verifier</label>
              <input type="text" name="field4" className="form-control w-25" id="field4" />
            </div>
            <div className="mb-3 d-flex flex-row">
              <label htmlFor="field3" className='w-25'>Client Scope</label>
              <input type="text" name="field5" className="form-control w-25" id="field5" />
            </div>
            <div className="mb-3 d-flex flex-row">
              <label htmlFor="field3" className='w-25'>Budget</label>
              <input type="text" name="field6" className="form-control w-25" id="field6" />
            </div>
            <div className="mb-3 d-flex flex-row">
              <label htmlFor="field3" className='w-25'>Modelling Team</label>
              <label htmlFor="field3" className='w-25'>Originator</label>
              <label htmlFor="field3" className='w-25'>Lead</label>
              <label htmlFor="field3" className='w-25'>Advisor</label>
              </div>
              <div className="mb-3 d-flex flex-row">
              <input type="text" name="field7" className="form-control w-25" id="field7" />
              <input type="text" name="field7" className="form-control w-25" id="field7" />
              <input type="text" name="field7" className="form-control w-25" id="field7" />
              <input type="text" name="field7" className="form-control w-25" id="field7" />
            </div>
            <div className="mb-3 d-flex flex-row">
              <label htmlFor="field3" className='w-25'>Type of Study</label>
            </div>
            <div>
              <input type="radio" name="field3" id="field3"/>
                <label htmlFor="field3" className='w-25'>SOB</label>
                <input type="radio" name="field3" id="field3"/>
                <label htmlFor="field3" className='w-25'>Surface Water Flood Mapping</label>
                <input type="radio" name="field3" id="field3"/>
                <label htmlFor="field3">Flood Risk Assessment</label>
            </div>
            <div>
              <input type="radio" name="field3" id="field3"/>
                <label htmlFor="field3" className='w-25'>OBC</label>
                <input type="radio" name="field3" id="field3"/>
                <label htmlFor="field3" className='w-25'>Reservoir Inundation Flood Mapping</label>
                <label htmlFor="field3">Other</label>
                <input type="input" name="field3" id="field3"/>
            </div>
            <div>
              <input type="radio" name="field3" id="field3"/>
                <label htmlFor="field3" className='w-25'>Detailed Desgin</label>
                <input type="radio" name="field3" id="field3"/>
                <label htmlFor="field3">Reservoir Flood Safety</label>
            </div>
            <div>
              <input type="radio" name="field3" id="field3"/>
                <label htmlFor="field3" className='w-25'>Fluvial Flood Mapping</label>
                <input type="radio" name="field3" id="field3"/>
                <label htmlFor="field3">Initial Assessment</label>
            </div>
                
                
          </div>

  )
}

