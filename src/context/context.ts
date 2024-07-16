"use client"

import { createContext, useContext } from "react";
import { ProjectInfoInterface } from "@/types/project.types";
export const ProjectInfoContext=createContext<ProjectInfoInterface | undefined>(undefined);
export function useProjectInfoContext(){
    const user=useContext(ProjectInfoContext);
    if(user===undefined){
        throw new Error("NOT DEFINED CONTEXT");
    }
    return user
}