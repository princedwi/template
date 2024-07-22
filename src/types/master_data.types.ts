interface Attributes {
    MasterTypeStudy_Id: number;
    Field: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface MasterTypeStudy {
    id: number;
    attributes: Attributes;
}


interface Attributes {
    MasterModellingTask_ID: number;
    Field: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface MasterModellingTask {
    id: number;
    attributes: Attributes;
}


interface ModelTypeAttributes {
    Master_ModelType_ID: number;
    Field: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface MasterModelType {
    id: number;
    attributes: ModelTypeAttributes;
}


interface ModelSoftwareAttributes {
    Master_ModelSoftware_ID: number;
    Field: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface MasterModelSoftware {
    id: number;
    attributes: ModelSoftwareAttributes;
}


interface ModelSystemAttributes {
    Master_ModelSystem_ID: number;
    Field: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface MasterModelSystem {
    id: number;
    attributes: ModelSystemAttributes;
}


interface OutputAttributes {
    MasterOutput_ID: number;
    Field: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface MasterOutput {
    id: number;
    attributes: OutputAttributes;
}
