import React from 'react'

export interface TabsProps {
    step: number;
}
export default function ProjectInfo({step}: TabsProps) {
  return (
    
      <div
            className={`tab-pane fade ${step == 1 ? "show active" : ""}`}
            style={{backgroundColor: 'white',padding: '3rem'}}
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
              <div className="mb-3 d-flex flex-row justify-left items-left" style={{gap:"4rem"}}>
              <input type="text" name="field7" className="form-control" id="field7" style={{width:"20%"}} />
              <input type="text" name="field7" className="form-control" id="field7" style={{width:"20%"}}/>
              <input type="text" name="field7" className="form-control" id="field7" style={{width:"20%"}} />
              <input type="text" name="field7" className="form-control" id="field7" style={{width:"20%"}}/>
            </div>
            <div className="mb-3 d-flex flex-row">
              <label htmlFor="field3" className='w-25'>Type of Study</label>
            </div>
            <div>
              <input type="radio" name="field3" id="field3"/>
                <label htmlFor="field3" className='w-25' style={{marginLeft:"8px"}}>SOB</label>
                <input type="radio" name="field3" id="field3" className=''/>
                <label htmlFor="field3" className='w-25' style={{marginLeft:"8px"}}>Surface Water Flood Mapping</label>
                <input type="radio" name="field3" id="field3"/>
                <label htmlFor="field3" style={{marginLeft:"8px"}}>Flood Risk Assessment</label>
            </div>
            <div>
              <input type="radio" name="field3" id="field3"/>
                <label htmlFor="field3" className='w-25' style={{marginLeft:"8px"}}>OBC</label>
                <input type="radio" name="field3" id="field3"/>
                <label htmlFor="field3" className='w-25' style={{marginLeft:"8px"}}>Reservoir Inundation Flood Mapping</label>
                <label htmlFor="field3" style={{marginLeft:"21px"}}>Other: </label>
                <input type="input" name="field3" id="field3" style={{marginLeft:"8rem"}}/>
            </div>
            <div>
              <input type="radio" name="field3" id="field3"/>
                <label htmlFor="field3" className='w-25' style={{marginLeft:"8px"}}>Detailed Desgin</label>
                <input type="radio" name="field3" id="field3"/>
                <label htmlFor="field3" style={{marginLeft:"8px"}}>Reservoir Flood Safety</label>
            </div>
            <div>
              <input type="radio" name="field3" id="field3"/>
                <label htmlFor="field3" className='w-25' style={{marginLeft:"8px"}}>Fluvial Flood Mapping</label>
                <input type="radio" name="field3" id="field3"/>
                <label htmlFor="field3" style={{marginLeft:"8px"}}>Initial Assessment</label>
            </div>
                
                
          </div>

  )
}

