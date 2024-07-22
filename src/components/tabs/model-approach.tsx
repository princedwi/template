import React from 'react'
import { MasterModelType, MasterModelSoftware, MasterModelSystem } from '@/types/master_data.types';
import { getModelTypeMasterData, getModelSoftwaresMasterData, getModelSystemsMasterData } from '@/utilities/axios/masterData/masterDataApi';
export interface TabsProps {
  step: number;
}
export default function ModelApproach({ step }: TabsProps) {
  const [ModelTypes, setModelTypes] = React.useState<MasterModelType[]>([]);
  const [ModelSoftwares, setModelSoftwares] = React.useState<MasterModelSoftware[]>([]);
  const [ModelSystems, setModelSystems] = React.useState<MasterModelSystem[]>([]);

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
        <div className='border w-[fit-content] p-1 px-3 mb-4 rounded-xl bg-[#263c9c]  text-white text-[18px] cursor-pointer' onClick={() => { }}>Submit</div>
      </div>
      <link href='tabs/style.css'></link>

      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field3" className='w-25'><h5>Type of Model Needed</h5></label>
        <label htmlFor="field3" className='w-25'><h5>Software To Be Used</h5></label>
        <label htmlFor="field3" className='w-25'><h5>System To Be Modelled</h5></label>
      </div>
      {/* <div>
            <input type="radio" name="field3" id="field3" className='me-2'/>
                <label htmlFor="field3" className='w-25'>1D Only</label>
                <input type="Checkbox" name="field3" id="field3" className='me-2'/>
                <label htmlFor="field3" className='w-25'>Flood Modeller</label>
                <input type="Checkbox" name="field3" id="field3" className='me-2'/>
                <label htmlFor="field3" className='w-25'>Fluvial</label>
            </div>
                <div>
                <input type="radio" name="field3" id="field3" className='me-2'/>
                <label htmlFor="field3" className='w-25'>2D Only</label>
                <input type="Checkbox" name="field3" id="field3" className='me-2'/>
                <label htmlFor="field3" className='w-25'>TUFLOW</label>
                <input type="Checkbox" name="field3" id="field3" className='me-2'/>
                <label htmlFor="field3" className='w-25'>Pluvial</label>
            </div>
                <div>
                <input type="radio" name="field3" id="field3" className='me-2'/>
                <label htmlFor="field3" className='w-25'>1D/2D Linked</label>
                <input type="Checkbox" name="field3" id="field3" className='me-2'/>
                <label htmlFor="field3" className='w-25'>Info Work ICM</label>
                <input type="Checkbox" name="field3" id="field3" className='me-2'/>
                <label htmlFor="field3" className='w-25'>Tidal</label>
            </div> */}
      <div className='d-flex'>
        <div className='typeofModel w-25' >
          {ModelTypes.map((modelType) => (
            <div key={modelType.id}>
              <input
                type="radio"
                name="field3"
                id={`field3-${modelType.id}`}
                className="me-2"
                value={modelType.attributes.Master_ModelType_ID}
              />
              <label htmlFor={`field3-${modelType.id}`}>{modelType.attributes.Field}</label>
            </div>
          ))}
        </div>

        <div className='softwareUsed w-25'>
          {ModelSoftwares.map((software) => (
            <div key={software.id}>
              <input type="checkbox" name="field3" id={`field3_${software.id}`} className='me-2' />
              <label htmlFor={`field3_${software.id}`} >{software.attributes.Field}</label>
            </div>
          ))}
        </div>

        <div className='systemModelled'>
          {ModelSystems.map((system) => (
            <div key={system.id}>
              <input
                type="checkbox"
                name="field3"
                id={`field3-${system.id}`}  // Ensure unique id
                className='me-2'
              />
              <label htmlFor={`field3-${system.id}`} >
                {system.attributes.Field}
              </label>
            </div>
          ))}
        </div>


      </div>
    </div>

  )
}

