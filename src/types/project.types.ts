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
    ProjectID:number
}
export interface Model_Approach{
    ProjectID:number,
    ModelType_ID:number,
    ModelSoftware_ID:number[],
    ModelSystem_ID:number[]
}
export type ProjectInfoInterface = {
    ProjectContextData: Project_Info,
    setProjectContextData: React.Dispatch<React.SetStateAction<Project_Info>>,
    setLoaderData:React.Dispatch<React.SetStateAction<LoaderProps>>,
    projectId:number,
    setProjectId:React.Dispatch<React.SetStateAction<number>>
}
export interface Output_Detail{
    projectID:number,
    Recipient: string,
    OutputName:number,
    Notes:string
}
export type MasterSpecQueryID = number;
export interface DetailedSpec_Query{
    // ProjectSpecQueryResID:string,
    MasterSpecQueryID:MasterSpecQueryID | null,
    Response:string
}