import React, { useState } from 'react'
import { TabsProps } from './project-info'
import BuildModel from '../BuildModel/Model-logs';
export default function ModelLogs({ step }: TabsProps) {
    const [steptwo, setStep] = useState<number>(1);
    const values = [
        { name: "1D River Roughness Log", id: 1, },
        { name: "1D Urban Roughness Log", id: 2 },
        { name: "2d Roughness Log", id: 3 },
        { name: "1D River Structures Log", id: 4 },
        { name: "1D Urban Structures Log", id: 5 },
        { name: "2D Structures Log", id: 6 },
        { name: "Naming Convention Log", id: 7 },
        { name: "Simulation Log", id: 8 },
    ];
    const handleStep = (stepNumber: number) => {
        setStep(stepNumber);
    };
    return (
        <>
            <div
                className={`tab-pane fade ${step == 8 ? "show active" : ""}`}

            >
                <form action="" method="post" id="registration" className="stepForm ">
                    <div className='d-flex'>
                        <div className="nav-pills w-25 p-4 m-2 nav-fill " id="nav-tab" role="tablist" style={{ backgroundColor: 'white', borderRadius: "10px" }}>
                            {values.map((value, i) => (
                                <a
                                    className={`nav-link py-2 my-2  ${steptwo === value.id ? "active" : ""}`}
                                    //style={{backgroundColor:'#6d7fcc',color:'white'}}
                                    id={`steptwo${value.id}-tab`}
                                    key={i}
                                    data-bs-toggle="tab"
                                    onClick={() => handleStep(value.id)}
                                >
                                    {value.name}
                                </a>
                            ))}



                        </div>
                        <div className="tab-content  p-4 m-2" style={{ backgroundColor: 'white', borderRadius: "10px", width: "100%" }}>
                            <BuildModel step={steptwo} />
                        </div>
                    </div>
                </form>
            </div>


        </> 

    )
}
