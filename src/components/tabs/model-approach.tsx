import React from 'react'
import { MasterModelType, MasterModelSoftware, MasterModelSystem } from '@/types/master_data.types';
import { getModelTypeMasterData, getModelSoftwaresMasterData, getModelSystemsMasterData } from '@/utilities/axios/masterData/masterDataApi';
import { Checkbox, createTheme, FormControl, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, ThemeProvider } from '@mui/material';
import { StringDecoder } from 'string_decoder';
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
  const [ModelTypes, setModelTypes] = React.useState<MasterModelType[]>([]);
  const [ModelSoftwares, setModelSoftwares] = React.useState<MasterModelSoftware[]>([]);
  const [ModelSystems, setModelSystems] = React.useState<MasterModelSystem[]>([]);
  const [selectedModelSystems, selectedsetModelSystems] = React.useState<string[]>([]);
  const [selectedModelSoftwares, selectedsetModelSoftwares] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedModelSystems>) => {
    const {
      target: { value },
    } = event;
    selectedsetModelSystems(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleChange2 = (event: SelectChangeEvent<typeof selectedModelSoftwares>) => {
    const {
      target: { value },
    } = event;
    selectedsetModelSoftwares(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  React.useEffect(() => {
    getModelTypeMasterData().then((response) => {
      setModelTypes(response.data);
    });
    console.log(ModelTypes);
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

      {/* <div className="mb-3 d-flex flex-row">
        <label htmlFor="field3" className='w-25'><h5>Type of Model Needed</h5></label>
        <label htmlFor="field3" className='w-25'><h5>Software To Be Used</h5></label>
        <label htmlFor="field3" className='w-25'><h5>System To Be Modelled</h5></label>
      </div> */}
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
      {/* <div className="mb-3 d-flex flex-row">
          <label htmlFor="Data_Management_Strategy" className='w-25'>Type of Model Needed</label>
          <input type="text" name="Data_Management_Strategy" className="form-control w-25" id="Data_Management_Strategy" onChange={(e => { handleInputChange(e); })} />
        </div> */}
      {/* <div className='d-flex'>
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


      </div> */}
      <div className=''>
        <div className="mb-3 d-flex flex-row">
          <label htmlFor="Events_To_Be_Modelled" className='w-25'>Type of Model Needed</label>
          <select className='form-control w-[20rem] h-[2.1rem]'>
            <option value="">Select Type of Model </option>
            {ModelTypes.map((modelType) => (
              <option
                value={modelType.attributes.Field}
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
            <label htmlFor="Events_To_Be_Modelled" className='w-25'>System To Be Used</label>
            <FormControl sx={{ fontSize: "10px" }}>
              <Select
                displayEmpty
                multiple
                className='form-controlf w-[20rem] h-[2.1rem] font-[300] '
                labelId="System To Be Modelled"
                id="System To Be Used"
                value={selectedModelSoftwares}
                onChange={handleChange2}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <><div className='font-normal '>Select System</div></>;
                  }

                  return selected.join(', ');
                }}
                MenuProps={MenuProps}
              >

                <MenuItem value="" className='me-2' disabled><em>Select System To Be Used</em></MenuItem>
                {ModelSoftwares.map((modelType) => (
                  <MenuItem className="me-2 h-[fit-content] font-[300]" key={modelType.id} value={modelType.attributes.Field}>
                    <Checkbox checked={selectedModelSoftwares.indexOf(modelType.attributes.Field) > -1} />
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
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <><div className='font-normal  '>Select System</div></>;
                  }

                  return <div className='' style={{ fontWeight: "200", fontFamily: "" }}>{selected.join(', ')}</div>
                }}
                MenuProps={MenuProps}
              >
                <MenuItem value="" className='me-2' disabled><em>Select System To Be Modelled</em></MenuItem>
                {ModelSystems.map((modelType) => (
                  <MenuItem className="me-2 h-[fit-content] font-[300]" key={modelType.id} value={modelType.attributes.Field}>
                    <Checkbox checked={selectedModelSystems.indexOf(modelType.attributes.Field) > -1} />
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

