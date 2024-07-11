import React from 'react'

export interface TabsProps {
  step: number;
}
export default function ProjectInfo({ step }: TabsProps) {
  const [showOther, setshowOther] = React.useState(false)
  return (

    <div
      className={`tab-pane fade ${step == 1 ? "show active" : ""}`}
      style={{ backgroundColor: 'white', padding: '3rem' }}
      id="step1"
    >
      <link href='tabs/style.css'></link>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-25'>Project Name</label>
        <input type="text" name="field1" className="form-control w-25" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field2" className='w-25'>Project Code</label>
        <input type="email" name="field2" className="form-control w-25" id="field2" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field3" className='w-25'>Project Manager</label>
        <select className='form-control w-25'>
          <option value="" className=''>Select Project Manager</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field3" className='w-25'>Project Verifier</label>
        <select className='form-control w-25'>
          <option value="" className=''>Select Project Verifier</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field3" className='w-25'>Client Scope</label>
        <input type="text" name="field5" className="form-control w-25" id="field5" />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field3" className='w-25'>Budget</label>
        <input type="text" name="field6" className="form-control w-25" id="field6" />
      </div>
      <div className="mb-3 d-flex flex-row grid grid-cols-4">
        <label htmlFor="field3" className='w-25'>Modelling Team</label>
        <label htmlFor="field3" className='w-25'>Originator</label> 
        <label htmlFor="field3" className='w-25'>Lead</label>
        <label htmlFor="field3" className='w-25'>Advisor</label>
      </div>
      <div className="mb-3 grid grid-cols-4 items-right" style={{ gap: "0rem" }}>
        <div></div>
        <select className='form-control w-[90%]'>
          <option value="" className=''>Select Originator</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <select className='form-control w-[90%]'>
          <option value="" className=''>Select Lead</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <select className='form-control w-[90%]'>
          <option value="" className=''>Select Advisor</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field3" className='w-25'>Type of Study</label>
      </div>
      <div>
        <input type="radio" name="field3" id="field3"  onClick={() => { setshowOther(false) }}/>
        <label htmlFor="field3" className='w-25' style={{ marginLeft: "8px" }}>SOB</label>
        <input type="radio" name="field3" id="field3"  onClick={() => { setshowOther(false) }}className='' />
        <label htmlFor="field3" className='w-25' style={{ marginLeft: "8px" }}>Surface Water Flood Mapping</label>
        <input type="radio" name="field3" id="field3"  onClick={() => { setshowOther(false) }}/>
        <label htmlFor="field3" style={{ marginLeft: "8px" }}>Flood Risk Assessment</label>
      </div>
      <div>
        <input type="radio" name="field3" id="field3"  onClick={() => { setshowOther(false) }}/>
        <label htmlFor="field3" className='w-25' style={{ marginLeft: "8px" }}>OBC</label>
        <input type="radio" name="field3" id="field3"  onClick={() => { setshowOther(false) }}/>
        <label htmlFor="field3" className='w-25' style={{ marginLeft: "8px" }}>Reservoir Inundation Flood Mapping</label>
        {/* <div className=''> */}
        <input type="radio" name="field3" id="field3"  onClick={() => { setshowOther(true) }} />
        <label htmlFor="field3" style={{ marginLeft: "0.5rem" }}>Other: </label>
        {showOther && <input type="input" name="field3" id="field3"  onClick={() => { setshowOther(false) }}style={{ marginLeft: "8rem" }} className={` border border-sm rounded-lg`} />}
        {/* </div> */}
      </div>
      <div>
        <input type="radio" name="field3" id="field3"  onClick={() => { setshowOther(false) }}/>
        <label htmlFor="field3" className='w-25' style={{ marginLeft: "8px" }}>Detailed Desgin</label>
        <input type="radio" name="field3" id="field3"  onClick={() => { setshowOther(false) }}/>
        <label htmlFor="field3" style={{ marginLeft: "8px" }}>Reservoir Flood Safety</label>
      </div>
      <div>
        <input type="radio" name="field3" id="field3"  onClick={() => { setshowOther(false) }}/>
        <label htmlFor="field3" className='w-25' style={{ marginLeft: "8px" }}>Fluvial Flood Mapping</label>
        <input type="radio" name="field3" id="field3"  onClick={() => { setshowOther(false) }}/>
        <label htmlFor="field3" style={{ marginLeft: "8px" }}>Initial Assessment</label>
      </div>


    </div>

  )
}

