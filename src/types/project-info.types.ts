interface Attributes {
    ProjectName: string;
    ProjectCode: string;
    ProjectManager: string;
    ProjectVerifier: string;
    ClientScope: string;
    Budget: string;
    Originator: string;
    Lead: string;
    StudyOther: string;
    Advisor: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface ProjectInterface {
    id: number;
    attributes: Attributes;
}

export interface ProjectsResponse {
    data: ProjectInterface[];
}