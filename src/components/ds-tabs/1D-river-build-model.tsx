import React from 'react';
export interface TabsProps2 {
    step: number;
}


    export default function D1RiverModel({step}: TabsProps2) {
        return (
    <>
      <div
            className={`tab-pane fade ${step == 1 ? "show active" : ""}`}
            id="step2"
          >
            <div className="mb-3 d-flex flex-row">
              <label htmlFor="field1" className=''>Modelling Objectives and how does it meet the overall project aims</label>
              <input type="text" name="field1" className="form-control" id="field1" />
            </div>
    </div>
    </>
  )
}

