import React, { useState } from 'react'
import { TabsProps } from './project-info'
import ProjectInfo from "@/components/tabs/project-info";
import BuildModel from '../BuildModel/build-model';

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
        className={`tab-pane relative fade ${step == 7 ? "show active" : ""}`}>

        {/* <div className=' text-center flex  items-end justify-end absolute top-[1rem] right-[1rem] float-right'>
        <button type="submit" style={{ 'backgroundColor': '#263c9c', 'padding': '0.5rem', 'color': 'white', 'borderRadius': '10px', 'float': 'right' }} className='border w-[fit-content] p-1 px-3 mb-4 rounded-xl bg-[#263c9c]  text-white text-[18px] cursor-pointer' onClick={handleSubmit}>Submit</button>
        </div> */}
        {/* <form action="" method="post" id="registration" className="stepForm "> */}

        <div>
          <div className='d-flex'>
            <div className="nav-pills w-25 p-4 m-2 nav-fill " id="nav-tab" role="tablist" style={{ backgroundColor: 'white', borderRadius: "10px" }}>
              {values.map((value, i) => (
                <a
                  className={`nav-link py-2 my-2  ${steptwo === value.id ? "active" : ""}`}
                  //style={{backgroundColor:'#6d7fcc',color:'white'}}
                  id={`steptwo${value.id}-tab`}
                  key={i}
                  data-bs-toggle="tab"
                  onClick={() => handleStep(value.id)}
                  style={{ fontSize: "smaller" }}
                >
                  {value.name}
                </a>
              ))}
            </div>
            <div className="tab-content  p-4 m-2" style={{ backgroundColor: 'white', borderRadius: "10px", width: "100%" }}>
              <BuildModel step={steptwo} />
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
    </>
  )
}

