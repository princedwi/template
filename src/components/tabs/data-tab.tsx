import React from 'react'
export interface TabsProps {
  step: number;
}
import { DataTabInterface } from '@/types/data_tab.types';
import { sendDataDetails } from '@/utilities/axios/project/createProject';
import { useProjectInfoContext } from '@/context/context';
export default function DataTab({ step }: TabsProps) {
  const { setLoaderData, projectId } = useProjectInfoContext();
  const [data, setData] = React.useState<DataTabInterface[]>([
    {
      key: 1,
      ProjectID:projectId,
      Name: "item1",
      Data: "",
      DescriptionUse: "",
      Location: "",
      DataAdded: "",
      Source: "",
    }
  ]);
  // const [data,setData]=React.useState<DataTabInterface[]>([]);
  const findMaxKey = (): number => {
    return data.reduce((max, item) => (item.key > max ? item.key : max), 0);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: number) => {
    const value = e.target.value;
    const field = e.target.name;
    setData(prevData => prevData.map(item =>
      item.key === key ? { ...item, [field]: value } : item
    ));
    // setData({...data, [field]:value})
  }
  const addItem = (index: number) => {
    const newKey = findMaxKey() + 1;
    const newItem: DataTabInterface = {
      ProjectID:projectId,
      key: newKey,
      Name: `item${newKey}`,
      Data: "",
      DescriptionUse: "",
      Location: "",
      DataAdded: "",
      Source: "",
    }
    const newdata = [...data];
    newdata.splice(index + 1, 0, newItem);
    setData(newdata);
  };
  const deleteItem = (key: number) => {
    setData(data.filter(item => item.key !== key));
  };
  const handleSubmit = async () => {
    setLoaderData({ data: "Saving Data...", display: true, type: 1 });
    try {
      for (var i = 0; i < data.length; i++) {
        if (data[i].Data != "") {
          await sendDataDetails({...data[i], ProjectID:projectId});
        }
      }
      setLoaderData({ data: "Data Saved", display: true, type: 2 });
      setTimeout(() => {
        setLoaderData({ data: "", display: false, type: 1 });
      }, 2000);
    } catch (error) {
      console.log(error);
      setLoaderData({ data: JSON.stringify(error) ? JSON.stringify(error) : "Some Error Occurred, Please Try Again Later", display: true, type: 3 });
    }
  }
  return (

    <div
      className={`tab-pane relative fade ${step == 5 ? "show active" : ""}`}
      style={{ backgroundColor: 'white', padding: '3rem' }}
      id="step5"
    >

      <div className=' text-center flex  items-end justify-end absolute top-[1rem] right-[1rem] float-right '>
        <div className='border w-[fit-content] p-1 px-3 mb-4 rounded-xl bg-[#263c9c]  text-white text-[18px] cursor-pointer' onClick={() => { handleSubmit() }}>Submit</div>
      </div>
      <link href='tabs/style.css'></link>

      <div className="mb-3 d-flex flex-row">
        <label htmlFor="field3" className='w-25'><h5>Data</h5></label>
        <label htmlFor="field3" className='w-25'><h5>Description/Use</h5></label>
        <label htmlFor="field3" className='w-25'><h5>Location</h5></label>
        <label htmlFor="field3" className='w-25'><h5>Data Added</h5></label>
        <label htmlFor="field3" className='w-25'><h5>Source</h5></label>
      </div>

      <div className='d-flex'>
        <div className='data w-25' >
          {data.map((item, index) => (
            <div key={item.key} ><input onChange={(e) => { handleChange(e, item.key) }} type="text" name="Data" id="field3" className='me-2 mb-3 border form-control w-[80%]' /></div>
          ))}
          {/* <div><input onChange={(e) => { handleChange(e, item.key) }}  type="text" name="field3" id="field3" className='me-2 mb-3 border rounded-sm' /></div>
          <div><input onChange={(e) => { handleChange(e, item.key) }}  type="text" name="field3" id="field3" className='me-2 mb-3 border rounded-sm' /></div> */}
        </div>

        <div className='description w-25'>
          {data.map((item, index) => (
            <div key={item.key} ><input onChange={(e) => { handleChange(e, item.key) }} type="text" name="DescriptionUse" id="field3" className='me-2 mb-3 border form-control w-[80%] ' /></div>
          ))}
        </div>

        <div className='location w-25'>

          {data.map((item, index) => (
            <div key={item.key} ><input onChange={(e) => { handleChange(e, item.key) }} type="text" name="Location" id="field3" className='me-2 mb-3 border form-control w-[80%]' /></div>
          ))}
        </div>

        <div className='dataAdded w-25'>

          {data.map((item, index) => (
            <div key={item.key} ><input onChange={(e) => { handleChange(e, item.key) }} type="text" name="Source" id="DataAdded" className='me-2 mb-3 border form-control w-[80%]' /></div>
          ))}
        </div>

        <div className='source w-25'>

          {data.map((item, index) => (
            <div key={item.key} className='flex' style={{ display: "flex", gap: "3px", justifyItems: "center" }}>
              <input onChange={(e) => { handleChange(e, item.key) }} key={item.key} type="text" name="Source" id="field3" className='me-2 mb-3 border form-control w-[80%]' />
              <div className=''>
                <button className='btn btn-primary' style={{ height: "2.2rem", marginTop: "-5px" }} onClick={
                  () => {
                    addItem(index);
                  }
                }>+</button>
              </div>
              {data.length != 1 ? <div className=''>
                <button className='btn btn-danger' style={{ height: "2.2rem", marginTop: "-5px" }} onClick={
                  () => {
                    deleteItem(item.key);
                  }
                }>-</button>
              </div> : <></>}
            </div>
          ))}
        </div>




      </div>
    </div>

  )
}

