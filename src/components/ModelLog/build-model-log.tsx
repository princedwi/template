"use client";

import { TabsProps2 } from "../BuildModel/tableModel";
import React, { useEffect, useState } from 'react';
import JSONData from "../../assests/Model_Log_Json.json";
import { useSearchParams } from "next/navigation";
import { useProjectInfoContext } from "@/context/context";
import { ModelLog_Query } from "@/types/project.types";

type JsonValue = string | number | boolean | null;
type JsonArray = Array<JsonValue | JsonObject>;
interface JsonObject {
    [key: string]: JsonValue | JsonObject | JsonArray;
}

export default function BuildModelLog({ step, setnumb }: TabsProps2) {
    const searchParams = useSearchParams();
    const paramsid: unknown = searchParams.get('id');
    const { setLoaderData, projectId } = useProjectInfoContext();
    const [ID, setID] = useState(-1);
    interface datas2 {
        name: string;
        idz: number;
    }
    const [formData, setFormData] = useState<ModelLog_Query>({
        Response: '',
        projectID: paramsid ? (paramsid as number) : projectId
    });

    // Access the data property of JSONData
    const data = JSONData.data;

    return (
        <div className=''>
            <table className="" style={{ borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(204, 204, 204,1)", borderCollapse: "collapse" }}>
                <tbody>
                    <tr style={{ borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(204, 204, 204,1)", borderCollapse: "collapse" }}>
                        {data.map((item) => (
                            <React.Fragment key={item.id}>
                                <th style={{ fontWeight: "400", fontSize: "13px", borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(204, 204, 204,1)" }}>
                                    <div className="" style={{ fontSize: "13px", textAlign: "center" }}>
                                        {item.attributes.Query}
                                    </div>
                                </th>
                            </React.Fragment>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
