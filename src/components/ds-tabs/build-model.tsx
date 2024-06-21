import React, { useState } from 'react';
import ProjectInfo from "@/components/tabs/project-info";
export interface TabsProps2 {
  step: number;
}


export default function BuildModel({ step }: TabsProps2) {
  const [steptwo, setStep] = useState<number>(1);

  const values = [
    { name: "Aproach Definition", id: 1, },
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
        // className={`tab-pane fade ${step ==  ? "show active" : ""}`}
        // id="step2"
      >
        <form action="" method="post" id="registration" className="stepForm">
        <nav>
          <div className="nav nav-pills nav-fill " id="nav-tab" role="tablist">

            {values.map((value) => (
              <a
                className={`nav-link  ${steptwo === value.id ? "active" : ""}`}
                id={`steptwo${value.id}-tab`}
                data-bs-toggle="tab"
                onClick={() => handleStep(value.id)}
              >
                {value.name}
              </a>
            ))}

          </div>
        </nav>
        <div className="tab-content p-4 ">
          
        </div>

      </form>
        {/* <div className="mb-3 d-flex flex-row">
          <label htmlFor="field1" className=''>Modelling Objectives and how does it meet the overall project aims</label>
          <input type="text" name="field1" className="form-control" id="field1" />
        </div> */}
      </div>
    </>
  )
};