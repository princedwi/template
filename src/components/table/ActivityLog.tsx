import { getActivityLog } from '@/utilities/axios/project/createProject';
import React from 'react';

interface Activityloginterface{
    name:string,
    time:Date,
    section:string,
}

interface ID{
    id:number
}

const ActivityLog = (id:ID) => {
    const [data,setdata]=React.useState<Activityloginterface[]>([])
    const fetchdata=async()=>{
        const dataz=await getActivityLog(259);
        console.log(dataz.data,"dataz");
    }
    React.useEffect(() => { 
        fetchdata();
    }, [])

    return (
        <>
            <div className={`loader-box-main {(display && type != 2) ? "" : "hidden"} `}
                style={{ width: "95.4vw", height: "94vh" }}
            >

                <div className='loader-box overflow-scroll py-2 mt-2 max-h-[90vh]'
                    style={{ height: "fit-content", width: "800px", position: "absolute", zIndex: "99", marginTop: "0%", marginLeft: "18%" }}
                >
                    <div className='text-center text-[20px] font-semibold'>
                        Project Name
                    </div>
                    <div className='mt-3 flex w-full justify-center items-center'>
                        <table className=' text-center w-full mx-auto justify-center '>
                            <tbody>
                                <tr className=''>
                                    <th>
                                        Updated BY
                                    </th>
                                    <th>
                                        Section Updated
                                    </th>
                                    <th>
                                        Updated Date
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                    1
                                    </td>
                                    <td>
1
                                    </td>
                                    <td>
1
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivityLog