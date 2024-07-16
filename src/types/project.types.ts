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

export type ProjectInfoInterface = {
    ProjectContextData: Project_Info,
    setProjectContextData: React.Dispatch<React.SetStateAction<Project_Info>>
}