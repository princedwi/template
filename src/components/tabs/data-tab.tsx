import React from 'react'
export interface TabsProps {
  step: number;
}

export default function DataTab({ step }: TabsProps) {
  const [data, setData] = React.useState([
    {
      key: 1,
    }
  ])
  const findMaxKey = () => {
    return data.reduce((max, item) => (item.key > max ? item.key : max), 0);
  };
  const addItem = (index: number) => {
    const newKey = findMaxKey() + 1;
    const newItem = { key: newKey, name: `item${newKey}` };
    const newdata = [...data];
    newdata.splice(index + 1, 0, newItem);
    setData(newdata);
  };
  const deleteItem = (key: number) => {
    setData(data.filter(item => item.key !== key));
  };
  return (

    <div
      className={`tab-pane relative fade ${step == 5 ? "show active" : ""}`}
      style={{ backgroundColor: 'white', padding: '3rem' }}
      id="step5"
    >

      <div className=' text-center flex  items-end justify-end absolute top-[1rem] right-[1rem] float-right '>
        <div className='border w-[fit-content] p-1 px-3 mb-4 rounded-xl bg-[#263c9c]  text-white text-[18px] cursor-pointer' onClick={() => { }}>Submit</div>
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
            <div key={item.key} ><input type="text" name="field3" id="field3" className='me-2 mb-3 border form-control w-[80%]' /></div>
          ))}
          {/* <div><input type="text" name="field3" id="field3" className='me-2 mb-3 border rounded-sm' /></div>
          <div><input type="text" name="field3" id="field3" className='me-2 mb-3 border rounded-sm' /></div> */}
        </div>

        <div className='description w-25'>
          {data.map((item, index) => (
            <div key={item.key} ><input type="text" name="field3" id="field3" className='me-2 mb-3 border form-control w-[80%] ' /></div>
          ))}
        </div>

        <div className='location w-25'>

          {data.map((item, index) => (
            <div key={item.key} ><input type="text" name="field3" id="field3" className='me-2 mb-3 border form-control w-[80%]' /></div>
          ))}
        </div>

        <div className='dataAdded w-25'>

          {data.map((item, index) => (
            <div key={item.key} ><input type="text" name="field3" id="field3" className='me-2 mb-3 border form-control w-[80%]' /></div>
          ))}
        </div>

        <div className='source w-25'>

          {data.map((item, index) => (
            <div key={item.key} className='flex' style={{ display: "flex", gap: "3px", justifyItems: "center" }}><input key={item.key} type="text" name="field3" id="field3" className='me-2 mb-3 border form-control w-[80%]' />
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

