import React from 'react'
import { TabsProps } from './project-info'


    export default function OutputsTab({step}: TabsProps) {
        return (
    
      <div
            className={`tab-pane fade ${step == 4 ? "show active" : ""}`}
            style={{backgroundColor: 'white',padding: '3rem'}}
            id="step4"
          >
            <div className="mb-3 d-flex flex-row">
              <label htmlFor="field1" className='w-25'><h5>Output Name</h5></label>
              <label htmlFor="field1" className='w-25 me-4'><h5>Recipient</h5></label>
              <label htmlFor="field1" className='w-25'><h5>Notes</h5></label>
            </div>
            <div className="mb-3 d-flex flex-row">
              <input type="Checkbox" name="field3" id="field3" className='mx-2 mb-3'/>
              <label htmlFor="field2" className='w-25'>Maximum Flood Depth Grids</label>
               <input type="text" name="field2" className="form-control w-25 me-2" id="field2" required />
               <input type="text" name="field2" className="form-control w-25" id="field2" required />
            </div>
            <div className="mb-3 d-flex flex-row">
                <input type="Checkbox" name="field3" id="field3" className='mx-2 mb-3'/>
              <label htmlFor="field2" className='w-25'>Maximum Flood Hazard Grids</label>
               <input type="text" name="field2" className="form-control w-25 me-2" id="field2" required />
               <input type="text" name="field2" className="form-control w-25" id="field2" required />
            </div>
            <div className="mb-3 d-flex flex-row">
                <input type="Checkbox" name="field3" id="field3" className='mx-2 mb-3'/>
              <label htmlFor="field2" className='w-25'>Onset of Inundation Grids</label>
               <input type="text" name="field2" className="form-control w-25 me-2" id="field2" required />
               <input type="text" name="field2" className="form-control w-25" id="field2" required />
            </div>
            <div className="mb-3 d-flex flex-row">
                <input type="Checkbox" name="field3" id="field3" className='mx-2 mb-3'/>
              <label htmlFor="field2" className='w-25'>Maximum Water level Grid</label>
               <input type="text" name="field2" className="form-control w-25 me-2" id="field2" required />
               <input type="text" name="field2" className="form-control w-25" id="field2" required />
            </div>
            <div className="mb-3 d-flex flex-row">
                <input type="Checkbox" name="field3" id="field3" className='mx-2 mb-3'/>
              <label htmlFor="field2" className='w-25'>Modelling Report</label>
               <input type="text" name="field2" className="form-control w-25 me-2" id="field2" required />
               <input type="text" name="field2" className="form-control w-25" id="field2" required />
            </div>
            <div className="mb-3 d-flex flex-row">
                <input type="Checkbox" name="field3" id="field3" className='mx-2 mb-3'/>
              <label htmlFor="field2" className='w-25'>Model Passport</label>
               <input type="text" name="field2" className="form-control w-25 me-2" id="field2" required />
               <input type="text" name="field2" className="form-control w-25" id="field2" required />
            </div>
            <div className="mb-3 d-flex flex-row">
                <input type="Checkbox" name="field3" id="field3" className='mx-2 mb-3'/>
              <label htmlFor="field2" className='w-25'>Model Log</label>
               <input type="text" name="field2" className="form-control w-25 me-2" id="field2" required />
               <input type="text" name="field2" className="form-control w-25" id="field2" required />
            </div>
            <div className="mb-3 d-flex flex-row">
                <input type="Checkbox" name="field3" id="field3" className='mx-2 mb-3'/>
              <label htmlFor="field2" className='w-25'>Packaged Model Files</label>
               <input type="text" name="field2" className="form-control w-25 me-2" id="field2" required />
               <input type="text" name="field2" className="form-control w-25" id="field2" required />
            </div>
            <div className="mb-3 d-flex flex-row">
                <input type="Checkbox" name="field3" id="field3" className='mx-2 mb-3'/>
                <input type="text" name="field2" className="form-control w-25 me-2" id="field2" required />
               <input type="text" name="field2" className="form-control w-25 me-2" id="field2" required />
               <input type="text" name="field2" className="form-control w-25" id="field2" required />
            </div>
            
    </div>
  )
}

