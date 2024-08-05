
import React, { useState } from 'react'
import { TabsProps } from './project-info'
import { MasterOutput } from '@/types/master_data.types';
import { getMasterOutputMasterData } from '@/utilities/axios/masterData/masterDataApi';
import { outputDetail, outputDetailUpdate, outputDetailDelete, getoutputDetail } from '@/utilities/axios/project/createProject';
import { Output_Detail } from '@/types/project.types';
import { useSearchParams } from 'next/navigation'
import { useProjectInfoContext } from '@/context/context';
export default function OutputsTab({ step }: TabsProps) {
  const searchParams = useSearchParams()
  const paramsid: unknown = searchParams.get('id')
  const [isfetchdata, setisfetchdata] = React.useState(false);

  const { setLoaderData, projectId } = useProjectInfoContext();
  const [masterMasterOutput, setmasterMasterOutput] = React.useState<MasterOutput[]>([]);
  const [checks, setcheck] = React.useState<boolean[]>([]);
  const [metachecks, setmetacheck] = React.useState<boolean[]>([]);
  const [metaIds, setmetaIds] = React.useState<number[]>([]);
  const [formData, setFormData] = useState<Output_Detail[]>([]);
  const [ID, setID] = useState(-1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, index: number, id:number, field: string) => {
    const value = e.target.value;
    var d = formData;
    if (field === "Recipient") {
      setFormData({...formData, [index]: {...formData[index], Recipient: value, OutputName: id, projectID:paramsid?paramsid as number:projectId}});
      d[index].Recipient = value;
    }
    else {
      setFormData({...formData, [index]: {...formData[index], Notes: value, OutputName: id, projectID:paramsid?paramsid as number:projectId}});
      d[index].Notes = value;
    }
    // setFormData(d);
    console.log(formData, index);
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setcheck({...checks, [index]: !checks[index]});
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoaderData({ data: "Saving Data...", display: true, type: 1 });
    try {
      var c = metachecks;
      var cId = metaIds;
      setLoaderData({ data: "Saving Data...", display: true, type: 1 });
      for (var i = 0; i < masterMasterOutput.length; i++) {
        if (checks[i]) {
          if (metachecks[i] && metachecks[i] === true && cId[i] !== undefined && cId[i] != -1) {
            const datares = await outputDetailUpdate(formData[i], cId[i]);
            continue;
          }
          // return;
          c[i] = true;
          formData[i].projectID = paramsid?paramsid as number:projectId;
          const datares = await outputDetail(formData[i]);
          cId[i] = datares.data.id;
        }
        else if (metachecks[i] && metachecks[i] === true && cId[i] !== undefined) {
          const datares = await outputDetailDelete(formData[i], cId[i]);
          console.log("deleted");
          c[i] = false;
          cId[i] = -1;
        }
      }
      setLoaderData({ data: "Data Saved", display: true, type: 2 });
      console.log('successfully created Output-Table')
    } catch (error) {
      setLoaderData({ data: JSON.stringify(error) ? JSON.stringify(error) : "Some Error Occurred, Please Try Again Later", display: true, type: 3 });
      console.error('Error creating project:', error);
    }
  };
  const getbyparams = async () => {
    const dataz = await getoutputDetail(paramsid as number);
    console.log(dataz, "hail Modi");
    var c=checks;
    console.log(formData, "doraemon");
    var d:Output_Detail[]=formData;
    for(var i=0;i<dataz.data.length;i++){
      c[dataz.data[i].attributes.OutputName.data.id-1]=true;
      d[dataz.data[i].attributes.OutputName.data.id-1].Recipient=dataz.data[i].attributes.Recipient;
      d[dataz.data[i].attributes.OutputName.data.id-1].Notes=dataz.data[i].attributes.Notes;
      d[dataz.data[i].attributes.OutputName.data.id-1].OutputName=dataz.data[i].attributes.OutputName.data.id;
      d[dataz.data[i].attributes.OutputName.data.id-1].projectID=dataz.data[i].attributes.projectID.data.id;
    } 
    console.log(formData, "DOM");
    setFormData(d);
    setcheck(c);

  }
  React.useEffect(() => {
    if (masterMasterOutput.length === 0) {
      getMasterOutputMasterData().then((response) => {
        setmasterMasterOutput(response.data);
      });
    }
    else if(formData.length===0 || checks.length==0) {
      var n = masterMasterOutput.length;
      var c = [];
      for (var i = 0; i < n; i++) {
        c.push(false);
      }
      setcheck(c);
      var d: Output_Detail[] = [];
      for (var i = 0; i < n; i++) {
        d.push({ projectID: projectId, Recipient: "", OutputName: masterMasterOutput[i].id, Notes: "" });
      }
      setFormData(d);
    }
    else{
      if (paramsid) {
        getbyparams()
      }
      console.log(99);
    }
  }, [masterMasterOutput, formData.length, checks.length])
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
        {formData && masterMasterOutput.map((item, index) => (
          <div key={item.id} className="mb-3 d-flex flex-row">
            <input
              type="checkbox"
              name={`OutputName`}
              id={`OutputName-${item.id}`}
              className="mx-2 mb-3"
              checked={checks[index]?true:false}
              value={item.attributes.MasterOutput_ID}
              onChange={(e) => handleCheckbox(e, index)}
            />
            <label htmlFor={`OutputName-${item.id}`} className='w-25'>
              {item.attributes.Field}
            </label>
            {formData[index] && <input
              type="text"
              name={`Recipient`}
              className="form-control w-25 me-2"
              id={`Recipient-${index}`}
              value={formData[index].Recipient}
              onChange={(e) => handleInputChange(e, index, item.id, 'Recipient')}
              // value={formData[index]?formData[index].Recipient:""}
            />}
            {formData[index] && <input
              type="text"
              name={`Notes`}
              className="form-control w-25"
              id={`Notes-${index}`}
              value={formData[index].Notes}
              onChange={(e) => handleInputChange(e, index, item.id, 'Notes')}
              // value={formData[index]?formData[index].Notes:e.target.value}
            />}
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


