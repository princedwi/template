"use client";

import React, { useState } from 'react';
import ApproachDefinition from './approach-definition';
import ModelChecks from './model-checks';
import ModelLeadSignOff from './model-lead-sign-off';
import Signoff from './sign-off-boxes';
export interface TabsProps2 {
  step: number;
}


export default function FlexModel({ step }: TabsProps2) {
  const [selectedFile, setSelectedFile] = useState<Array<File | null>>([null, null, null, null, null, null, null]);
  const [imagePreview, setImagePreview] = useState<Array<string | null>>([null, null, null, null, null, null, null]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, num: Number) => {
    const file = e.target.files?.[0] || null;
    const nextCounters = selectedFile.map((c, i) => {
      if (i === num) {
        return file;
      } else {
        return c;
      }
    });
    setSelectedFile(nextCounters);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const nextCounters = imagePreview.map((c, i) => {
          if (i === num) {
            return reader.result as string;
          } else {
            return c;
          }
        });
        setImagePreview(nextCounters);
        // setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      // setImagePreview(null);
    }
  };
  const [steptwo, setStep] = useState<number>(1);

  const values = [
    { name: "Approach Definition", id: 1, },
    { name: "Automated Checks", id: 2 },
    { name: "Model Checks", id: 3 },
    { name: "Model lead sign off", id: 4 },

  ];
  const handleStep = (stepNumber: number) => {
    setStep(stepNumber);
  };
  return (
    <>

      <div
      // className={`tab-pane fade ${step == 1 ? "show active" : ""}`}
      // id="step2"
      >
        <form action="" method="post" id="registration" className="stepForm">
          <nav>
            <div className="nav nav-pills nav-fill gap-2" id="nav-tab" role="tablist">

              {values.map((value) => (
                <a
                  className={`nav-link  ${steptwo === value.id ? "active" : ""}`}
                  //style={{ backgroundColor: '#6d7fcc', color: 'white', margin: '0 5px' }}
                  id={`steptwo${value.id}-tab`}
                  data-bs-toggle="tab"
                  onClick={() => handleStep(value.id)}
                >
                  {value.name}
                </a>
              ))}

              <div className="tab-content p-4" style={{ width: '100%' }}>
                {/* <ApproachDefinition step={steptwo} /> */}
                <div className='flex flex-row w-full' style={{ width: "100%", flexDirection: "row", display: "flex" }}>
                  <div className="mb-3 d-flex flex-col" style={{ display: "flex", flexDirection: "column" }}>
                    <label style={{textAlign:"center"}} htmlFor="field1" className=''>Flood Modeller version / solver / precision to be used </label>
                    <input type="text" name="field1" className="form-control  ml-3" id="field1" required />
                  </div>
                  <div className=''>
                    &nbsp;
                  </div>
                  <div className=''>
                    &nbsp;
                  </div>
                  <div className=''>
                    &nbsp;
                  </div>
                </div>
                <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Watercourse Schematisation<br></br></div>
                <div className='flex flex-row w-full' style={{ width: "100%", flexDirection: "row", display: "flex", justifyContent: "space-evenly" }}>
                  <div className="mb-3 d-flex flex-col " style={{ display: "flex", flexDirection: "column", width:"100%" }}>
                    <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column", width:"100%" }}>
                      <label style={{textAlign:"center"}} htmlFor="field1" className=''>Number and extent of reaches to be modelled</label>
                      <input type="text" name="field1" className="form-control ml-3" id="field1" required />
                    </div>
                    <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                      <label style={{textAlign:"center"}} htmlFor="field1" className=''>Cross section data to be used</label>
                      <input type="text" name="field1" className="form-control  ml-3" id="field1" required />
                    </div>
                    <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                      <label style={{textAlign:"center"}} htmlFor="field1" className=''>Confirm/justify whether hard bed/soft bed to be used</label>
                      <input type="text" name="field1" className="form-control  ml-3" id="field1" required />
                    </div>
                    <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                      <label style={{textAlign:"center"}} htmlFor="field1" className=''>Define channel roughness approach</label>
                      <input type="text" name="field1" className="form-control  ml-3" id="field1" required />
                    </div>
                  </div>
                  <div className='' style={{width:"100%"}}>
                    &nbsp;
                  </div>
                  <div className='' style={{width:"100%"}}>
                    <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                      <label style={{textAlign:"center"}} htmlFor="field1" className=''>Do the locations and profile of the cross section look reasonable? </label>
                      <input type="text" name="field1" className="form-control  ml-3" id="field1" required />
                    </div>
                    <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                      <label style={{textAlign:"center"}} htmlFor="field1" className=''>Is the distance to next correct? Is the overall reach length matching survey? Do the distances in the model and section names match?</label>
                      <input type="text" name="field1" className="form-control  ml-3" id="field1" required />
                    </div>
                    <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                      <label style={{textAlign:"center"}} htmlFor="field1" className=''>Bank and panel markers appropriately defined?</label>
                      <input type="text" name="field1" className="form-control  ml-3" id="field1" required />
                    </div>
                    <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                      <label style={{textAlign:"center"}} htmlFor="field1" className=''>Does conveyance look appropriate? Do channel conveyance values vary outside the ratios of 0.7 and 1.4 between adjacent river sections? (Are panel markers needed or in the correct place?) Use 1D Health Check</label>
                      <input type="text" name="field1" className="form-control  ml-3" id="field1" required />
                    </div>
                  </div>
                  <div className='' style={{width:"100%"}}>
                    <div className='' style={{ width: "100%", alignItems: "right", display: "flex", justifyContent: "right", paddingRight: "1rem" }}>

                      <div style={{ textAlign: "right", fontSize: "13px", justifyContent: "right", display: "flex", width: "fit-content", height: "120px", alignItems: "center", justifyItems: "center", flexDirection: "column", marginRight: "0px", marginBottom: "0.5rem" }}>
                        {imagePreview[1] && (
                          <div >
                            <div >
                              <img src={imagePreview[1]} alt="Uploaded" className='' style={{ height: "90px", width: "120px", overflow: "hidden" }} />
                            </div>
                          </div>
                        )}
                        {!imagePreview[1] && (<>
                          <div className='border border-[2px] block' style={{ height: "70px", display: "", width: "150px" }}>

                          </div>
                        </>)}
                        <input type="file" onChange={(e) => handleFileChange(e, 1)} style={{ textAlign: "center", display: "flex", justifyContent: "center", width: "90px", overflow: "hidden", marginLeft: "0%", marginTop: "0.5rem" }} />
                        {/* <button type="submit" >Upload</button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <ModelChecks step={steptwo} />
                <ModelLeadSignOff step={steptwo} />
              </div>
              <Signoff />
            </div>
          </nav>

        </form>

      </div>
    </>
  )
};