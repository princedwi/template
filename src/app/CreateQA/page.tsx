"use client";

import ConceptReview from "@/components/tabs/concept-review";
import ModelApproach from "@/components/tabs/model-approach";
import OutputsTab from "@/components/tabs/outputs-tab";
import ProjectInfo from "@/components/tabs/project-info";
import DataTab from "@/components/tabs/data-tab";
import { useState } from "react";
import DetailedSpecification from "@/components/tabs/detailed-specification";

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
  return (
    <>
      <form action="" method="post" id="registration" className="stepForm m-4">
        <nav>
          <div className="nav nav-pills nav-fill" id="nav-tab" role="tablist">

            {values.map((value) => (
              <a
                className={`nav-link  ${step === value.id ? "active" : ""}`} 
                //style={{ backgroundColor: '#6d7fcc', color: 'White', margin: '0 5px'}}
                id={`step${value.id}-tab`}
                data-bs-toggle="tab"
                onClick={() => handleStep(value.id)}
              >
                {value.name}
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
        <div className="tab-content p-4 ">
          <ProjectInfo step={step} />
          <ConceptReview step={step} />
          <ModelApproach step={step} />
          <OutputsTab step={step} />
          <DataTab step={step} />
          <DetailedSpecification step={step} />
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
