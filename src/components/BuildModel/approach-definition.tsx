import React from 'react'

export interface TabsProps {
  step: number;
}
export default function ApproachDefinition({ step }: TabsProps) {
  return (
    <><div
      className={`tab-pane fade ${step == 1 ? "show active" : ""}`}
      id="step1"
    >
      <link href='tabs/style.css'></link>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Flood Modeller version / solver / precision to be used </label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Watercourse Schematisation<br></br></div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Number and extent of reaches to be modelled</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div> 
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Cross section data to be used</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Confirm/justify whether hard bed/soft bed to be used</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Define channel roughness approach</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>1D Floodplain Schematisation<br></br></div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Define reaches where extended sections are required. Define approach for extended cross sections.</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>
          Define reaches where reservoir units are needed. Define approach to defining spatial extent and production of level/area curves
          </label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>
          Define connectivity approach between channels and reservoir and between reservoirs. Define source of data for spill units (LiDAR/Survey)</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Structure representation<br></br></div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>
          Number of structures to be modelled (approach to be provided in the structure log) and not modelled</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>
          Confirm approach to verification of structure afflux?</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Initial Conditions<br></br></div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>
          Confirm approach and/or source of initial conditions for open channels</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>
          Define approach for initial condition for reservoirs</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Boundary Conditions<br></br></div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>
          Define location and number of inflow boundaries (point/lateral/direct rainfall). </label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>
          Define location of downstream boundary and type (e.g., Normal depth, flow vs head, tidal)</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>
          Are abstraction units needed? If logical rules are to be used, please define these.</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Model Parameters<br></br></div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>
          Planed 1D timestep</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>
          Planned duration of simulations and forecast simulation run times</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>
          Any planned deviations from default numerical parameters (including advanced parameters)?</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div style={{ backgroundColor: '#dc3545c7', marginBottom: '20px', textAlign: 'center', }}>Model Advisor Sign Off<br></br></div>
    </div>


    </>

  )
}

