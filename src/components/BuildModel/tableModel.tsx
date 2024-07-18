"use client";

import React, { useState } from 'react';
export interface TabsProps2 {
    step: number;
}


export default function TableModel({ step }: TabsProps2) {
    const [selectedFile, setSelectedFile] = useState<Array<File | null>>([null, null, null, null, null, null, null]);
    const [imagePreview, setImagePreview] = useState<Array<string | null>>([null, null, null, null, null, null, null]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, num: Number) => {
        const file = e.target.files?.[0] || null;
        const nextCounters = selectedFile.map((c, i) => {
            if (i === num) {
                return file;
            } else {
                return c;
            }
        });
        setSelectedFile(nextCounters);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const nextCounters = imagePreview.map((c, i) => {
                    if (i === num) {
                        return reader.result as string;
                    } else {
                        return c;
                    }
                });
                setImagePreview(nextCounters);
                // setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            // setImagePreview(null);
        }
    };
    const [steptwo, setStep] = useState<number>(1);

    const values = [
        { name: "Approach Definition", id: 1, },
        { name: "Automated Checks", id: 2 },
        { name: "Model Checks", id: 3 },
        { name: "Model lead sign off", id: 4 },

    ];
    const handleStep = (stepNumber: number) => {
        setStep(stepNumber);
    };
    return (
        <>
            {/* <ApproachDefinition step={steptwo} /> */}
            <div className='flex flex-row w-full' style={{ width: "100%", flexDirection: "row", display: "flex", fontSize: "0.94rem" }}>
               
            </div>
            <table style={{ fontSize: "0.94rem" }}>
                <tbody>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                        Flood Modeller version / solver / precision to be used
                            </label>
                            <input type="text" name="field1" className="form-control ml-0" id="field1" required />
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", paddingTop: "15px" }}>
                    </td>
                </tr>
                </tbody>
            </table>
            <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Watercourse Schematisation<br></br></div>
            <table style={{ fontSize: "0.94rem" }}>
                <tbody>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Number and extent of reaches to be modelled

                            </label>
                            <input type="text" name="field1" className="form-control ml-0" id="field1" required />
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Do the locations and profile of the cross section look reasonable?

                            </label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", paddingTop: "15px" }}>
                        <div className='' style={{ width: "100%", alignItems: "right", display: "flex", justifyContent: "right", paddingRight: "1rem" }}>

                            <div style={{ textAlign: "right", fontSize: "13px", justifyContent: "right", display: "flex", width: "fit-content", height: "120px", alignItems: "center", justifyItems: "center", flexDirection: "column", marginRight: "0px", marginBottom: "0.5rem" }}>
                                {imagePreview[1] && (
                                    <div >
                                        <div >
                                            <img src={imagePreview[1]} alt="Uploaded" className='' style={{ height: "90px", width: "120px", overflow: "hidden" }} />
                                        </div>
                                    </div>
                                )}
                                {!imagePreview[1] && (<>
                                    <div className='border border-[2px] block' style={{ height: "70px", display: "", width: "150px" }}>

                                    </div>
                                </>)}
                                <input type="file" onChange={(e) => handleFileChange(e, 1)} style={{ textAlign: "left", fontSize: "0.94rem", display: "flex", justifyContent: "center", width: "97px", overflow: "hidden", marginLeft: "0%", marginTop: "0.5rem" }} />
                                {/* <button type="submit" >Upload</button> */}
                            </div>
                        </div>
                    </td>

                </tr>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Cross section data to be used

                            </label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Is the distance to next correct? Is the overall reach length matching survey? Do the distances in the model and section names match?

                            </label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey" }}>

                    </td>

                </tr>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Confirm/justify whether hard bed/soft bed to be used

                            </label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Bank and panel markers appropriately defined?

                            </label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey" }}>

                    </td>

                </tr>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Define channel roughness approach

                            </label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Does conveyance look appropriate? Do channel conveyance values vary outside the ratios of 0.7 and 1.4 between adjacent river sections? (Are panel markers needed or in the correct place?) Use 1D Health Check</label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey" }}>

                    </td>

                </tr>
                </tbody>
            </table>

            <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>1D Floodplain Schematisation<br></br></div>
            <table style={{ fontSize: "0.94rem" }}>
                <tbody>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                                Define reaches where extended sections are required. Define approach for extended cross sections.
                            </label>
                            <input type="text" name="field1" className="form-control ml-0" id="field1" required />
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                                Is the floodplain schematisation in line with known flood mechanisms and routes?
                            </label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", paddingTop: "15px" }}>
                        <div className='' style={{ width: "100%", alignItems: "right", display: "flex", justifyContent: "right", paddingRight: "1rem" }}>

                            <div style={{ textAlign: "right", fontSize: "13px", justifyContent: "right", display: "flex", width: "fit-content", height: "120px", alignItems: "center", justifyItems: "center", flexDirection: "column", marginRight: "0px", marginBottom: "0.5rem" }}>
                                {imagePreview[2] && (
                                    <div >
                                        <div >
                                            <img src={imagePreview[2]} alt="Uploaded" className='' style={{ height: "90px", width: "120px", overflow: "hidden" }} />
                                        </div>
                                    </div>
                                )}
                                {!imagePreview[2] && (<>
                                    <div className='border border-[2px] block' style={{ height: "70px", display: "", width: "150px" }}>

                                    </div>
                                </>)}
                                <input type="file" onChange={(e) => handleFileChange(e, 1)} style={{ textAlign: "left", fontSize: "0.94rem", display: "flex", justifyContent: "center", width: "97px", overflow: "hidden", marginLeft: "0%", marginTop: "0.5rem" }} />
                                {/* <button type="submit" >Upload</button> */}
                            </div>
                        </div>
                    </td>

                </tr>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                                Define reaches where reservoir units are needed. Define approach to defining spatial extent and production of level/area curves
                            </label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                                Are cross-sections sufficiently extended? Panel marker used? Zone of no conveyance identified?
                            </label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey" }}>

                    </td>

                </tr>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Confirm/justify whether hard bed/soft bed to be used
                                Define connectivity approach between channels and reservoir and between reservoirs. Define source of data for spill units (LiDAR/Survey)</label>

                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Bank and panel markers appropriately defined?
                                Have reservoir/floodplain units set up correctly?Reservoir Stage/area curves fully documented?</label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey" }}>

                    </td>

                </tr>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Have structure/spill units between reservoirs and main channel set up correctly?

                            </label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey" }}>

                    </td>

                </tr>
                </tbody>
            </table>

            <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Structure representation<br></br></div>
            <table style={{ fontSize: "0.94rem" }}>
                <tbody>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                                Number of structures to be modelled (approach to be provided in the structure log) and not modelled</label>

                            <input type="text" name="field1" className="form-control ml-0" id="field1" required />
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                                Has structure data been entered correctly (e.g.,  invert level, soffit level, culvert width)</label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", paddingTop: "15px" }}>
                        <div className='' style={{ width: "100%", alignItems: "right", display: "flex", justifyContent: "right", paddingRight: "1rem" }}>

                            <div style={{ textAlign: "right", fontSize: "13px", justifyContent: "right", display: "flex", width: "fit-content", height: "120px", alignItems: "center", justifyItems: "center", flexDirection: "column", marginRight: "0px", marginBottom: "0.5rem" }}>
                                {imagePreview[3] && (
                                    <div >
                                        <div >
                                            <img src={imagePreview[3]} alt="Uploaded" className='' style={{ height: "90px", width: "120px", overflow: "hidden" }} />
                                        </div>
                                    </div>
                                )}
                                {!imagePreview[3] && (<>
                                    <div className='border border-[2px] block' style={{ height: "70px", display: "", width: "150px" }}>

                                    </div>
                                </>)}
                                <input type="file" onChange={(e) => handleFileChange(e, 1)} style={{ textAlign: "left", fontSize: "0.94rem", display: "flex", justifyContent: "center", width: "97px", overflow: "hidden", marginLeft: "0%", marginTop: "0.5rem" }} />
                                {/* <button type="submit" >Upload</button> */}
                            </div>
                        </div>
                    </td>

                </tr>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                                Confirm approach to verification of structure afflux?</label>

                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                                Have appropriate structure coefficients (e.g., culvert invert parameters) and roughness coefficients been applied?</label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey" }}>

                    </td>

                </tr>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Confirm/justify whether hard bed/soft bed to be used
                                Confirm approach and/or source of initial conditions for open channels</label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Bank and panel markers appropriately defined?
                                Bridge cross section truncated to bank tops</label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey" }}>

                    </td>

                </tr>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Confirm/justify whether hard bed/soft bed to be used
                                Define approach for initial condition for reservoirs</label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Have structure/spill units between reservoirs and main channel set up correctly?
                                Has orifice model been ticked for bridges</label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey" }}>
                    </td>
                </tr>

                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Have structure/spill units between reservoirs and main channel set up correctly?
                                
            Has skew angle been used for bridges</label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey" }}>
                    </td>
                </tr>

                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Have structure/spill units between reservoirs and main channel set up correctly?
                            Have control rules been configured correctly?</label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey" }}>
                    </td>
                </tr>

                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Have structure/spill units between reservoirs and main channel set up correctly?
                            Have top/bottom slots been used for culverts?</label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey" }}>
                    </td>
                </tr>
                </tbody>
            </table>


            <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Initial Conditions<br></br></div>
            <table style={{ fontSize: "0.94rem" }}>
                <tbody>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                            Confirm approach and/or source of initial conditions for open channels</label>

                            <input type="text" name="field1" className="form-control ml-0" id="field1" required />
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                            Are initial condition sensible? Any unexpected high water levels at initial conditions?</label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", paddingTop: "15px" }}>
                        <div className='' style={{ width: "100%", alignItems: "right", display: "flex", justifyContent: "right", paddingRight: "1rem" }}>

                            <div style={{ textAlign: "right", fontSize: "13px", justifyContent: "right", display: "flex", width: "fit-content", height: "120px", alignItems: "center", justifyItems: "center", flexDirection: "column", marginRight: "0px", marginBottom: "0.5rem" }}>
                                {imagePreview[4] && (
                                    <div >
                                        <div >
                                            <img src={imagePreview[4]} alt="Uploaded" className='' style={{ height: "90px", width: "120px", overflow: "hidden" }} />
                                        </div>
                                    </div>
                                )}
                                {!imagePreview[4] && (<>
                                    <div className='border border-[2px] block' style={{ height: "70px", display: "", width: "150px" }}>

                                    </div>
                                </>)}
                                <input type="file" onChange={(e) => handleFileChange(e, 1)} style={{ textAlign: "left", fontSize: "0.94rem", display: "flex", justifyContent: "center", width: "97px", overflow: "hidden", marginLeft: "0%", marginTop: "0.5rem" }} />
                                {/* <button type="submit" >Upload</button> */}
                            </div>
                        </div>
                    </td>

                </tr>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                            Define approach for initial condition for reservoirs</label>

                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                       
                    </td>

                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey" }}>

                    </td>
                </tr>
                </tbody>
            </table>

            <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Boundary Conditions<br></br></div>
            <table style={{ fontSize: "0.94rem" }}>
                <tbody>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                            Define location and number of inflow boundaries (point/lateral/direct rainfall). </label>

                            <input type="text" name="field1" className="form-control ml-0" id="field1" required />
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                            Have boundary conditions been configured correctly? (In the case of model inflows are these in agreement with the events to be modelled)?</label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", paddingTop: "15px" }}>
                        <div className='' style={{ width: "100%", alignItems: "right", display: "flex", justifyContent: "right", paddingRight: "1rem" }}>

                            <div style={{ textAlign: "right", fontSize: "13px", justifyContent: "right", display: "flex", width: "fit-content", height: "120px", alignItems: "center", justifyItems: "center", flexDirection: "column", marginRight: "0px", marginBottom: "0.5rem" }}>
                                {imagePreview[4] && (
                                    <div >
                                        <div >
                                            <img src={imagePreview[4]} alt="Uploaded" className='' style={{ height: "90px", width: "120px", overflow: "hidden" }} />
                                        </div>
                                    </div>
                                )}
                                {!imagePreview[4] && (<>
                                    <div className='border border-[2px] block' style={{ height: "70px", display: "", width: "150px" }}>

                                    </div>
                                </>)}
                                <input type="file" onChange={(e) => handleFileChange(e, 1)} style={{ textAlign: "left", fontSize: "0.94rem", display: "flex", justifyContent: "center", width: "97px", overflow: "hidden", marginLeft: "0%", marginTop: "0.5rem" }} />
                                {/* <button type="submit" >Upload</button> */}
                            </div>
                        </div>
                    </td>

                </tr>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                                
                            Define location of downstream boundary and type (e.g., Normal depth, flow vs head, tidal)</label>

                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                                
                            Have additional flows or abstraction units been required to stabilise the model? If so, what is their impact on model results?</label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey" }}>

                    </td>

                </tr>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Confirm/justify whether hard bed/soft bed to be used
                            Are abstraction units needed? If logical rules are to be used, please define these.</label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Bank and panel markers appropriately defined?
                            Is the downstream boundary conditions sufficiently remote from the area of interest?</label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey" }}>

                    </td>

                </tr>
                </tbody>
            </table>

            <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Model Parameters<br></br></div>
            <table style={{ fontSize: "0.94rem" }}>
                <tbody>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                            Planed 1D timestep</label>
                            <input type="text" name="field1" className="form-control ml-0" id="field1" required />
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                            Have model parameters been configured correctly?</label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", paddingTop: "15px" }}>
                        <div className='' style={{ width: "100%", alignItems: "right", display: "flex", justifyContent: "right", paddingRight: "1rem" }}>

                            <div style={{ textAlign: "right", fontSize: "13px", justifyContent: "right", display: "flex", width: "fit-content", height: "120px", alignItems: "center", justifyItems: "center", flexDirection: "column", marginRight: "0px", marginBottom: "0.5rem" }}>
                                {imagePreview[5] && (
                                    <div >
                                        <div >
                                            <img src={imagePreview[5]} alt="Uploaded" className='' style={{ height: "90px", width: "120px", overflow: "hidden" }} />
                                        </div>
                                    </div>
                                )}
                                {!imagePreview[5] && (<>
                                    <div className='border border-[2px] block' style={{ height: "70px", display: "", width: "150px" }}>

                                    </div>
                                </>)}
                                <input type="file" onChange={(e) => handleFileChange(e, 1)} style={{ textAlign: "left", fontSize: "0.94rem", display: "flex", justifyContent: "center", width: "97px", overflow: "hidden", marginLeft: "0%", marginTop: "0.5rem" }} />
                                {/* <button type="submit" >Upload</button> */}
                            </div>
                        </div>
                    </td>

                </tr>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                            Planned duration of simulations and forecast simulation run times</label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey" }}>

                    </td>

                </tr>
                <tr>
                    <td className="" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Confirm/justify whether hard bed/soft bed to be used
                            Any planned deviations from default numerical parameters (including advanced parameters)?</label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td className='' style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        &nbsp;
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                        <div className="mb-3 d-flex" style={{ flexDirection: "column" }}>
                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>Bank and panel markers appropriately defined?
                            Are changes to default parameters fully justified and documented in the model development log?</label>
                            <input type="text" name="field1" className="form-control  ml-0" id="field1" required />
                        </div>
                    </td>
                    <td style={{ borderStyle: "solid", borderWidth: "0px", borderColor: "grey" }}>

                    </td>

                </tr>
                </tbody>
            </table>
        <div style={{ backgroundColor: '#dc3545c7', marginBottom: '20px', textAlign: 'center', }}>Model Advisor Sign Off<br></br></div>


        </>
    )
};