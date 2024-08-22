import React, { useState } from 'react'
import { TabsProps } from './project-info'
import BuildModel from '../BuildModel/model-logs';
import { getMasterModelLog } from '@/utilities/axios/masterData/masterDataApi';
import { MasterModelLog } from '@/types/master_data.types';
import { useProjectInfoContext } from '@/context/context';
export default function ModelLogs({ step }: TabsProps) {
  const [steptwo, setStep] = useState<number>(1);
  const [values, setValues] = useState<MasterModelLog[]>([]);
  const { dataspectype } = useProjectInfoContext();

  const handleStep = (stepNumber: number) => {
    setStep(stepNumber);
  };
  // const getdata = async () => {
  //     const response = await getMasterModelLog();
  //     console.log(response,"responseGET")
  //     var arr:MasterModelLog[]=[]
  //     for (var i = 0; i < response.data.length; i++) {
  //       arr.push({ ModelLog: response.data[i].attributes.ModelSpec, id: response.data[i].id })
  //     }
  //     setValues(arr);
  //   }

  const getdata = async () => {
    const response = await getMasterModelLog();
    console.log(response, "responseGET");
    if (Array.isArray(response.data)) {
      const arr = response.data.map(item => ({
        ModelLog: item.attributes.MasterLog,
        id: item.id
      }));
      setValues(arr);
    } else {
      console.error("Unexpected response format:", response);
    }
  };


  React.useEffect(() => {
    getdata();
  }, [])
  React.useEffect(() => {
    console.log(values, "values after set");
  }, [values]);
  return (
    <>
      <div
        className={`tab-pane relative fade ${step == 8 ? "show active" : ""}`}

      >
        <div>
          <div className='d-flex'>
            <div className="nav-pills w-25 p-4 m-2 nav-fill " id="nav-tab" role="tablist" style={{ backgroundColor: 'white', borderRadius: "10px" }}>
              {/* {values.map((value, i) => (
                                <a
                                className={`${
                                  ((dataspectype===0 && value.ModelLog[0]==="1" && value.ModelLog[2]!=="/") || (dataspectype===1 && value.ModelLog[0]==="2") || (dataspectype===2 && value.ModelLog[0]=="1" && value.ModelLog[2]==="/"))
                                  ?'bg-grey':'bg-theme-clr'} nav-link  ${dataspectype === -1 ? "active" : ""} py-2 my-2  ${steptwo === value.id ? "active" : ""}`}
                                id={`steptwo${value.id}-tab`}
                                key={i}
                                data-bs-toggle="tab"
                                onClick={() => {if(((dataspectype===0 && value.ModelLog[0]==="1" && value.ModelLog[2]!=="/") || (dataspectype===1 && value.ModelLog[0]==="2") || (dataspectype===2 && value.ModelLog[0]=="1" && value.ModelLog[2]==="/")))handleStep(value.id)}}
                                style={{ fontSize: "smaller" }}
                              >
                                {value.ModelLog}
                              </a>
                            ))} */}

              {values.map((value, i) => (
                <a
                  className={`${((dataspectype === 0 && value.ModelLog && value.ModelLog[0] === "1" && value.ModelLog[2] !== "/") ||
                      (dataspectype === 1 && value.ModelLog && value.ModelLog[0] === "2") ||
                      (dataspectype === 2 && value.ModelLog && value.ModelLog[0] === "1" && value.ModelLog[2] === "/"))
                      ? 'bg-grey' : 'bg-theme-clr'} nav-link ${dataspectype === -1 ? "active" : ""} py-2 my-2 ${steptwo === value.id ? "active" : ""}`}
                  id={`steptwo${value.id}-tab`}
                  key={i}
                  data-bs-toggle="tab"
                  onClick={() => {
                    if ((dataspectype === 0 && value.ModelLog && value.ModelLog[0] === "1" && value.ModelLog[2] !== "/") ||
                      (dataspectype === 1 && value.ModelLog && value.ModelLog[0] === "2") ||
                      (dataspectype === 2 && value.ModelLog && value.ModelLog[0] === "1" && value.ModelLog[2] === "/")) {
                      handleStep(value.id);
                    }
                  }}
                  style={{ fontSize: "smaller" }}
                >
                  {value.ModelLog}
                </a>
              ))}




            </div>
            <div className="tab-content  p-4 m-2" style={{ backgroundColor: 'white', borderRadius: "10px", width: "100%" }}>
              <BuildModel step={steptwo} />
            </div>
          </div>
        </div>
      </div>


    </>

  )
}