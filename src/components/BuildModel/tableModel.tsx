"use client";

import React, { useState } from 'react';
export interface TabsProps2 {
    step: number;
    setnumb: React.Dispatch<React.SetStateAction<number>>;

}
export interface lowerinterface {
    lower: React.Dispatch<React.SetStateAction<number>>;
}
import JSONData from "../../assests/Detailed_Specification_Json.json"
// import { Table } from '@nextui-org/table';

type JsonValue = string | number | boolean | null;
type JsonArray = Array<JsonValue | JsonObject>;
interface JsonObject {
    [key: string]: JsonValue | JsonObject | JsonArray;
}
export default function TableModel({ step, setnumb }: TabsProps2) {
    const [selectedFile, setSelectedFile] = useState<Array<File | null>>([null, null, null, null, null, null, null]);
    const [imagePreview, setImagePreview] = useState<Array<string | null>>([null, null, null, null, null, null, null]);
    const [categories, setCategories] = React.useState<string[]>(); // contain tab headings
    const [subcategories, subsetCategories] = React.useState<string[]>([]); // contains sub main headings
    interface datas {
        len: number,
        type: string
    }
    const [fieldlabel, setfieldlabel] = React.useState<datas2[]>([]); // contain the id of the current tab
    interface datas2 {
        name: string
        idz: number,
    }
    const [maxlength, setmaxlength] = React.useState<datas[]>([]);
    const [TableData, setTableData] = React.useState<Map<string, string[]>>(); // contain table data
    const [lower, setlower] = React.useState(1); // number of tabs to be activated


    const [tablestate, setTableState] = React.useState<JsonObject>({});  // contain form data --main issue

    const handleChange = (categoryKey: string, index: number, value: string) => {
        // trying to set state in form of 
        /*
            {
                heading1$subheading1:[
                    index1: value1,
                    index2: value2,
                    ....
                ]
                ....
            }
        */


        setTableState({
            ...tablestate,
            [categoryKey]: {
                ...(tablestate[categoryKey] as JsonObject),
                [index]: value
            }
        });
    };
    const filldata = () => {
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

        var dataz:datas2[]=fieldlabel;
        JSONData.data.forEach((item) => {
            const category2: string = item.attributes.Category2 ?? "other";
            const category1: string = item.attributes.Category1 ?? "other";
            const key = `${category2}$${category1}`;
            const query = item.attributes.Query;
            if (mp.has(key)) {
                mp.get(key)?.push(query);
                dataz.push({name:query,idz:item.id});
            } else {
                mp.set(key, [query]);
                dataz.push({name:query,idz:item.id});
            }
            st.set(category2, 1);
            st2.set(category1, 1);
        });
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
        if (categories) {
            for (var i = 0; i < categories.length; i++) {
                setlower(i + 1);
                setnumb(i + 1);
                for (var j = 0; j < subcategories.length; j++) {
                    if (!TableData?.get(`${subcategories[j]}$${categories[i]}`)) {
                        continue;
                    }
                    const g = `${subcategories[j]}$${categories[i]}`;
                    const gt = TableData?.get(g);
                    if (gt) {
                        for (let k = 0; k < gt.length; k++) {
                            const field = (tablestate[g] as JsonObject)?.[k];
                            if (!field || field === "") {
                                setlower(i + 1);
                                setnumb(i + 1);
                                return;
                            }
                            else{
                                for(var i=0;i<fieldlabel.length;i++){
                                    if(fieldlabel[i].name===gt[i]){
                                        // await senddata({subcategory:fieldlabel[i].idz, response:field})
                                    }
                                }
                            }
                            // else{
                            //     await senddata({subcategory:subcategory, response:field})
                            // }
                        }
                    }
                }
            }
        }
    }

    React.useEffect(() => {
        if (!categories || categories.length === 0)
            filldata();
        checkfill();
        // filltablestate();
        console.log(lower, "lower");
    }, [step, categories, lower, tablestate, fieldlabel])

    // handleFileChange to handle images of sign(which now is removed for 4th column)
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, num: Number) => {
        const file = e.target.files?.[0] || null;
        // const nextCounters = selectedFile.map((c, i) => {
        //     if (i === num) {
        //         return file;
        //     } else {
        //         return c;
        //     }
        // });
        // setSelectedFile(nextCounters);
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
                                                type="text"
                                                name={`field${index}-${index2}`}
                                                className="form-control ml-0"
                                                id={`field${index}-${index2}`}
                                                required
                                                value={String(inputValue)}
                                                onChange={(e) => {
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
                    <div className='border w-[fit-content] p-1 px-3 mb-4 rounded-xl bg-[#263c9c]  text-white text-[18px] cursor-pointer' onClick={() => { }}>Submit</div>
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