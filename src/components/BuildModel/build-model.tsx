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
  const [numb, setnumb] = useState<number>(1);

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
        <div>
        {/* <form action="" method="post" id="registration" className="stepForm"> */}
          <nav>
            <div className="nav nav-pills nav-fill gap-2" id="nav-tab" role="tablist">

              {values && values.map((value, index) => (
                <a
                key={value.id}
                  className={`${steptwo === value.id ? "" : ""} ${(numb<index+1)?"bg-gray-500 text-white nav-link":"bg-gray-300 nav-link"} `}
                  //style={{ backgroundColor: '#6d7fcc', color: 'white', margin: '0 5px' }}
                  // style={{}}
                  id={`steptwo${value.id}-tab`}
                  style={{backgroundColor: `${numb<index+1?"gray":"#4e67d4"}`, marginTop:"2rem"}}
                // data-bs-toggle="tab"
                // onClick={() => handleStep(value.id)}
                >
                  {value.name}
                </a>
              ))}

              <div className="tab-content p-4" style={{ width: '100%' }}>
                <TableModel step={steptwo} setnumb={setnumb} />
              </div>
              <Signoff />
            </div>
          </nav>

        {/* </form> */}
        </div>
      </div>
    </>
  )
};