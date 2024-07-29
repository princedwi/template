
import React, { useState } from 'react'
import { TabsProps } from './project-info'
import { MasterOutput } from '@/types/master_data.types';
import { getMasterOutputMasterData } from '@/utilities/axios/masterData/masterDataApi';
import { outputDetail } from '@/utilities/axios/project/createProject';
import { Output_Detail } from '@/types/project.types';
import { useProjectInfoContext } from '@/context/context';
export default function OutputsTab({ step }: TabsProps) {
  const { setLoaderData } = useProjectInfoContext();
  const [masterMasterOutput, setmasterMasterOutput] = React.useState<MasterOutput[]>([]);
  const [checks, setcheck] = React.useState<boolean[]>([]);
  const [formData, setFormData] = useState<Output_Detail[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, index: number, field: string) => {
    const value = e.target.value;
    var d = formData;
    if (field === "Recipient") {
      d[index].Recipient = value;
    }
    else {
      d[index].Notes = value;
    }
    setFormData(d);
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    var c = checks;
    c[index] = !c[index];
    setcheck(c);
    console.log(checks);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoaderData({ data: "Saving Data...", display: true, type:1 });
    try {
      for (var i = 0; i < masterMasterOutput.length; i++) {
        if (checks[i]) {
          await outputDetail(formData[i]);
        }
      }
      setLoaderData({ data: "Data Saved", display: true, type:2 });
        setTimeout(() => {
          setLoaderData({ data: "", display: false, type:1 });
        }, 2000);
      console.log('successfully created Output-Table')
    } catch (error) {
      setLoaderData({ data: JSON.stringify(error)?JSON.stringify(error):"Some Error Occurred, Please Try Again Later", display: true, type:3 });
      console.error('Error creating project:', error);
    }
  };

  React.useEffect(() => {
    if (masterMasterOutput.length === 0) {
      getMasterOutputMasterData().then((response) => {
        setmasterMasterOutput(response.data);
      });
    }
    else {
      var n = masterMasterOutput.length;
      var c = [];
      for (var i = 0; i < n; i++) {
        c.push(false);
      }
      setcheck(c);
      var d: Output_Detail[] = [];
      for (var i = 0; i < n; i++) {
        d.push({ Recipient: "", OutputName: masterMasterOutput[i].id, Notes: "" });
      }
      setFormData(d);
    }
  }, [masterMasterOutput])
  return (

    <div
      className={`tab-pane relative fade ${step == 4 ? "show active" : ""}`}
      style={{ backgroundColor: 'white', padding: '3rem' }}
      id="step4"
    >

      <div className=' text-center flex  items-end justify-end absolute top-[1rem] right-[1rem] float-right '>
        <button type="submit" style={{ 'backgroundColor': '#263c9c', 'padding': '0.5rem', 'color': 'white', 'borderRadius': '10px', 'float': 'right' }} className='border w-[fit-content] p-1 px-3 mb-4 rounded-xl bg-[#263c9c]  text-white text-[18px] cursor-pointer' onClick={handleSubmit}>Submit</button>
      </div>

      <div className="mb-3 d-flex flex-row">
        <label htmlFor="OutputName" className='w-25'><h5>Output Name</h5></label>
        <label htmlFor="Recipient" className='w-25 me-4 ml-7'><h5>Recipient</h5></label>
        <label htmlFor="Notes" className='w-25 ml-[-12px]'><h5>Notes</h5></label>
      </div>
      <div>
        {masterMasterOutput.map((item, index) => (
          <div key={item.id} className="mb-3 d-flex flex-row">
            <input
              type="checkbox"
              name={`OutputName`}
              id={`OutputName-${item.id}`}
              className="mx-2 mb-3"
              value={item.attributes.MasterOutput_ID}
              onChange={(e) => handleCheckbox(e, index)}
            />
            <label htmlFor={`OutputName-${item.id}`} className='w-25'>
              {item.attributes.Field}
            </label>
            <input
              type="text"
              name={`Recipient`}
              className="form-control w-25 me-2"
              id={`Recipient-${item.id}`}
              onChange={(e) => handleInputChange(e, index, 'Recipient')}
            />
            <input
              type="text"
              name={`Notes`}
              className="form-control w-25"
              id={`Notes-${item.id}`}
              onChange={(e) => handleInputChange(e, index, 'Notes')}
            />
          </div>
        ))}
      </div>
      
      <div className="mb-3 d-flex flex-row">
        <input type="Checkbox" name="other" id="other" className='mx-2 mb-3' />
        <input type="text" name="other" className="form-control w-[18.3rem] me-2" id="other" required />
        <input type="text" name="other" className="form-control w-25 me-2" id="other" required />
        <input type="text" name="other" className="form-control w-25" id="other" required />
      </div>

    </div>
  )
}


