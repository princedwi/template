import { getActivityLog } from '@/utilities/axios/project/createProject';
import React from 'react';

interface Activityloginterface {
    name: string,
    time: Date,
    section: string,
}

interface ID {
    id: number
}
interface ActivityLogInter {
    id: number,
    show: boolean,
    setsetshow: React.Dispatch<React.SetStateAction<boolean>>
}

const ActivityLog = ({ id, show, setsetshow }: ActivityLogInter) => {
    const [data, setdata] = React.useState<Activityloginterface[]>([])
    const [projectname, setprojectname] = React.useState<string>("");
    const fetchdata = async () => {
        if (id != -1) {
            const dataz = await getActivityLog(id);
            console.log(dataz.data, "dataz");
            var arr: Activityloginterface[] = [];
            for (var i = 0; i < dataz.data.length; i++) {
                arr.push({
                    name: dataz.data[i].attributes.UpdatedByUserName.data.attributes.username,
                    time: dataz.data[i].attributes.ModifiedDate.toLocaleString("en-US"),
                    section: dataz.data[i].attributes.Section,
                })
                setprojectname(dataz.data[i].attributes.ProjectID.data.attributes.ProjectName);
            }
            setdata(arr);
            console.log("datacjrnc", data);
        }
    }
    React.useEffect(() => {
        fetchdata();
    }, [id])

    return (
        <>
            <div className={`loader-box-main ${(show) ? "" : "hidden"} `}
                style={{ width: "95.4vw", height: "94vh" }}
            >
                <div className='loader-box overflow-scroll py-2 mt-2 max-h-[90vh]'
                    style={{ height: "fit-content", width: "800px", position: "absolute", zIndex: "99", marginTop: "0%", marginLeft: "18%" }}
                >
                    <div className='absolute ml-2 mt-2 font-semibold border px-2 py-[0.5px] hover:bg-red-400 hover:text-white hover:cursor-pointer border-black rounded-full'
                        onClick={() => {
                            setsetshow(false);
                        }}
                    >
                        X
                    </div>
                    <div className='text-center text-[20px] font-semibold'>
                        {projectname}
                    </div>
                    <div className='mt-3 flex w-full justify-center items-center px-4 border'>
                        <table className=' text-center w-full mx-auto justify-center activity-log-table   '>
                            <tbody>
                                <tr className=' font-semibold  mb-2 mt-2 border-black rounded-xl'>
                                    <th className=' font-bold text-[18px] '>
                                        Updated By
                                    </th>
                                    <th className=' font-bold text-[18px] '>
                                        Section Updated
                                    </th>
                                    <th className=' font-bold text-[18px] '>
                                        Updated Time
                                    </th>
                                </tr>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.section}
                                        </td>
                                        <td>
                                            {new Date(item.time).toLocaleString("en-US")}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivityLog