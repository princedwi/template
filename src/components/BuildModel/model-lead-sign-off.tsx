import React, { useState } from 'react'
import { TabsProps } from '@/components/tabs/project-info'

const ModelLeadSignOff = ({ step }: TabsProps) => {
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
    return (
        <>
            <div
                className={`tab-pane fade ${step == 4 ? "show active" : ""}`}
                id="step1"
            >
                <div className="mb-3 d-flex flex-row">
                    <label htmlFor="field1" className='w-50' style={{ height: '4rem' }}></label>
                </div>
                <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Watercourse Schematisation<br></br></div>
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
                        <input type="file" onChange={(e) => handleFileChange(e, 1)} style={{ textAlign: "center", display: "flex", justifyContent: "center", width: "90px", overflow: "hidden", marginLeft: "0%", marginTop: "0.5rem" }} />
                        {/* <button type="submit" >Upload</button> */}
                    </div>
                </div>
                <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>1D Floodplain Schematisation<br></br></div>
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
                        <input type="file" onChange={(e) => handleFileChange(e, 2)} style={{ textAlign: "center", display: "flex", justifyContent: "center", width: "90px", overflow: "hidden", marginLeft: "0%", marginTop: "0.5rem" }} />
                        {/* <button type="submit" >Upload</button> */}
                    </div>
                </div>
                <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Structure representation<br></br></div>
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
                        <input type="file" onChange={(e) => handleFileChange(e, 3)} style={{ textAlign: "center", display: "flex", justifyContent: "center", width: "90px", overflow: "hidden", marginLeft: "0%", marginTop: "0.5rem" }} />
                        {/* <button type="submit" >Upload</button> */}
                    </div>
                </div>
                <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Initial Conditions<br></br></div>
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
                        <input type="file" onChange={(e) => handleFileChange(e, 4)} style={{ textAlign: "center", display: "flex", justifyContent: "center", width: "90px", overflow: "hidden", marginLeft: "0%", marginTop: "0.5rem" }} />
                        {/* <button type="submit" >Upload</button> */}
                    </div>
                </div>
                <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Boundary Conditions<br></br></div>
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
                        <input type="file" onChange={(e) => handleFileChange(e, 5)} style={{ textAlign: "center", display: "flex", justifyContent: "center", width: "90px", overflow: "hidden", marginLeft: "0%", marginTop: "0.5rem" }} />
                        {/* <button type="submit" >Upload</button> */}
                    </div>
                </div>
                <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>Model Parameters<br></br></div>
                <div className='' style={{ width: "100%", alignItems: "right", display: "flex", justifyContent: "right", paddingRight: "1rem" }}>

                    <div style={{ textAlign: "right", fontSize: "13px", justifyContent: "right", display: "flex", width: "fit-content", height: "120px", alignItems: "center", justifyItems: "center", flexDirection: "column", marginRight: "0px", marginBottom: "0.5rem" }}>
                        {imagePreview[6] && (
                            <div >
                                <div >
                                    <img src={imagePreview[6]} alt="Uploaded" className='' style={{ height: "90px", width: "120px", overflow: "hidden" }} />
                                </div>
                            </div>
                        )}
                        {!imagePreview[6] && (<>
                            <div className='border border-[2px] block' style={{ height: "70px", display: "", width: "150px" }}>

                            </div>
                        </>)}
                        <input type="file" onChange={(e) => handleFileChange(e, 6)} style={{ textAlign: "center", display: "flex", justifyContent: "center", width: "90px", overflow: "hidden", marginLeft: "0%", marginTop: "0.5rem" }} />
                        {/* <button type="submit" >Upload</button> */}
                    </div>
                </div>
                <div style={{ backgroundColor: '#dc3545c7', marginBottom: '20px', textAlign: 'center', }}>Model Advisor Sign Off<br></br></div>
            </div>
        </>
    )
}

export default ModelLeadSignOff