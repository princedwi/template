"use client";

import React, { useState } from 'react';
import Signoff from './sign-off-boxes';
import TableModel from './tableModel';
import { Category } from '@/types/detailesSpecification.types';
export interface TabsProps2 {
  step: number;
}
import JSONData from "../../assests/Detailed_Specification_Json.json"
import { extractUniqueCategories } from './build-model-helper';

export default function BuildModel({ step }: TabsProps2) {

  const [steptwo, setStep] = useState<number>(1);

  const handleStep = (stepNumber: number) => {
    setStep(stepNumber);
  };
  const [values, setvalues] = React.useState<Category[]>();
  
  React.useEffect(() => {
    const uniqueCategories = extractUniqueCategories(JSONData);
    setvalues(uniqueCategories);
  }, [])
  return (
    <>

      <div
      // className={`tab-pane fade ${step == 1 ? "show active" : ""}`}
      // id="step2"
      >
        <form action="" method="post" id="registration" className="stepForm mt-10">
          <nav>
            <div className="nav nav-pills nav-fill gap-2" id="nav-tab" role="tablist">

              {values && values.map((value) => (
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
                <TableModel step={steptwo} />
              </div>
              <Signoff />
            </div>
          </nav>

        </form>

      </div>
    </>
  )
};