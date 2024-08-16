import React, { useState } from 'react'
import { MasterModelType, MasterModelSoftware, MasterModelSystem } from '@/types/master_data.types';
import { getModelTypeMasterData, getModelSoftwaresMasterData, getModelSystemsMasterData } from '@/utilities/axios/masterData/masterDataApi';
import { Checkbox, createTheme, FormControl, ListItemText, MenuItem, OutlinedInput, SelectChangeEvent, ThemeProvider } from '@mui/material';
import { modelApproach, modelApproachUpdate, getmodelApproach, createActivityLog } from '@/utilities/axios/project/createProject';
import { useProjectInfoContext } from '@/context/context';
import { useSearchParams } from 'next/navigation'
import Select from "react-select";
export interface TabsProps {
  step: number;
}
interface ModelSystemInterface {
  value: string;
  label: string;
  Master_ModelSystem_ID: number;
}
interface ModelSoftwareInterface {
  value: string;
  label: string;
  Master_ModelSoftware_ID: number;
}
export default function ModelApproach({ step }: TabsProps) {
  const [selectedOptions, setSelectedOptions] = useState<ModelSystemInterface[]>([]);
  const [selectedOptions2, setSelectedOptions2] = useState<ModelSoftwareInterface[]>([]);

  // Array of all options
  const [ModelSystemOptions, setModelSystemOptions] = useState<ModelSystemInterface[]>([
  ]);
  const [ModelSoftware_IDOptions, setModelSoftware_IDOptions] = useState<ModelSoftwareInterface[]>([
  ]);
  function handleSelect(datas: any) {
    setSelectedOptions(datas);
  }
  function handleSelect2(datas: any) {
    setSelectedOptions2(datas);
  }
  const searchParams = useSearchParams()
  const paramsid: unknown = searchParams.get('id')
  const [isfetchdata, setisfetchdata] = React.useState(false);

  const { setLoaderData, projectId, setdataspectype, userId } = useProjectInfoContext();
  const [ID, setID] = useState(-1);
  const [ModelTypes, setModelTypes] = React.useState<MasterModelType[]>([]);
  const [formData, setFormData] = useState({
    ProjectID: projectId,
    ModelType_ID: -1,
    ModelSoftware_ID: [] as number[],
    ModelSystem_ID: [] as number[]
  })

  const handledropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if(e.target.value==="1"){
      console.log(111);
      setdataspectype(0);
    }
    else if(e.target.value==="2"){
      console.log(e.target.value);
      setdataspectype(1);
    }
    else if(e.target.value==="3"){
      setdataspectype(2);
    }
    setFormData({ ...formData, ProjectID: projectId, [e.target.name]: Number(e.target.value) })
  }




  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // setFormData({ ModelType_ID:1, ModelSoftware_ID: [1,2], ModelSystem_ID: arr2 });
    try {
      const arr1 = selectedOptions2 ? selectedOptions2.map((index) => index.Master_ModelSoftware_ID) : [];
      const arr2 = selectedOptions ? selectedOptions.map((index) => index.Master_ModelSystem_ID) : [];
      if (ID != -1) {
        try {
          setLoaderData({ data: "Updating Data...", display: true, type: 1 });
          const res = await modelApproachUpdate({
            ProjectID: paramsid ? paramsid as number : projectId,
            ModelType_ID: formData.ModelType_ID,
            ModelSoftware_ID: arr1,
            ModelSystem_ID: arr2
          }, ID);
          createActivityLog({
            ProjectID: paramsid?paramsid as number:projectId,
            ModifiedDate: new Date(),
            Section:"Model Approach",
            Entity:"Model Approach",
            UpdatedByUserName:userId
          }).then(e => {
            console.log("activity created")
          }).catch(err => {
            console.log("activity not created",err)
          })
          setLoaderData({ data: "Data Updated", display: true, type: 2 });
          console.log("Successfully Updated Model-Approach", res);
        } catch (error) {
          console.error('Error updating model-approach:', error);
          setLoaderData({ data: JSON.stringify(error) ? JSON.stringify(error) : "Some Error Occurred, Please Try Again Later", display: true, type: 3 });
        }
        return;
      }
      setLoaderData({ data: "Saving Data...", display: true, type: 1 });
      const red = await modelApproach({
        ProjectID: projectId,
        ModelType_ID: formData.ModelType_ID,
        ModelSoftware_ID: arr1,
        ModelSystem_ID: arr2
      });

      createActivityLog({
        ProjectID: projectId,
        ModifiedDate: new Date(),
        Section:"Model Approach",
        Entity:"Model Approach",
        UpdatedByUserName:userId
      }).then(e => {
        console.log("activity created")
      }).catch(err => {
        console.log("activity not created",err)
      })
      setID(red.data.id);
      setLoaderData({ data: "Data Saved", display: true, type: 2 });
      setTimeout(() => {
        setLoaderData({ data: "", display: false, type: 1 });
      }, 2000);
      console.log('successfully created Model-Approach')
    } catch (error) {
      console.error('Error creating project:', error);
      setLoaderData({ data: JSON.stringify(error) ? JSON.stringify(error) : "Some Error Occurred, Please Try Again Later", display: true, type: 3 });
    }
  };
  const [counter, setCounter] = React.useState(0);
  const fetchdata = async () => {
    try {
      const data = await getmodelApproach(Number(paramsid));
      const selectedsoftware = data.data[0].attributes.ModelSoftware_ID.data;
      const selectedsystem = data.data[0].attributes.ModelSystem_ID.data;
      var arr2: ModelSystemInterface[] = [];
      var arr1: ModelSoftwareInterface[] = [];
      for (var i = 0; i < selectedsoftware.length; i++) {
        arr1.push({ value: selectedsoftware[i].attributes.Field, label: selectedsoftware[i].attributes.Field, Master_ModelSoftware_ID: selectedsoftware[i].id });
      }
      for (var i = 0; i < selectedsystem.length; i++) {
        arr2.push({ value: selectedsystem[i].attributes.Field, label: selectedsystem[i].attributes.Field, Master_ModelSystem_ID: selectedsystem[i].id });
      }
      setFormData({ ...formData, ProjectID: paramsid as number, ModelType_ID: data.data[0].attributes.ModelType_ID.data.id });
      setID(data.data[0].id);
      if (arr1.length > 0 && arr2.length > 0 && selectedOptions.length == 0) {
        setSelectedOptions(arr2);
        setSelectedOptions2(arr1);
        setCounter(counter + 1);
        return;
      }
      else { setCounter(counter + 1); console.log("DATA NOT Available") }
      setisfetchdata(true);
    } catch (error) {
      console.log(error, "in model approach");
    }
  }
  const getmasterData = async () => {
    try {
      getModelTypeMasterData().then((response) => {
        setModelTypes(response.data);
      });
      getModelSoftwaresMasterData().then((response) => {
        const newOptions = response.data.map((item: any) => ({
          value: item.attributes.Field,
          label: item.attributes.Field,
          Master_ModelSoftware_ID: item.id,
        }));
        setModelSoftware_IDOptions(newOptions)
      });
      getModelSystemsMasterData().then((response) => {
        const newOptions = response.data.map((item: any) => ({
          value: item.attributes.Field,
          label: item.attributes.Field,
          Master_ModelSystem_ID: item.id,
        }));
        setModelSystemOptions(newOptions);
      });
    } catch (error) {
      console.log(error, "error in fetching m,aster data in approach")
    }
  }
  const [ismasteravailable, setismasteravailable] = React.useState(false);
  React.useEffect(() => {
    if (ModelTypes.length == 0 && ModelSoftware_IDOptions.length == 0 && ModelSystemOptions.length == 0) {
      getmasterData();
    }
    if (paramsid && !isfetchdata && ModelTypes.length > 0 && ModelSystemOptions.length > 0 && ModelSoftware_IDOptions.length > 0) {
      fetchdata();
    }
  }, [counter, ModelSystemOptions, ModelSoftware_IDOptions, ModelTypes]);
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

      <div className=''>
        <div className="mb-3 d-flex flex-row">
          <label htmlFor="Events_To_Be_Modelled" className='w-25'>Type of Model Needed</label>
          <select name="ModelType_ID" className='form-control w-[20rem] h-[2.1rem]'
            onChange={(e) => { handledropdown(e) }}
            value={formData.ModelType_ID != -1 ? formData.ModelType_ID : ""}
          >
            <option value="">Select Type of Model </option>
            {ModelTypes.map((modelType) => (
              <option
                value={modelType.attributes.Master_ModelType_ID}
                key={modelType.id}
                id={`field3-${modelType.id}`}
                className="me-2"
              >
                {modelType.attributes.Field}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3 d-flex items-center flex-row">
          <label htmlFor="Events_To_Be_Modelled" className='w-25'>System To Be Modelled</label>
          <Select
            options={ModelSystemOptions}
            placeholder="Select color"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            isMulti
            className='w-[20rem] h-[2.1rem] block '
          />
        </div>
        <div className={`mb-3 d-flex items-center flex-row mkt-[3remk] mt-[${(selectedOptions && selectedOptions.length > 0) ? (selectedOptions.length + 20) : "8"} rem]`}
          style={{
            marginTop: (selectedOptions && selectedOptions.length > 0) ? `${selectedOptions.length}rem` : "0rem"
          }}
        >
          <label htmlFor="Events_To_Be_Modelled" className='w-25'>Software To Be Modelled</label>
          <Select
            options={ModelSoftware_IDOptions}
            placeholder="Select color"
            value={selectedOptions2}
            onChange={handleSelect2}
            isSearchable={true}
            isMulti
            className=' w-[20rem] h-[2.1rem]'
          />
        </div>
      </div>
    </div>
  )
}

