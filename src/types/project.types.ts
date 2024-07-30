import { LoaderProps } from "./loader.types";

export interface Project_Info{
    ProjectName:string;
    ProjectCode:string;
    ProjectManager:string;
    ProjectVerifier:string
    ClientScope:string;
    Budget:string;
    Originator: string,
    Lead: string,
    Advisor: string,
    StudyOther:string;
    master_type_study: number;
}

export interface Concept_Review{
    Modelling_Objective:string ,
    Link_to_Hydrology: string,
    Main_Data_Gaps: string,
    Main_Assumption_Risk: string,
    Data_Management_Strategy: string,
    Events_To_Be_Modelled: string,
    Climate_Change_Approach: string,
    ModellingTaskOther: string,
    Modelling_Task:number,
}
export interface Model_Approach{
    ModelType_ID:number,
    ModelSoftware_ID:number,
    ModelSystem_ID:number
}
export type ProjectInfoInterface = {
    ProjectContextData: Project_Info,
    setProjectContextData: React.Dispatch<React.SetStateAction<Project_Info>>,
    setLoaderData:React.Dispatch<React.SetStateAction<LoaderProps>>,
    projectId:number
}
export interface Output_Detail{
    Recipient: string,
    OutputName:number,
    Notes:string
}