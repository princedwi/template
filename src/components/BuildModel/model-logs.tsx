"use client"
import { TabsProps2 } from "../BuildModel/tableModel";
import React, { useEffect, useState } from 'react';
import JSONData from "../../assests/Model_Log_Json.json";
import { useSearchParams } from "next/navigation";
import { useProjectInfoContext } from "@/context/context";
import { ModelLog_Query } from "@/types/project.types";
import { DataItem } from "@/types/detailesSpecification.types";
import { fetchModelLogQueries, modelLogQuery, updateModelLogQuery } from "@/utilities/axios/project/createProject";

interface ResponseItem {
    id: number;
    attributes: {
        Response: string;
        projectID: number;
        Query: {
            id: number;
            attributes: {
                Query: string;
            };
        };
    };
}

export default function BuildModelLog({ step, setnumb }: TabsProps2) {
    const searchParams = useSearchParams();
    const paramsid = searchParams.get('id');
    const { setLoaderData, projectId } = useProjectInfoContext();
    const [responses, setResponses] = useState<ResponseItem[]>([]);
    const [inputValues, setInputValues] = useState<{ [key: number]: string }>({});
    const [extraInputs, setExtraInputs] = useState<number[]>([]);

    const data: DataItem[] = JSONData.data;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectID = paramsid ? Number(paramsid) : projectId;
                const response = await fetchModelLogQueries(projectID);
                console.log('API Response:', response);

                if (Array.isArray(response.data) && response.data.length > 0) {
                    setResponses(response.data);

                    const initialValues = response.data.reduce((acc: { [key: number]: string }, item: ResponseItem) => {
                        const id = item.attributes.Query.data.id;
                        if (typeof id === 'number') {
                            acc[id] = item.attributes.Response;
                        } else {
                            console.error('Unexpected Query.id type:', id);
                        }
                        return acc;
                    }, {});
                    console.log('Initial InputValues:', initialValues);
                    setInputValues(initialValues);
                } else {
                    console.error('Unexpected response structure:', response);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [paramsid, projectId]);

    useEffect(() => {
        //console.log('Responses State:', responses);
        //console.log('InputValues State:', inputValues);
        //console.log('data', data);
    }, [responses, inputValues]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const newValue = e.target.value;
        setInputValues(prevValues => ({
            ...prevValues,
            [id]: newValue
        }));
    };


    const handleSubmit = async () => {
        try {
            for (const id in inputValues) {
                const responseItem = responses.find(item => item.attributes.Query.data.id === parseInt(id));
                const queryItem = data.find(item => item.id === parseInt(id));
    
                if (!queryItem) continue;
    
                const formData: ModelLog_Query = {
                    Response: inputValues[id],
                    projectID: paramsid ? Number(paramsid) : projectId,
                    Query: { id: queryItem.id }
                };
    
                if (responseItem) {
                    // Update the existing response
                    //console.log('Updating data:', formData);
                    const response = await updateModelLogQuery(responseItem.id, formData);
                    console.log('API response for updation:', response.data);
                } else {
                    // Create a new response
                    //console.log('Creating new data:', formData);
                    const response = await modelLogQuery(formData, parseInt(id));
                    console.log('API response after creation:', response.data);
                }
            }
            console.log('Data submitted successfully');
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };
    
    

    const addInputRow = () => {
        setExtraInputs(prev => [...prev, prev.length + 1]);
    };

    const removeInputRow = (index: number) => {
        setExtraInputs(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
                <button onClick={handleSubmit} style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                    Submit
                </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${data.length}, 1fr)`, gap: "10px", padding: "10px" }}>
                {data.map((item: DataItem) => (
                    <div key={item.id} style={{ fontWeight: "400", fontSize: "13px", textAlign: "center" }}>
                        {item.attributes.Query}
                    </div>
                ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${data.length}, 1fr)`, gap: "10px", padding: "10px" }}>
                {data.map((item: DataItem) => (
                    <div key={item.id} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <input 
                            type="text" 
                            value={inputValues[item.id as number] || ""} 
                            onChange={(e) => handleInputChange(e, item.id)} 
                            style={{ width: "100%", padding: "5px", border: "1px solid #ccc", borderRadius: "4px" }}
                        />
                    </div>
                ))}
                <button onClick={addInputRow} style={{ marginLeft: "10px", padding: "5px 10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                    +
                </button>
            </div>
            {extraInputs.map((inputId, index) => (
                <div key={inputId} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", padding: "10px" }}>
                    {data.map((item: DataItem) => (
                        <div key={item.id} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <input 
                                type="text" 
                                value={inputValues[inputId] || ""} 
                                onChange={(e) => handleInputChange(e, inputId)} 
                                style={{ width: "100%", padding: "5px", border: "1px solid #ccc", borderRadius: "4px" }}
                            />
                        </div>
                    ))}
                    <button onClick={() => removeInputRow(index)} style={{ padding: "5px 10px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                        -
                    </button>
                </div>
            ))}
        </div>
    );
}
