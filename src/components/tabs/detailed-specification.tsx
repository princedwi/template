import React, { useState } from 'react'
import { TabsProps } from './project-info'
import ProjectInfo from "@/components/tabs/project-info";
import BuildModel from '../BuildModel/build-model';
import { getMasterModelSpec } from '@/utilities/axios/masterData/masterDataApi';
import {MasterModelSpec} from '@/types/master_data.types';
import { useProjectInfoContext } from '@/context/context';
export default function DetailedSpecification({ step }: TabsProps) {

  const [steptwo, setStep] = useState<number>(1);
  const [values, setValues] = useState<MasterModelSpec[]>([]);

  
  const { dataspectype } = useProjectInfoContext();
  // const values2 = [
  //   { ModelSpec: "1D River Model Build", MasterModelSpecID: 1, },
  //   { ModelSpec: "1D Reservior Model Build", MasterModelSpecID: 2 },
  //   { ModelSpec: "1D Urban Model Build", MasterModelSpecID: 3 },
  //   { ModelSpec: "2D Model Build", MasterModelSpecID: 4 },
  //   { ModelSpec: "1D/2D Linking", MasterModelSpecID: 5 },
  //   { ModelSpec: "Baseline Stress Test", MasterModelSpecID: 6 },
  //   { ModelSpec: "Model Calibration", MasterModelSpecID: 7 },
  //   { ModelSpec: "Model Verification", MasterModelSpecID: 8 },
  //   { ModelSpec: "Sensitivity Testing", MasterModelSpecID: 9 },
  //   { ModelSpec: "Scenerio Modelling", MasterModelSpecID: 10 },
  // ];
  const handleStep = (stepNumber: number) => {
    setStep(stepNumber);
  };
  const getdata = async () => {
    const response = await getMasterModelSpec();
    var arr:MasterModelSpec[]=[]
    for (var i = 0; i < response.data.length; i++) {
      arr.push({ ModelSpec: response.data[i].attributes.ModelSpec, id: response.data[i].id })
    }
    setValues(arr);
  }
  React.useEffect(() => {
    getdata();
  }, [])
  return (
    <>

      <div
        className={`tab-pane relative fade ${step == 7 ? "show active" : ""}`}>

        <div>
          <div className='d-flex'>
            <div className="nav-pills w-25 p-4 m-2 nav-fill " id="nav-tab" role="tablist" style={{ backgroundColor: 'white', borderRadius: "10px" }}>
              {values.map((value, i) => (
                <a
                  className={`${
                    ((dataspectype===0 && value.ModelSpec[0]==="1" && value.ModelSpec[2]!=="/") || (dataspectype===1 && value.ModelSpec[0]==="2") || (dataspectype===2 && value.ModelSpec[0]=="1" && value.ModelSpec[2]==="/"))
                    ?'bg-grey':'bg-theme-clr'} nav-link  ${dataspectype === -1 ? "active" : ""} py-2 my-2  ${steptwo === value.id ? "active" : ""}`}
                  id={`steptwo${value.id}-tab`}
                  key={i}
                  data-bs-toggle="tab"
                  onClick={() => {if(((dataspectype===0 && value.ModelSpec[0]==="1" && value.ModelSpec[2]!=="/") || (dataspectype===1 && value.ModelSpec[0]==="2") || (dataspectype===2 && value.ModelSpec[0]=="1" && value.ModelSpec[2]==="/")))handleStep(value.id)}}
                  style={{ fontSize: "smaller" }}
                >
                  {value.ModelSpec}
                </a>
              ))}
            </div>
            <div className="tab-content  p-4 m-2" style={{ backgroundColor: 'white', borderRadius: "10px", width: "100%" }}>
              <BuildModel step={steptwo} />
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
    </>
  )
}

