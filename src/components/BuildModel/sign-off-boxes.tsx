import React, {useState} from 'react'

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
            <div className='w-[90px] gap-4 ' >
                <form style={{ backgroundColor: "", width: "100%", display: "flex", justifyContent: "space-between", height: "130px" }}>
                    <div style={{ width: "30%", textAlign: "center", fontSize: "14px" }}>Model Advisor Review Comment
                        <input className='w-[30%]' style={{ height: "90px" }} />
                    </div>
                    <div style={{ width: "30%", textAlign: "center", fontSize: "14px" }}>Modeller response to comments
                        <input className='w-[30%]' style={{ height: "90px" }} />
                    </div>
                    <div style={{ width: "30%", textAlign: "center", fontSize: "13px", justifyContent: "center" }}>Model Adviser Sign off Confirmation
                        {imagePreview && (
                            <div >
                                <div >
                                    <img src={imagePreview} alt="Uploaded" className='' style={{ height: "90px" }} />
                                </div>
                            </div>
                        )}
                        <input type="file" onChange={handleFileChange} style={{ textAlign: "center", display: "flex", justifyContent: "center", width: "90px", overflow: "hidden", marginLeft: "29%" }} />
                        {/* <button type="submit" >Upload</button> */}
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signoff