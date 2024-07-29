import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
export interface LoaderProps {
    data: string,
    display: boolean,
    setloaderdata: () => void
}
const Loader = ({ data, display, setloaderdata }: LoaderProps) => {
    return (
        <>
            <div className={`loader-box-main ${display ? "" : "hidden"} `}>

                <div className=' loader-box'
                    style={{ height: "300px", width: "500px", position: "absolute", zIndex: "99", marginTop: "12%", marginLeft: "30%" }}
                >
                    <div className='absolute float-right right-2 top-2 loader-close-btn' onClick={() => { setloaderdata() }}>
                        X
                    </div>
                    <div className='loader-box-text'>
                        <div className=''>
                            <RotatingLines
                                visible={true}
                                // height="96"
                                width="96"
                                // color="red"
                                strokeWidth="5"
                                animationDuration="0.75"
                                ariaLabel="rotating-lines-loading"
                            // wrapperStyle={{}}
                            // wrapperClass=""
                            />
                        </div>
                        <div className="">
                            {data}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader