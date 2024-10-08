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
import { Project_Info } from "@/types/project.types";
import Loader from "@/components/Loader";
import { LoaderProps } from "@/types/loader.types";
import {getProject} from '@/utilities/axios/project/createProject';
export interface TabsProps {
  step: number;
}
import { useSearchParams } from 'next/navigation'
export default function Form() {
  const searchParams = useSearchParams()

  const paramsid:unknown = searchParams.get('id')
  const [step, setStep] = useState<number>(1);
  const [dataspectype,setdataspectype]=React.useState<number>(0)
  const [LoaderData, setLoaderData] = useState<LoaderProps>({ data: "", display: false, type: 1 });
  const setloaderdata = () => {
    setLoaderData({ data: "", display: false, type: 1 })
  }
  const [userId, setUserId] = useState<number>(0);
  const [projectId, setProjectId] = useState<number>(0);
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
  const [ProjectContextData, setProjectContextData] = React.useState<Project_Info>({
    ProjectName: "",
    ProjectCode: "",
    ProjectManager: "",
    ProjectVerifier: "",
    ClientScope: "",
    Budget: "",
    Originator: -1,
    Lead: -1,
    Advisor: -1,
    StudyOther: "",
    master_type_study: 0,
    CreatedByUserName: 1,
    UpdatedByUserName: 1,
  });
  const [clr, setclr] = React.useState(false);
  const check = () => {
    return 1;
    if (
      ProjectContextData["ProjectName"] === "" ||
      ProjectContextData["ProjectCode"] === "" ||
      ProjectContextData["ProjectManager"] === "" ||
      ProjectContextData["ProjectVerifier"] === "" ||
      ProjectContextData["ClientScope"] === "" ||
      ProjectContextData["Budget"] === "" ||
      ProjectContextData["Originator"] === -1 ||
      ProjectContextData["Lead"] === -1 ||
      ProjectContextData["Advisor"] === -1) return 0;
    setclr(true);
    return 1;
  }
  const dataLoader: LoaderProps = {
    data: LoaderData.data,
    display: LoaderData.display,
    type: LoaderData.type
  }
  React.useEffect( () => {
    var g = check();
    console.log("PROJECTID", projectId);
    const currentUserdata = localStorage.getItem("user");
    const id=currentUserdata ? JSON.parse(currentUserdata).id : -1;
    setUserId(id);
  }, [ProjectContextData, LoaderData])
  return (
    <> 
      <Loader data={LoaderData.data} display={LoaderData.display} setloaderdata={setloaderdata} type={LoaderData.type} />
      <div className="stepForm m-4 min-h-[90vh]">
        {/* <form action="" method="post" id="registration" className="stepForm m-4"> */}
        <nav>
          <div className="nav nav-pills nav-fill gap-2 mx-2" id="nav-tab" role="tablist">
            {values.map((value) => (
              <a
                key={value.id}
                className={`${clr ? 'bg-grey' : 'bg-theme-clr'} nav-link  ${step === value.id ? "active" : ""} `}
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
          <ProjectInfoContext.Provider value={{ ProjectContextData: ProjectContextData, setProjectContextData: setProjectContextData, setLoaderData: setLoaderData, projectId: projectId, setProjectId: setProjectId, dataspectype:dataspectype,setdataspectype:setdataspectype, userId:userId }}>
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
        {/* </form> */}
      </div>

    </>
  );
}
