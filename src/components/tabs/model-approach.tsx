import React, { useState } from 'react'
import { MasterModelType, MasterModelSoftware, MasterModelSystem } from '@/types/master_data.types';
import { getModelTypeMasterData, getModelSoftwaresMasterData, getModelSystemsMasterData } from '@/utilities/axios/masterData/masterDataApi';
import { Checkbox, createTheme, FormControl, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, ThemeProvider } from '@mui/material';
import { modelApproach, modelApproachUpdate, getmodelApproach } from '@/utilities/axios/project/createProject';
import { useProjectInfoContext } from '@/context/context';
import { useSearchParams } from 'next/navigation'

export interface TabsProps {
  step: number;
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});
export default function ModelApproach({ step }: TabsProps) {
  const searchParams = useSearchParams()
  const paramsid: unknown = searchParams.get('id')
  const [isfetchdata, setisfetchdata] = React.useState(false);

  const { setLoaderData, projectId } = useProjectInfoContext();
  const [ID, setID] = useState(-1);

  const [selectedModelSystems, selectedsetModelSystems] = React.useState<string[]>([]);
  const [selectedModelSoftwares, selectedsetModelSoftwares] = React.useState<string[]>([]);

  const [showOther, setshowOther] = React.useState(false)
  const [ModelTypes, setModelTypes] = React.useState<MasterModelType[]>([]);
  const [ModelSoftwares, setModelSoftwares] = React.useState<MasterModelSoftware[]>([]);
  const [ModelSystems, setModelSystems] = React.useState<MasterModelSystem[]>([]);
  const [formData, setFormData] = useState({
    ProjectID: projectId,
    ModelType_ID: -1,
    ModelSoftware_ID: [] as number[],
    ModelSystem_ID: [] as number[]
  })

  const handledropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, ProjectID: projectId, [e.target.name]: Number(e.target.value) })
  }


  const handleChange = (event: SelectChangeEvent<typeof selectedModelSoftwares>, index: number) => {
    if (index === 2) {
      const {
        target: { value },
      } = event;
      selectedsetModelSystems(
        typeof value === 'string' ? value.split(',') : value,
      );

      selectedsetModelSystems(
        typeof value === 'string' ? value.split(',') : value,
      );
    }
    else if (index === 1) {
      const {
        target: { value },
      } = event;
      selectedsetModelSoftwares(
        typeof value === 'string' ? value.split(',') : value,
      );
    }
  };
  
  const check = (index: number, type: string) => {
    if (type === "ModelSoftware_ID") {
      for (var i = 0; i < selectedModelSoftwares.length; i++) {
        if (selectedModelSoftwares[i] == String(index)) return true;
      }
      return false;
    }
    else if (type === "ModelSystem_ID") {
      for (var i = 0; i < selectedModelSystems.length; i++) {
        if (selectedModelSystems[i] == String(index)) return true;
      }
      return false
    }
  }
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    var arr1: number[] = selectedModelSoftwares.map((index) => ModelSoftwares[Number(index)].attributes.Master_ModelSoftware_ID);
    var arr2: number[] = selectedModelSystems.map((index) => ModelSystems[Number(index)].attributes.Master_ModelSystem_ID);

    // setFormData({ ModelType_ID:1, ModelSoftware_ID: [1,2], ModelSystem_ID: arr2 });
    try {
      if (ID != -1) {
        // console.log("UPDATIGNC DATA", ID);
        try {
          setLoaderData({ data: "Updating Data...", display: true, type: 1 });
          const res = await modelApproachUpdate({
            ProjectID: paramsid?paramsid as number:projectId,
            ModelType_ID: formData.ModelType_ID,
            ModelSoftware_ID: arr1,
            ModelSystem_ID: arr2
          }, ID);
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
      
      const data=await getmodelApproach(Number(paramsid));
      // console.log(data, "modelaproach");
      const selectedsoftware=data.data[0].attributes.ModelSoftware_ID.data;
      const selectedsystem=data.data[0].attributes.ModelSystem_ID.data;
      var arr1=[];
      var arr2=[];
      for(var i=0;i<selectedsoftware.length;i++){
        arr1.push(String(selectedsoftware[i].attributes.Master_ModelSoftware_ID));
      }

      for(var i=0;i<selectedsoftware.length;i++){
        arr2.push(String(selectedsystem[i].attributes.Master_ModelSystem_ID));
      }
      // console.log(arr1, "arr1", arr2);
      setFormData({...formData, ProjectID: paramsid as number, ModelType_ID:data.data[0].attributes.ModelType_ID.data.attributes.Master_ModelType_ID});
      // setisfetchdata(true);
      setID(data.data[0].id);
      if(ModelSoftwares.length>0 && ModelSystems.length>0){
        selectedsetModelSoftwares(arr1);
        selectedsetModelSystems(arr2);
        // console.log("DATA AVBAILABLE");
      }
      else{setCounter(counter+1); console.log("DATA NOT AA")}
      // console.log("data.data[0].attributes.ModelType_ID.data.attributes.Master_ModelType_ID",data.data[0].attributes.ModelType_ID.data.attributes.Master_ModelType_ID, formData)
      // console.log(selectedsoftware, ModelSystems, ModelSoftwares, selectedModelSoftwares, "selectedsoftware");
      // console.log(data, "modelaproach"); 
    } catch (error) {
      console.log(error, "model approack");
    }
  }
  
  const [ismasteravailable, setismasteravailable] = React.useState(false);
  React.useEffect(() => {
    if (ModelTypes.length == 0 || ModelSoftwares.length == 0 || ModelSystems.length == 0) {
      getModelTypeMasterData().then((response) => {
        setModelTypes(response.data);
      });
      getModelSoftwaresMasterData().then((response) => {
        setModelSoftwares(response.data);
      });
      getModelSystemsMasterData().then((response) => {
        setModelSystems(response.data);
      });
    }
    if(paramsid && !isfetchdata && ModelTypes.length>0 && ModelSoftwares.length>0 && ModelSystems.length>0){
      fetchdata();
    }
  }, [counter, ModelSoftwares, ModelSystems, ModelTypes]);
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



      {/* <div className="mb-3 d-flex flex-row">
          <label htmlFor="Data_Management_Strategy" className='w-25'>Type of Model Needed</label>
          <input type="text" name="Data_Management_Strategy" className="form-control w-25" id="Data_Management_Strategy" onChange={(e => { handleInputChange(e); })} />
        </div> */}
      {/* <div className='d-flex'>
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
              onChange={(e) => handleCheckbox(e, 'ModelSoftware_ID')}/>
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
                onChange={(e) => handleCheckbox(e, 'ModelSystem_ID')}
              />
              <label htmlFor={`ModelSystem_ID-${system.id}`} >
                {system.attributes.Field}
              </label>
            </div>
          ))}
        </div>


      </div> */}
      <div className=''>
        <div className="mb-3 d-flex flex-row">
          <label htmlFor="Events_To_Be_Modelled" className='w-25'>Type of Model Needed</label>
          <select name="ModelType_ID" className='form-control w-[20rem] h-[2.1rem]'
            onChange={(e) => { handledropdown(e) }}
            value={formData.ModelType_ID!=-1?formData.ModelType_ID:""}
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
        <ThemeProvider theme={theme}>
          <div className="mb-3 d-flex flex-row">
            <label htmlFor="Events_To_Be_Modelled" className='w-25'>Software To Be Used</label>
            <FormControl sx={{ fontSize: "10px" }}>
              <Select
                displayEmpty
                multiple
                className='form-controlf w-[20rem] h-[2.1rem] font-[300] '
                labelId="System To Be Modelled"
                id="System To Be Used"
                value={selectedModelSoftwares}
                onChange={(e) => handleChange(e, 1)}
                name="ModelSoftware_ID"
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <><div className='font-normal '>Select Software</div></>;
                  }

                  return <div className='' style={{ fontWeight: "200", fontFamily: "" }}>{selectedModelSoftwares
                    .map((selectedModelSoftwares) => ModelSoftwares.length>0?ModelSoftwares[Number(selectedModelSoftwares)].attributes.Field:"")
                    .join(', ')}</div>
                }}
                MenuProps={MenuProps}
              >
                <MenuItem value="" className='me-2' disabled><em>Select System To Be Used</em></MenuItem>
                {ModelSoftwares.map((modelType, index) => (
                  <MenuItem value={index} className="me-2 h-[fit-content] font-[300]" key={modelType.id}>
                    <Checkbox checked={check(index, "ModelSoftware_ID")} />
                    <ListItemText className="font-[300]" style={{ fontWeight: "300" }} primary={modelType.attributes.Field} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>


          </div>
          <div className="mb-3 d-flex flex-row">
            <label htmlFor="Events_To_Be_Modelled" className='w-25'>System To Be Modelled</label>
            <FormControl sx={{ fontSize: "10px" }}>
              <Select
                displayEmpty
                multiple
                className='form-controlf w-[20rem] h-[2.1rem] font-[300] '
                labelId="System To Be Modelled"
                id="System To Be Modelled"
                value={selectedModelSystems}
                onChange={(e) => handleChange(e, 2)}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <><div className='font-normal  '>Select System</div></>;
                  }
                  return <div className='' style={{ fontWeight: "200", fontFamily: "" }}>{selectedModelSystems
                    .map((selectedModelSystem) => ModelSystems.length>0?ModelSystems[Number(selectedModelSystem)].attributes.Field:"")
                    .join(', ')}</div>
                }}
                MenuProps={MenuProps}
              >
                <MenuItem value="" className='me-2' disabled><em>Select System To Be Modelled</em></MenuItem>
                {ModelSystems.map((modelType, index) => (
                  <MenuItem className="me-2 h-[fit-content] font-[300]" key={modelType.id} value={index}>
                    <Checkbox checked={check(index, "ModelSystem_ID")} />
                    <ListItemText className="font-[300] " style={{ fontWeight: "300" }} primary={modelType.attributes.Field} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

          </div>
        </ThemeProvider>
      </div>
    </div>
  )
}

