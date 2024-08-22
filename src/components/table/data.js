import React from "react";

const columns = [
    { key: "name", label: "PROJECT NAME", },
    { key: "bycreated", label: "CREATED BY", },
    { key: "createddate", label: "CREATED DATE", },
    // { key: "updatedby", label: "UPDATED BY", },
    // { key: "updateddate", label: "UPDATED DATE", },
    { key: "history", label: "HISTORY", },
];

const rowss = [
    { key: "1", name: "Flood Modeller", createddate: "2023-02-18 10:34:17", bycreated: "William Howk", updatedby: "Chris Price", updateddate: "2024-02-18 18:40:34", },
    { key: "2", name: "Sales", createddate: "2020-11-30 08:57:10", bycreated: "Steven Gorge", updatedby: "Charles Anne", updateddate: "2022-05-26 12:59:02", },
    { key: "3", name: "Digital", createddate: "2024-01-04 19:14:45", bycreated: "Mary Thomos", updatedby: "Adrien K", updateddate: "2024-06-10 10:34:17", },
    { key: "4", name: "Hydraulic Modeller", createddate: "2018-02-18 20:55:12", bycreated: "David Jhon", updatedby: "Justin Tan", updateddate: "2020-09-07 21:10:03", },
    { key: "5", name: "HR", createddate: "2022-12-08 18:03:48", bycreated: "Adelina", updatedby: "Mark Davies", updateddate: "2024-02-28 11:30:29", },
    { key: "6", name: "HR", createddate: "2022-12-08 18:03:48", bycreated: "Adelina", updatedby: "Mark Davies", updateddate: "2024-02-28 11:30:29", },
];

export { columns, rowss };