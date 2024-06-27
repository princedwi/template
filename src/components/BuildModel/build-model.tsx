"use client";

import React, { useState } from 'react';
import ApproachDefinition from './approach-definition';
import ModelChecks from './model-checks';
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
      // className={`tab-pane fade ${step == 1 ? "show active" : ""}`}
      // id="step2"
      >
        <form action="" method="post" id="registration" className="stepForm">
          <nav>
            <div className="nav nav-pills nav-fill " id="nav-tab" role="tablist">

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

              <div className="tab-content p-4 " style={{width:'100%'}}>
                <ApproachDefinition step={steptwo} />
                <ModelChecks step={steptwo} />
              </div>
            </div>
          </nav>


        </form>

      </div>
    </>
  )
};