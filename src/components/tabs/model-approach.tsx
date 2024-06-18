import React from 'react'

export interface TabsProps {
    step: number;
}
export default function ModelApproach({step}: TabsProps) {
  return (
    
      <div
            className={`tab-pane fade ${step == 3 ? "show active" : ""}`}
            id="step3"
          >
            <link href='tabs/style.css'></link>
            
            <div className="mb-3 d-flex flex-row">
              <label htmlFor="field3" className='w-25'><h5>Type of Model Needed</h5></label>
              <label htmlFor="field3" className='w-25'><h5>Software To Be Used</h5></label>
              <label htmlFor="field3" className='w-25'><h5>System To Be Modelled</h5></label>
            </div>
            {/* <div>
            <input type="radio" name="field3" id="field3" className='me-2'/>
                <label htmlFor="field3" className='w-25'>1D Only</label>
                <input type="Checkbox" name="field3" id="field3" className='me-2'/>
                <label htmlFor="field3" className='w-25'>Flood Modeller</label>
                <input type="Checkbox" name="field3" id="field3" className='me-2'/>
                <label htmlFor="field3" className='w-25'>Fluvial</label>
            </div>
                <div>
                <input type="radio" name="field3" id="field3" className='me-2'/>
                <label htmlFor="field3" className='w-25'>2D Only</label>
                <input type="Checkbox" name="field3" id="field3" className='me-2'/>
                <label htmlFor="field3" className='w-25'>TUFLOW</label>
                <input type="Checkbox" name="field3" id="field3" className='me-2'/>
                <label htmlFor="field3" className='w-25'>Pluvial</label>
            </div>
                <div>
                <input type="radio" name="field3" id="field3" className='me-2'/>
                <label htmlFor="field3" className='w-25'>1D/2D Linked</label>
                <input type="Checkbox" name="field3" id="field3" className='me-2'/>
                <label htmlFor="field3" className='w-25'>Info Work ICM</label>
                <input type="Checkbox" name="field3" id="field3" className='me-2'/>
                <label htmlFor="field3" className='w-25'>Tidal</label>
            </div> */}
            <div className='d-flex'>
            <div className='typeofModel w-25' >
            <div><input type="radio" name="field3" id="field3" className='me-2'/><label htmlFor="field3" >1D Only</label></div>
            <div><input type="radio" name="field3" id="field3" className='me-2'/><label htmlFor="field3" >2D Only</label></div>
            <div><input type="radio" name="field3" id="field3" className='me-2'/><label htmlFor="field3" >1D/2D Linked</label></div>
            </div>

            <div className='softwareUsed w-25'> 
            <div><input type="Checkbox" name="field3" id="field3" className='me-2'/><label htmlFor="field3" >Flood Modeller</label></div>
            <div><input type="Checkbox" name="field3" id="field3" className='me-2'/><label htmlFor="field3" >TUFLOW</label></div>
            <div><input type="Checkbox" name="field3" id="field3" className='me-2'/><label htmlFor="field3" >Info Work ICM</label></div>
            </div>

            <div className='systemModelled'>
            <div><input type="Checkbox" name="field3" id="field3" className='me-2'/><label htmlFor="field3" >Fluvial</label></div>
            <div><input type="Checkbox" name="field3" id="field3" className='me-2'/><label htmlFor="field3" >Pluvial</label></div>
            <div><input type="Checkbox" name="field3" id="field3" className='me-2'/><label htmlFor="field3" >Tidal</label></div>
            <div><input type="Checkbox" name="field3" id="field3" className='me-2'/><label htmlFor="field3" >Resorvior</label></div>
            <div><input type="Checkbox" name="field3" id="field3" className='me-2'/><label htmlFor="field3" >Sewer Networks</label></div>
            </div>


          </div>
          </div>

  )
}

