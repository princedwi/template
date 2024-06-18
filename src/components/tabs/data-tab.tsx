import React from 'react'

export interface TabsProps {
    step: number;
}
export default function DataTab({step}: TabsProps) {
  return (
    
      <div
            className={`tab-pane fade ${step == 5 ? "show active" : ""}`}
            id="step5"
          >
            <link href='tabs/style.css'></link>
            
            <div className="mb-3 d-flex flex-row">
              <label htmlFor="field3" className='w-25'><h5>Data</h5></label>
              <label htmlFor="field3" className='w-25'><h5>Description/Use</h5></label>
              <label htmlFor="field3" className='w-25'><h5>Location</h5></label>
              <label htmlFor="field3" className='w-25'><h5>Data Added</h5></label>
              <label htmlFor="field3" className='w-25'><h5>Source</h5></label>
            </div>
            
            <div className='d-flex'>
            <div className='data w-25' >
            <div><input type="text" name="field3" id="field3" className='me-2 mb-3'/></div>
            <div><input type="text" name="field3" id="field3" className='me-2 mb-3'/></div>
            <div><input type="text" name="field3" id="field3" className='me-2 mb-3'/></div>
            </div>

            <div className='description w-25'> 
            <div><input type="text" name="field3" id="field3" className='me-2 mb-3'/></div>
            <div><input type="text" name="field3" id="field3" className='me-2 mb-3'/></div>
            <div><input type="text" name="field3" id="field3" className='me-2 mb-3'/></div>
            </div>

            <div className='location w-25'>
            <div><input type="text" name="field3" id="field3" className='me-2 mb-3'/></div>
            <div><input type="text" name="field3" id="field3" className='me-2 mb-3'/></div>
            <div><input type="text" name="field3" id="field3" className='me-2 mb-3'/></div>
            </div>

            <div className='dataAdded w-25'>
            <div><input type="text" name="field3" id="field3" className='me-2 mb-3'/></div>
            <div><input type="text" name="field3" id="field3" className='me-2 mb-3'/></div>
            <div><input type="text" name="field3" id="field3" className='me-2 mb-3'/></div>
            </div>

            <div className='source w-25'>
            <div><input type="text" name="field3" id="field3" className='me-2 mb-3'/></div>
            <div><input type="text" name="field3" id="field3" className='me-2 mb-3'/></div>
            <div><input type="text" name="field3" id="field3" className='me-2 mb-3'/></div>
            </div>


          </div>
          </div>

  )
}

