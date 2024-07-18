import React, { useState } from 'react'

const Signoff = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setSelectedFile(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };
    return (
        <>
            <div className=' gap-4 w-full ' >
                <div className=' w-full' style={{ backgroundColor: "", width: "100%", display: "flex", justifyContent: "space-between", height: "130px" }}>
                    <div className='flex flex-col items-center justify-center' style={{ width: "30%", textAlign: "center", fontSize: "14px", justifyContent:"center" }}>
                        <div className=''>
                            Model Advisor Review Comment
                        </div>
                        <input className='w-[70%] form-control' style={{ height: "90px" }} />
                    </div>
                    <div className='flex flex-col items-center justify-center' style={{ width: "30%", textAlign: "center", fontSize: "14px", justifyContent:"center"  }}>
                        <div>
                            Modeller response to comments
                        </div>
                        <input className='w-[70%] form-control' style={{ height: "90px" }} />
                    </div>
                    <div style={{ width: "30%", display:"flex", flexDirection:"column", textAlign: "center", fontSize: "13px", justifyContent: "center", justifyItems:"center" }}>Model Adviser Sign off Confirmation
                        {imagePreview && (
                            <div className='flex justify-center  items-center' >
                                <div className='' >
                                    <img src={imagePreview} alt="Uploaded" className='' style={{ height: "90px" }} />
                                </div>
                            </div>
                        )}
                        <input type="file" onChange={handleFileChange} style={{ textAlign: "center", display: "flex", justifyContent: "center", width: "87px", overflow: "hidden", marginLeft: "40%" }} />
                        {/* <button type="submit" >Upload</button> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signoff