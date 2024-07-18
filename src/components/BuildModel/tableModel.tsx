"use client";

import React, { useState } from 'react';
export interface TabsProps2 {
    step: number;
}
import JSONData from "../../assests/Detailed_Specification_Json.json"

export default function TableModel(step: TabsProps2) {
    const [selectedFile, setSelectedFile] = useState<Array<File | null>>([null, null, null, null, null, null, null]);
    const [imagePreview, setImagePreview] = useState<Array<string | null>>([null, null, null, null, null, null, null]);
    const [categories, setCategories] = React.useState<string[]>(); // contain 4 heaidngs
    const [subcategories, subsetCategories] = React.useState<string[]>([]); // contains sub main headins
    interface datas {
        len: number,
        type: string
    }
    const [maxlength, setmaxlength] = React.useState<datas[]>([]);
    const [TableData, setTableData] = React.useState<Map<string, string[]>>();

    const filldata = () => {
        var arr: string[] = [];
        var arr2: string[] = [];
        let st: Map<string, number> = new Map([]);
        let st2: Map<string, number> = new Map([]);
        let finallength: Map<string, number> = new Map([]);
        let mp: Map<string, string[]> = new Map([]);
        JSONData.data.forEach((item) => {
            const category2: string = item.attributes.Category2 ?? "other";
            const category1: string = item.attributes.Category1 ?? "other";
            const key = `${category2}$${category1}`;
            const query = item.attributes.Query;
            if (mp.has(key)) {
                mp.get(key)?.push(query);
            } else {
                mp.set(key, [query]);
            }
            st.set(category2, 1);
            st2.set(category1, 1);
        });

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
                    mp.set(keys, [""]);
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

    React.useEffect(() => {
        filldata();
    }, [step])

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
    const handleStep = (stepNumber: number) => {
        setStep(stepNumber);
    };

    const helper = (val: string) => {
        var lent: number = 0;
        const arr: string[] = []
        for (var k = 0; k < maxlength.length; k++) {
            if (maxlength[k].type === val) { lent = maxlength[k].len; break; }
        }
        while (arr.length < lent) arr.push("")
        return (
            <>
                {
                    arr.map(function (value1, index) {
                        return (<tr className=''>
                            {categories?.map(function (cat, index2) {
                                var gt: string[] | undefined = TableData?.get(`${val}$${cat}`)
                                return (
                                    <td className="ml-3" style={{ borderWidth: "0px", borderStyle: "solid", borderColor: "grey", width: "25%", fontSize: "0.94rem" }}>
                                        <div className="mb-3 ml-3 d-flex" style={{ display: "flex", flexDirection: "column" }}>
                                            <label style={{ textAlign: "left", fontSize: "0.94rem" }} htmlFor="field1" className=''>
                                                {gt && gt[index]}
                                            </label>
                                            {gt && gt[index] && gt[index] != "" ?
                                                <input type="text" name="field1" className="form-control ml-0" id="field1" required />
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
            {/* <ApproachDefinition step={steptwo} /> */}
            <div className='flex flex-row w-full' style={{ width: "100%", flexDirection: "row", display: "flex", fontSize: "0.94rem" }}>
            </div>
            {subcategories.map(function (val, index) {
                return <>
                    {val != "other" && <div style={{ backgroundColor: '#4e67d4', marginBottom: '20px', textAlign: 'center', }}>{val === "other" ? "" : val}<br></br></div>}
                    <table style={{ fontSize: "0.94rem" }}>
                        <tr>
                            {helper(val)}
                        </tr>
                    </table>
                </>
            })}
            <div style={{ backgroundColor: '#dc3545c7', marginBottom: '20px', textAlign: 'center', }}>Model Advisor Sign Off<br></br></div>
        </>
    )
};