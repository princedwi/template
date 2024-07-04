import React, { useState } from 'react'
import { TabsProps } from '@/components/tabs/project-info'

export default function ModelChecks({ step }: TabsProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <>
    <div
      className={`tab-pane fade ${step == 3 ? "show active" : ""}`}
      id="step1"
    >
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50' style={{ height: '4rem' }}></label>
      </div>
      <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Watercourse Schematisation<br></br></div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Do the locations and profile of the cross section look reasonable? </label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Is the distance to next correct? Is the overall reach length matching survey? Do the distances in the model and section names match?</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Bank and panel markers appropriately defined?</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Does conveyance look appropriate? Do channel conveyance values vary outside the ratios of 0.7 and 1.4 between adjacent river sections? (Are panel markers needed or in the correct place?) Use 1D Health Check</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>1D Floodplain Schematisation<br></br></div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Is the floodplain schematisation in line with known flood mechanisms and routes?</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Are cross-sections sufficiently extended? Panel marker used? Zone of no conveyance identified?</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Have reservoir/floodplain units set up correctly?Reservoir Stage/area curves fully documented?</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Have structure/spill units between reservoirs and main channel set up correctly?</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Structure representation<br></br></div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Has structure data been entered correctly (e.g.,  invert level, soffit level, culvert width)</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Have appropriate structure coefficients (e.g., culvert invert parameters) and roughness coefficients been applied?</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Bridge cross section truncated to bank tops </label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Has orifice model been ticked for bridges</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Has skew angle been used for bridges</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Have control rules been configured correctly?</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Have top/bottom slots been used for culverts?</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Initial Conditions<br></br></div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Are initial condition sensible? Any unexpected high water levels at initial conditions?</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Boundary Conditions<br></br></div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Have boundary conditions been configured correctly? (In the case of model inflows are these in agreement with the events to be modelled)?</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Have additional flows or abstraction units been required to stabilise the model? If so, what is their impact on model results?</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Is the downstream boundary conditions sufficiently remote from the area of interest?</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Model Parameters<br></br></div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Have model parameters been configured correctly?</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50' style={{ height: '5rem' }}></label>    </div>
      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-50'>Are changes to default parameters fully justified and documented in the model development log?</label>
        <input type="text" name="field1" className="form-control w-50 ml-3" id="field1" required />
      </div>
      <div style={{ backgroundColor: '#dc3545c7', marginBottom: '20px', textAlign: 'center', }}>Model Advisor Sign Off<br></br></div>
    </div>
    </>

  );
};
