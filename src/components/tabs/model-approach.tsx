import React, { useState } from 'react'
import { MasterModelType, MasterModelSoftware, MasterModelSystem } from '@/types/master_data.types';
import { getModelTypeMasterData, getModelSoftwaresMasterData, getModelSystemsMasterData } from '@/utilities/axios/masterData/masterDataApi';
import { modelApproach } from '@/utilities/axios/project/createProject';

export interface TabsProps {
  step: number;
}
export default function ModelApproach({ step }: TabsProps) {
  const [showOther, setshowOther] = React.useState(false)
  const [ModelTypes, setModelTypes] = React.useState<MasterModelType[]>([]);
  const [ModelSoftwares, setModelSoftwares] = React.useState<MasterModelSoftware[]>([]);
  const [ModelSystems, setModelSystems] = React.useState<MasterModelSystem[]>([]);

  const [formData, setFormData] = useState({
    ModelType_ID:0,
    ModelSoftware_ID:[] as number[],
    ModelSystem_ID:0
  })

  const handleradiobutton = (e: HTMLTextAreaElement) => {
    setFormData({ ...formData, [e.name]: Number(e.value) })
  }
  const handleCheckboxbutton=(e: HTMLInputElement)=> {
    setFormData({ ...formData, [e.name]: Number(e.value) })
  }

  
  
const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Formdata", formData)
    try {

      await modelApproach(formData);
      setFormData(formData);
      console.log('successfully created Model-Approach')
    } catch (error) {

      console.error('Error creating project:', error);
    }
  };
  React.useEffect(() => {
    getModelTypeMasterData().then((response) => {
      setModelTypes(response.data);
    });
    getModelSoftwaresMasterData().then((response) => {
      setModelSoftwares(response.data);
    });
    getModelSystemsMasterData().then((response) => {
      setModelSystems(response.data);
    });
  }, [])
  return (

    <div
      className={`tab-pane relative fade ${step == 3 ? "show active" : ""}`}
      style={{ backgroundColor: 'white', padding: '3rem' }}
      id="step3"
    >

      <div className=' text-center flex  items-end justify-end absolute top-[1rem] right-[1rem] float-right '>
      <button type="submit" style={{ 'backgroundColor': '#263c9c', 'padding': '0.5rem', 'color': 'white', 'borderRadius': '10px', 'float': 'right' }} className='border w-[fit-content] p-1 px-3 mb-4 rounded-xl bg-[#263c9c]  text-white text-[18px] cursor-pointer' onClick={handleSubmit}>Submit</button>
      </div>
      <link href='tabs/style.css'></link>

      <div className="mb-3 d-flex flex-row">
        <label htmlFor="ModelType" className='w-25'><h5>Type of Model Needed</h5></label>
        <label htmlFor="ModelSoftware" className='w-25'><h5>Software To Be Used</h5></label>
        <label htmlFor="ModelSystem" className='w-25'><h5>System To Be Modelled</h5></label>
      </div>
      
      <div className='d-flex'>
        <div className='typeofModel w-25' >
          {ModelTypes.map((modelType) => (
            <div key={modelType.id}>
              <input
                type="radio"
                name="ModelType_ID"
                id={`ModelType_ID-${modelType.id}`}
                className="me-2"
                value={modelType.attributes.Master_ModelType_ID}
                onClick={(e) => {
                  console.log(modelType.attributes.Master_ModelType_ID)
                  if(modelType.attributes.Field==="Other")
                    setshowOther(true);
                  else
                  setshowOther(false);
                  handleradiobutton(e.target as HTMLTextAreaElement);
                }}
              />
              <label htmlFor={`ModelType_ID-${modelType.id}`}>{modelType.attributes.Field}</label>
            </div>
          ))}
        </div>

        <div className='softwareUsed w-25'>
          {ModelSoftwares.map((software) => (
            <div key={software.id}>
              <input type="checkbox" name="ModelSoftware_ID" id={`ModelSoftware_ID_${software.id}`} className='me-2' 
              value={software.attributes.Master_ModelSoftware_ID}
              onClick={(e) => {
                console.log(software.attributes.Master_ModelSoftware_ID)
                if(software.attributes.Field==="Other")
                  setshowOther(true);
                else
                setshowOther(false);
                handleCheckboxbutton(e.target as HTMLInputElement);
              }}/>
              <label htmlFor={`ModelSoftware_ID_${software.id}`} >{software.attributes.Field}</label>
            </div>
          ))}
        </div>

        <div className='systemModelled'>
          {ModelSystems.map((system) => (
            <div key={system.id}>
              <input
                type="checkbox"
                name="ModelSystem_ID"
                id={`ModelSystem_ID-${system.id}`}  // Ensure unique id
                className='me-2'
                value={system.attributes.Master_ModelSystem_ID}
                onClick={(e) => {
                  console.log(system.attributes.Master_ModelSystem_ID)
                  if(system.attributes.Field==="Other")
                    setshowOther(true);
                  else
                  setshowOther(false);
                  handleCheckboxbutton(e.target as HTMLInputElement);
                }}
              />
              <label htmlFor={`ModelSystem_ID-${system.id}`} >
                {system.attributes.Field}
              </label>
            </div>
          ))}
        </div>


      </div>
    </div>

  )
}

