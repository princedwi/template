"use client";

import React, { useEffect, useState } from 'react';
export interface TabsProps2 {
    step: number;
    setnumb: React.Dispatch<React.SetStateAction<number>>;

}
export interface lowerinterface {
    lower: React.Dispatch<React.SetStateAction<number>>;
}
export interface tablein {
    id: number,
    dataid: number,
    category: string,
    subcategory: string,
    categoryid: number,
    subcategoryid: number,
    value: string,
    query: string,
    queryid: number,
}

import JSONData from "../../assests/Detailed_Specification_Json.json"
import { detailSpecQuery, getDetailedSpec, getDetailedSpec2, updateDetailedSpec } from '@/utilities/axios/project/createProject';
import { DetailedSpec_Query } from '@/types/project.types';
import { useProjectInfoContext } from '@/context/context';
import { useSearchParams } from 'next/navigation'

type JsonValue = string | number | boolean | null;
type JsonArray = Array<JsonValue | JsonObject>;
interface JsonObject {
    [key: string]: JsonValue | JsonObject | JsonArray;
}
export default function TableModel({ step, setnumb }: TabsProps2) {
    var [newtabledata, setnewtabledata] = React.useState<tablein[]>([]);
    const searchParams = useSearchParams()
    const paramsid: unknown = searchParams.get('id')
    const { setLoaderData, projectId } = useProjectInfoContext();
    const [ID, setID] = useState(-1);
    const [fieldlabel, setfieldlabel] = React.useState<datas2[]>([]); // contain the id of the current tab
    interface datas2 {
        name: string
        idz: number,
    }

    const [formData, setFormData] = useState<DetailedSpec_Query>({
        MasterSpecQueryID: null,
        Response: '',
        projectID: paramsid ? paramsid as number : projectId

    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(`Fetching data for projectID: ${formData.projectID}`);
                const response = await getDetailedSpec(formData.projectID);
                fetchprevdata();
                const projectData = response.data;
                console.log('Fetched project data:', projectData);
                getDetailedSpec2();
                for (var i = 0; i < response.data.length; i++) {
                    var key = `${response.data[i].attributes.MasterSpecQueryID.data.attributes.Category1}` + "$" + `${response.data[i].attributes.MasterSpecQueryID.data.attributes.Category2 ? response.data[i].attributes.MasterSpecQueryID.data.attributes.Category2 : "other"}`
                }
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };
        if (formData.projectID) {
            fetchData();
        }
    }, [formData.projectID]);

    const fetchprevdata = async () => {
        var fetcheddata: tablein[] = [];
        const response = await getDetailedSpec(formData.projectID);
        const data= await getDetailedSpec2();
        for (var i = 0; i < response.data.length; i++) {
            for (var j = 0; j < newtabledata.length; j++) {
                if (response.data[i].attributes.MasterSpecQueryID.data.attributes.Query === newtabledata[j].query) {
                    newtabledata[j].value = response.data[i].attributes.Response;
                }
            }
        }
        setlower(i + 1);
        setnumb(i + 1);
        setnewtabledata(newtabledata);
    }
    const updateData = async () => {
        for (var i = 0; i < newtabledata.length; i++) {
            // await detailSpecQuery({ MasterSpecQueryID: newtabledata[i].queryid, Response: newtabledata[i].value })
        }
    }

    const handleSubmit = async () => {
        setLoaderData({ data: "Saving Data...", display: true, type: 1 });
        try {
                if (ID !== -1) {
                  setLoaderData({ data: "Updating Data", display: true, type: 1 });
                  const res = await updateDetailedSpec({ ...formData, projectID: paramsid ? paramsid as number : projectId }, ID);
                  setFormData(formData);
                  setLoaderData({ data: "Data Updated", display: true, type: 2 });
                  console.log('successfully updated Detailed Spec')
                }
            if (categories) {
                var indi: number = -1;
                for (var i = 0; i < categories.length; i++) {
                    indi++;
                    setlower(i + 1);
                    setnumb(i + 1);
                    for (var j = 0; j < subcategories.length; j++) {
                        if (!TableData?.get(`${subcategories[j]}$${categories[indi]}`)) {
                            continue;
                        }
                        const g = `${subcategories[j]}$${categories[indi]}`;
                        const gt = TableData?.get(g);
                        if (gt) {
                            for (let k = 0; k < gt.length; k++) {
                                const field = (tablestate[g] as JsonObject)?.[k];
                                if (!field || field === "") {
                                } else {
                                    console.log(fieldlabel)
                                    for (var ik = 0; ik < fieldlabel.length; ik++) {
                                        if (fieldlabel[ik].name === (gt[k] as string)) {
                                            setFormData({ ...formData, projectID: projectId })
                                            setLoaderData({ data: "Saving Data", display: true, type: 1 });
                                            const res = await detailSpecQuery({ MasterSpecQueryID: fieldlabel[ik].idz, Response: field as string, projectID: paramsid ? paramsid as number : projectId }, ID)
                                            setLoaderData({ data: "Data Saved", display: true, type: 2 });
                                            setID(res.data.id);
                                            setFormData(formData);
                                            console.log('successfully created Detailed Spec')
                                            break;
                                        }
                                        else {
                                            console.log(fieldlabel[i].name, "do not match", gt[i])
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } catch (error) {
            console.error('Error creating project:', error);
        }
    };


    const [selectedFile, setSelectedFile] = useState<Array<File | null>>([null, null, null, null, null, null, null]);
    const [imagePreview, setImagePreview] = useState<Array<string | null>>([null, null, null, null, null, null, null]);
    const [categories, setCategories] = React.useState<string[]>([]); // contain tab headings
    const [subcategories, subsetCategories] = React.useState<string[]>([]); // contains sub main headings
    interface datas {
        len: number,
        type: string
    }
    const [maxlength, setmaxlength] = React.useState<datas[]>([]);
    const [TableData, setTableData] = React.useState<Map<string, string[]>>(); // contain table data
    const [lower, setlower] = React.useState(1); // number of tabs to be activated


    const [tablestate, setTableState] = React.useState<JsonObject>({});  // contain form data --main issue

    const handleChange = (categoryKey: string, index: number, value: string) => {
        setTableState({
            ...tablestate,
            [categoryKey]: {
                ...(tablestate[categoryKey] as JsonObject),
                [index]: value
            }
        });
    };
    const filldata = () => {
        var newarray: tablein[] = [];
        var arr: string[] = []; // will contain unique heading
        var arr2: string[] = []; // will contain sub headings
        let st: Map<string, number> = new Map([]); // store Watercourse Schematisation 1D Floodplain Schematisation etc.
        let st2: Map<string, number> = new Map([]); // store approach definition, model checks, automated checks etc.
        let finallength: Map<string, number> = new Map([]); // store length of each tabs of each headings
        let mp: Map<string, string[]> = new Map([]); // to map the categories, subcategories, and data and at last store it to state

        // --------
        // working: map, mp will contain the labels array for each heading and subheadings
        // for example: for heading Approach and subheading Water Scheme, it will form key Approach$WaterScheme and will contain string array of label as value
        // from this map, we will also fill categories, subcategories, length of each subcategory under particular category
        // --------

        var dataz: datas2[] = fieldlabel;
        JSONData.data.forEach((item) => {
            const category2: string = item.attributes.Category2 ?? "other";
            const category1: string = item.attributes.Category1 ?? "other";
            const key = `${category2}$${category1}`;
            const query = item.attributes.Query;
            if (mp.has(key)) {
                mp.get(key)?.push(query);
                dataz.push({ name: query, idz: item.id });
            } else {
                mp.set(key, [query]);
                dataz.push({ name: query, idz: item.id });
            }
            st.set(category2, 1);
            st2.set(category1, 1);
            newarray.push({
                id: projectId,
                dataid: -1,
                category: category1,
                subcategory: category2,
                value: "",
                query: query,
                queryid: item.attributes.MasterModelSpecID.data.id,
                categoryid: -1,
                subcategoryid: -1,
            })
        });
        setnewtabledata({ ...newtabledata, ...newarray });
        newtabledata = newarray;
        setfieldlabel(dataz);
        setfieldlabel(dataz);

        st.forEach((value: number, key: string) => {
            arr2.push(key);
        });
        st2.forEach((value: number, key: string) => {
            arr.push(key);
        });

        subsetCategories(arr2)
        setCategories(arr)

        for (var j = 0; j < arr2.length; j++) {
            for (var i = 0; i < arr?.length; i++) {
                var keys: string = `${arr2[j]}$${arr[i]}`
                if (!mp.has(keys)) {
                    mp.set(keys, []);
                }
                if (finallength.has(arr2[j])) {
                    var lengthi = finallength.get(arr2[j]);
                    var g = mp.get(keys);
                    if (g) {
                        finallength.set(arr2[j], Math.max(g.length, lengthi ? lengthi : 0));
                    }
                }
                else {
                    var g = mp.get(keys);
                    if (g) {
                        finallength.set(arr2[j], g.length);
                    }
                }
            }
        }
        setTableData(mp);
        var d: datas[] = []
        finallength.forEach((value: number, key: string) => {
            d.push({ len: value, type: key });
        });
        setmaxlength(d);

    }

    // Below checkfill function will keep checking whether the current column is filled or not on typing each character, if filled it will enable the next tab and vice versa
    // no issue with time complexity as it will break when it meet with an unfilled index/value
    // so total time complexity(worst case) is number of input fields which will occur when we have filled all the inputs with atleast one character.


    const checkfill = () => {
        for(var c=0;c<categories?.length;c++){
            for (var i in newtabledata){
                if(newtabledata[i].category==categories[c] && newtabledata[i].value==""){
                    setlower(c+1);
                    setnumb(c+1);
                    return;
                }
            }
        }
        return;
        // if (categories) {
        //     for (var i = 0; i < categories.length; i++) {
        //         setlower(i + 1);
        //         setnumb(i + 1);
        //         for (var j = 0; j < subcategories.length; j++) {
        //             if (!TableData?.get(`${subcategories[j]}$${categories[i]}`)) {
        //                 continue;
        //             }
        //             const g = `${subcategories[j]}$${categories[i]}`;
        //             const gt = TableData?.get(g);
        //             if (gt) {
        //                 for (let k = 0; k < gt.length; k++) {
        //                     const field = (tablestate[g] as JsonObject)?.[k];
        //                     if (!field || field === "") {
        //                         setlower(i + 1);
        //                         setnumb(i + 1);
        //                         return;
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }
    }

    React.useEffect(() => {
        if (!categories || categories.length === 0)
            filldata();
        checkfill();
        // filltablestate();
    }, [step, categories, lower, tablestate])

    // handleFileChange to handle images of sign(which now is removed for 4th column)
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, num: Number) => {
        const file = e.target.files?.[0] || null;
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
            };
            reader.readAsDataURL(file);
        } else {
            // setImagePreview(null);
        }
    };

    const changeval = (value: string, query: string) => {
        for (var i in newtabledata) {
            if (newtabledata[i].query == query) {
                newtabledata[i].value = value;
                return;
            }
        }
    }
    const findvalue = (query: string) => {
        for (var i in newtabledata) {
            if (newtabledata[i].query == query) {
                return newtabledata[i].value;
            }
        }
        return "";
    }
    const [steptwo, setStep] = useState<number>(1);
    const handleStep = (stepNumber: number) => {
        setStep(stepNumber);
    };

    const helper = (val: string) => {
        var lent: number = 0;
        const arr: string[] = []
        for (var k = 0; k < maxlength.length; k++) {
            if (maxlength[k].type === val) { lent = maxlength[k].len; break; }
        }
        while (arr.length < lent) { arr.push("") }
        return (
            <>
                {
                    arr.map(function (value1, index) {
                        return (<tr className='' key={index}>
                            {categories?.map(function (cat, index2) {
                                var gt: string[] | undefined = TableData?.get(`${val}$${cat}`)
                                const categoryKey = `${val}$${cat}`;
                                const inputValue = (tablestate[categoryKey] as JsonObject)?.[index] || "";
                                return (<td key={index2} className="ml-3" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                                    <div className="mb-3 ml-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                                        <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                                            {index2 < lower && gt && gt[index]}
                                        </label>
                                        {index2 < lower && gt && gt[index] && gt[index] != "" ?
                                            <input
                                                title={String(inputValue)}
                                                type="text"
                                                name={`field${index}-${index2}`}
                                                className="form-control ml-0"
                                                id={`field${index}-${index2}`}
                                                required
                                                value={findvalue(gt[index])}
                                                onChange={(e) => {
                                                    changeval(e.target.value, gt ? gt[index] : "");
                                                    handleChange(categoryKey, index, e.target.value);
                                                }}
                                            />
                                            : <></>}
                                    </div>
                                </td>
                                )
                            })}
                        </tr>)
                    })
                }
            </>
        )
    }


    return (
        <>
            <div className='flex flex-row w-full' style={{ width: "100%", flexDirection: "row", display: "flex", fontSize: "0.94rem" }}>
                <div className=' text-center flex  items-end justify-end absolute top-[1rem] right-[1rem] float-right'>
                    <div className='border w-[fit-content] p-1 px-3 mb-4 rounded-xl bg-[#263c9c]  text-white text-[18px] cursor-pointer' onClick={() => { handleSubmit(); console.log("CLICKED") }} >Submit</div>
                </div>
            </div>
            {subcategories.map(function (val, index) {
                return (
                    <div key={index}>
                        {val != "other" && <div key={index} style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>{val === "other" ? "" : val}<br></br></div>}
                        <table key={Math.random() * 1000} style={{ fontSize: "0.94rem" }}>
                            <thead>
                                {helper(val)}
                            </thead>
                        </table>
                    </div>)
            })}
            <div style={{ backgroundColor: '#dc3545c7', marginBottom: '20px', textAlign: 'center', }}>Model Advisor Sign Off<br></br></div>
        </>
    )
};

