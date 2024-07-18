"use client";

import React, { useState } from 'react';
export interface TabsProps2 {
  step: number;
}

export default function ModelLogsComponent({ step }: TabsProps2) {
  const [steptwo, setStep] = useState<number>(1);

  const values = [
    { name: "Reach/Watercourse", id: 1, },
    { name: "Cross Section", id: 2 },
    { name: "Manning's 'n' roughness coefficient - Bed", id: 3 },
    { name: "Manning's 'n' roughness coefficient - Left Bank", id: 4 },
    { name: "Manning's 'n' roughness coefficient - Right Bank", id: 5 },
    { name: "Justification for selection of initial value (e.g., survey photograph, site visit)", id: 6 },
    { name: "Refinement during calibration / verification", id: 7 },
  ];
  const handleStep = (stepNumber: number) => {
    setStep(stepNumber);
  };
  return (
    <>

      <div className=''>
        <div className=''>
            <table className="" style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>
                <tr style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>
                    {values.map((value) => (
                        <>
                        <th style={{fontWeight:"400", fontSize:"13px", borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)"}}>
                            <div className="" style={{fontSize:"13px", textAlign:"center"}}>
                              {value.name}
                              </div>
                              </th></>
                    ))}
                </tr>
                <tr style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>
                <td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td>
                </tr>
                <tr style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>
                <td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td>
                </tr>
                <tr style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>
                <td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td>
                </tr>
                <tr style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>
                <td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td>
                </tr>
                <tr style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>
                <td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td>
                </tr>
                <tr style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>
                <td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td>
                </tr>
                <tr style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>
                <td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td>
                </tr>
                <tr style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>
                <td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td><td style={{borderStyle:"solid", borderWidth:"1px", borderColor:"rgba(204, 204, 204,1)", borderCollapse:"collapse"}}>&nbsp;</td>
                </tr>
                
            </table>
        </div>
      </div>
    </>
  )
};