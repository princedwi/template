import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
  {key: "1",name: "Flood Modeller",createddate: "2023-02-18 10:34:17",bycreated: "William Howk",updatedby:"Chris Price",updateddate:"2024-02-18 18:40:34",},
  {key: "2",name: "Sales",createddate: "2020-11-30 08:57:10",bycreated: "Steven Gorge",updatedby:"Charles Anne",updateddate:"2022-05-26 12:59:02",},
  {key: "3",name: "Digital",createddate: "2024-01-04 19:14:45",bycreated: "Mary Thomos",updatedby:"Adrien K",updateddate:"2024-06-10 10:34:17",},
  {key: "4",name: "Hydraulic Modeller",createddate: "2018-02-18 20:55:12",bycreated: "David Jhon",updatedby:"Justin Tan",updateddate:"2020-09-07 21:10:03",},
  {key: "5",name: "HR",createddate: "2022-12-08 18:03:48",bycreated: "Adelina",updatedby:"Mark Davies",updateddate:"2024-02-28 11:30:29",},
];

const columns = [
  {key: "name",label: "PROJECT NAME",},
 {key: "bycreated",label: "CREATED BY",},
  {key: "createddate",label: "CREATED DATE",},
  {key: "updatedby",label: "UPDATED BY",},
  {key: "updateddate",label: "UPDATED DATE",},
];

export default function App() {
  return (
    <Table aria-label="Example table with dynamic content" className=" w-100 bg-light border border-4" style={{ width: '100%',borderRadius: "20%" }}>
      <TableHeader columns={columns} className="w-100 fs-3">
        {(column) => <TableColumn key={column.key} >{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
