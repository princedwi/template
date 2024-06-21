import React, { useState } from 'react'
import { TabsProps } from './project-info'
import ProjectInfo from "@/components/tabs/project-info";
import BuildModel from '../ds-tabs/build-model';


export default function DetailedSpecification({ step }: TabsProps) {
  const [steptwo, setStep] = useState<number>(1);
  const values = [
    { name: "1D River Model Build", id: 1, },
    { name: "1D Reservior Model Build", id: 2 },
    { name: "1D Urban Model Build", id: 3 },
    { name: "2D Model Build", id: 4 },
    { name: "1D/2D Linking", id: 5 },
    { name: "Baseline Stress Test", id: 6 },
    { name: "Model Calibration", id: 7 },
    { name: "Model Verification", id: 8 },
    { name: "Sensitivity Testing", id: 9 },
    { name: "Scenerio Modelling", id: 10 },
  ];
  const handleStep = (stepNumber: number) => {
    setStep(stepNumber);
  };
  return (
    <>

      <div
        className={`tab-pane fade ${step == 7 ? "show active" : ""}`}

      >

        <form action="" method="post" id="registration" className="stepForm ">

          <div className='d-flex'>
            <div className=" nav-pills w-25 my-4 nav-fill " id="nav-tab" role="tablist" style={{backgroundColor:'lightgrey',borderRadius:"20px"}}>


              {values.map((value, i) => (
                <a
                  className={`nav-link py-2 my-2  ${steptwo === value.id ? "active" : ""}`}
                  id={`steptwo${value.id}-tab`}
                  key={i}
                  data-bs-toggle="tab"
                  onClick={() => handleStep(value.id)}
                >
                  {value.name}
                </a>
              ))}



            </div>
            <div className="tab-content  p-4 m-2" style={{backgroundColor:'lightgrey',borderRadius:"20px",width:"100%"}}>
              <BuildModel step={steptwo} />

            </div>
          </div>
        </form>
      </div>


    </>
  )
}

