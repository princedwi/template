"use client";

import ConceptReview from "@/components/tabs/concept-review";
import ModelApproach from "@/components/tabs/model-approach";
import OutputsTab from "@/components/tabs/outputs-tab";
import DataTab from "@/components/tabs/data-tab";
import React, { useState } from "react";
import DetailedSpecification from "@/components/tabs/detailed-specification";
import ModelLogs from "@/components/tabs/model-logs";
import { ProjectInfoContext } from "@/context/context";
import ProjectInfo from "@/components/tabs/project-info";
export type mpdata2 = {
  projectname: string;
  projectcode: string;
  projectmanager: string;
  projectverifier: string;
  clientscope: string;
  budget: string;
  originator: string;
  lead: string;
  advisor: string;
  typeofstudy: string;
}
export type ProjectInfoInterface = {
  mpdata: mpdata2,
  setdatam: React.Dispatch<React.SetStateAction<mpdata2>>
}

export default function Form() {
  const [step, setStep] = useState<number>(1);

  const values = [
    { name: "Project Info", id: 1, },
    { name: "Concept Review", id: 2 },
    { name: "Model Approach", id: 3 },
    { name: "Outputs", id: 4 },
    { name: "Data", id: 5 },
    { name: "Risk Register", id: 6 },
    { name: "Detailed Specification", id: 7 },
    { name: "Model Logs", id: 8 },
  ];



  const handleStep = (stepNumber: number) => {
    setStep(stepNumber);
  };
  const [datam, setdatam] = React.useState<mpdata2>({
    projectname: "",
    projectcode: "",
    projectmanager: "",
    projectverifier: "",
    clientscope: "",
    budget: "",
    originator: "",
    lead: "",
    advisor: "",
    typeofstudy: "",
  });
  const [clr,setclr]=React.useState(false);
  const check = () => {
    if (
      datam["projectname"] === "" ||
      datam["projectcode"] === "" ||
      datam["projectmanager"] === "" ||
      datam["projectverifier"] === "" ||
      datam["clientscope"] === "" ||
      datam["budget"] === "" ||
      datam["originator"] === "" ||
      datam["lead"] === "" ||
      datam["advisor"] === "") return 0;
      setclr(true);
    return 1;
  }
  React.useEffect((
    
  )=>{var g=check();},[datam])
  return (
    <>
      <form action="" method="post" id="registration" className="stepForm m-4">
        <nav>
          <div className="nav nav-pills nav-fill gap-2 mx-2" id="nav-tab" role="tablist">

            {values.map((value) => (
              <a
                className={`${clr?'bg-grey':'bg-theme-clr'} nav-link  ${step === value.id ? "active" : ""} `}
                //style={{ backgroundColor: '#6d7fcc', color: 'White', margin: '0 5px'}}
                id={`step${value.id}-tab`}
                data-bs-toggle="tab"
                onClick={() => { if (check()) { handleStep(value.id) } else { } }}
              >
                <div className="">
                  {value.name}
                  </div>
              </a>
            ))}


            {/* <a className={`nav-link  ${step == 1 ? "active" : ""}`} id="step1-tab" data-bs-toggle="tab" onClick={() => handleStep(1)}>
              Project Info
            </a>
            <a className={`nav-link  ${step == 2 ? "active" : ""}`} id="step2-tab" data-bs-toggle="tab" onClick={() => handleStep(2)} >
              Concept Review
            </a>
            <a className={`nav-link  ${step == 3 ? "active" : ""}`} id="step3-tab" data-bs-toggle="tab" onClick={() => handleStep(3)} >
              Model Approach
            </a> */}
          </div>
        </nav>
        <div className="tab-content" style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem", paddingTop: "1.5rem" }}>
          <ProjectInfoContext.Provider value={{ mpdata: datam, setdatam: setdatam }}>
            <ProjectInfo step={step} />
            <ConceptReview step={step} />
            <ModelApproach step={step} />
            <OutputsTab step={step} />
            <DataTab step={step} />
            <DetailedSpecification step={step} />
            <ModelLogs step={step} />
          </ProjectInfoContext.Provider>
        </div>
        {/* <div className="row justify-content-between">
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-primary"
              data-enchanter="previous"
              onClick={() => handleStep(step - 1)}
              disabled={step == 1 ? true : false}
            >
              Previous
            </button>
          </div>
          <div className="col-auto ">
            <button
              type="button"
              className="btn btn-primary me-2"
              data-enchanter="next"
              onClick={() => handleStep(step + 1)}
              disabled={step == 3 ? true : false}
            >
              Next
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              data-enchanter="finish"
            >
              Finish
            </button>
          </div>
        </div> */}
      </form>
    </>
  );
}
