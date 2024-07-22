import React from 'react'
import { TabsProps } from './project-info'
import { MasterOutput } from '@/types/master_data.types';
import {getMasterOutputMasterData} from '@/utilities/axios/masterData/masterDataApi';

export default function OutputsTab({ step }: TabsProps) {
  const [masterMasterOutput, setmasterMasterOutput] = React.useState<MasterOutput[]>([]);
  React.useEffect(() => {
    getMasterOutputMasterData().then((response) => {
      setmasterMasterOutput(response.data);
    });
  }, [])
  return (

    <div
      className={`tab-pane relative fade ${step == 4 ? "show active" : ""}`}
      style={{ backgroundColor: 'white', padding: '3rem' }}
      id="step4"
    >

      <div className=' text-center flex  items-end justify-end absolute top-[1rem] right-[1rem] float-right '>
        <div className='border w-[fit-content] p-1 px-3 mb-4 rounded-xl bg-[#263c9c]  text-white text-[18px] cursor-pointer' onClick={() => { }}>Submit</div>
      </div>

      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field1" className='w-25'><h5>Output Name</h5></label>
        <label htmlFor="field1" className='w-25 me-4 ml-7'><h5>Recipient</h5></label>
        <label htmlFor="field1" className='w-25 ml-[-12px]'><h5>Notes</h5></label>
      </div>
      <div>
      {masterMasterOutput.map((item) => (
        <div key={item.id} className="mb-3 d-flex flex-row">
          <input
            type="checkbox"
            name={`field-${item.id}`}
            id={`field-${item.id}`}
            className="mx-2 mb-3"
          />
          <label htmlFor={`field-${item.id}`} className='w-25'>
            {item.attributes.Field}
          </label>
          <input
            type="text"
            name={`field-input1-${item.id}`}
            className="form-control w-25 me-2"
            id={`field-input1-${item.id}`}
            required
          />
          <input
            type="text"
            name={`field-input2-${item.id}`}
            className="form-control w-25"
            id={`field-input2-${item.id}`}
            required
          />
        </div>
         ))}
      </div>
      <div className="mb-3 d-flex flex-row">
        <input type="Checkbox" name="field3" id="field3" className='mx-2 mb-3' />
        <input type="text" name="field2" className="form-control w-[18.3rem] me-2" id="field2" required />
        <input type="text" name="field2" className="form-control w-25 me-2" id="field2" required />
        <input type="text" name="field2" className="form-control w-25" id="field2" required />
      </div>

    </div>
  )
}

