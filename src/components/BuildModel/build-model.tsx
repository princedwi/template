"use client";

import React, { useState } from 'react';
import ApproachDefinition from './approach-definition';
import ModelChecks from './model-checks';
import ModelLeadSignOff from './model-lead-sign-off';
import Signoff from './sign-off-boxes';
import FlexModel from './flexModel';
import TableModel from './tableModel';
export interface TabsProps2 {
  step: number;
}


export default function BuildModel({ step }: TabsProps2) {
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
                  className={`nav-link  ${steptwo === value.id ? "" : ""}`}
                  //style={{ backgroundColor: '#6d7fcc', color: 'white', margin: '0 5px' }}
                  id={`steptwo${value.id}-tab`}
                  // data-bs-toggle="tab"
                  // onClick={() => handleStep(value.id)}
                >
                  {value.name}
                </a>
              ))}

              <div className="tab-content p-4" style={{ width: '100%' }}>
                {/* <ApproachDefinition step={steptwo} /> */}
                {/* <FlexModel step={steptwo} /> */}
                <TableModel step={steptwo} />
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