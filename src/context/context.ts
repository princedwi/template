"use client"

import { createContext, useContext } from "react";
import { ProjectInfoInterface } from "@/app/CreateQA/page";
export const ProjectInfoContext=createContext<ProjectInfoInterface | undefined>(undefined);
export function useProjectInfoContext(){
    const user=useContext(ProjectInfoContext);
    if(user===undefined){
        console.log(11);
        throw new Error("NOT DEFINED CONTEXT");
    }
    return user
}