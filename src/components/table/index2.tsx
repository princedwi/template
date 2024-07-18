import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";
import { VerticalDotsIcon } from "./VerticalDotsIcon";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { columns, rows } from "./data";

import { capitalize } from "./utils";

export default function App() {
  const INITIAL_VISIBLE_COLUMNS = [
    "name",
    "bycreated",
    "createddate",
    "updatedby",
    "updateddate",
  ];
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  interface Props {
    selectedKeys: Set<string> | "all";
    items: any[]; // Adjust this type based on the actual item structure
  }
  type SortDirection = "ascending" | "descending";

  interface SortDescriptor {
    column: string;
    direction: SortDirection;
  }

  interface Item {
    [key: string]: any; // Adjust the type according to the actual item structure
  }

  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "createddate",
    direction: "ascending",
  });
  // const [sortDescriptor, setSortDescriptor] = React.useState({
  //   column: "createddate",
  //   direction: "ascending",
  // });
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(rows.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);
  const headerColumns = React.useMemo(() => {
    return columns.filter((column) => Array.from(visibleColumns).includes(column.key));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...rows];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user?.name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }

    return filteredUsers;
  }, [rows, filterValue, statusFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: Item, b: Item) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  type ColumnKey = "name" | "createddate" | "bycreated" | "updatedby" | "updateddate";
  interface User {
    key: string;
    name: string;
    createddate: string;
    updateddate: string;
    updatedby: string;
    bycreated: string;
    // actions: string;
    // status: string;
  }
  const renderCell = React.useCallback(
    (user: User, columnKey: String) => {
      console.log("____",columnKey)
      
      var cellValue;
      if(columnKey==="name"){
        cellValue=user["name"];
      }

      if(columnKey==="createddate"){
        cellValue=user["createddate"];
      }

      if(columnKey==="updateddate"){
        cellValue=user["updateddate"];
      }

      if(columnKey==="updatedby"){
        cellValue=user["updatedby"];
      }

      if(columnKey==="bycreated"){
        cellValue=user["bycreated"];
      }

      switch (columnKey) {
        case "name":
          return (
            <User
              // avatarProps={{ radius: "full", size: "sm", src: user.avatar }}
              classNames={{
                description: "text-default-500",
              }}
              name={cellValue}
            >
              {user.name}
            </User>
          );
        case "createddate":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">{cellValue}</p>
              {/* <p className="text-bold text-tiny capitalize text-default-500">{user.createddate}</p> */}
            </div>
          );
        case "bycreated":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">{cellValue}</p>
              {/* <p className="text-bold text-tiny capitalize text-default-500">{user.team}</p> */}
            </div>
          );

        case "updatedby":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">{cellValue}</p>
              {/* <p className="text-bold text-tiny capitalize text-default-500">{user.team}</p> */}
            </div>
          );

        case "updateddate":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">{cellValue}</p>
              {/* <p className="text-bold text-tiny capitalize text-default-500">{user.team}</p> */}
            </div>
          );
        // case "actions":
        //   return (
        //     <div className="relative flex justify-end items-center gap-2">
        //       <Dropdown className="bg-background border-1 border-default-200">
        //         <DropdownTrigger>
        //           <Button isIconOnly radius="full" size="sm" variant="light">
        //             {/* <VerticalDotsIcon className="text-default-400" /> */}
        //             ::
        //           </Button>
        //         </DropdownTrigger>
        //         <DropdownMenu>
        //           <DropdownItem>View</DropdownItem>
        //           <DropdownItem>Edit</DropdownItem>
        //           <DropdownItem>Delete</DropdownItem>
        //         </DropdownMenu>
        //       </Dropdown>
        //     </div>
        //   );
        default:
          return cellValue;
      }
    }, []);

  const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);


  const onSearchChange = React.useCallback((value: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end" style={{
              paddingTop:"1rem"
            }}>
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            
            placeholder="Search by name..."
            size="sm"
            startContent={<>
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </>}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            {/* <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
              // onSelectionChange={setVisibleColumns}
              // onSelectionChange={(keys) => setStatusFilter(keys)}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.key} className="capitalize">
                    {capitalize(column.label)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown> */}
            {/* <Button
              className="bg-foreground text-background"
              endContent={<>+</>}
              size="sm"
            >
              Add New
            </Button> */}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {rows.length} users</span>
          {/* <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label> */}
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    rows.length,
    hasSearchFilter,
  ]);

  interface BottomContentProps {
    selectedKeys: Set<string> | "all";
    items: any[]; // Adjust this type based on the actual item structure
    page: number;
    pages: number;
    hasSearchFilter: boolean;
    setPage: (page: number) => void;
  }

  interface BottomContentProps {
    selectedKeys: Set<string> | "all";
    items: any[]; // Adjust this type based on the actual item structure
    page: number;
    pages: number;
    hasSearchFilter: boolean;
    setPage: (page: number) => void;
  }

  // const useBottomContent = ({
  //   selectedKeys,
  //   items,
  //   page,
  //   pages,
  //   hasSearchFilter,
  //   setPage,
  // }: BottomContentProps) => {
  //   const bottomContent = React.useMemo(() => {
  //     return (
  //       <div className="py-2 px-2 flex justify-between items-center">
  //         <Pagination
  //           showControls
  //           classNames={{
  //             cursor: "bg-foreground text-background",
  //           }}
  //           color="default"
  //           isDisabled={hasSearchFilter}
  //           page={page}
  //           total={pages}
  //           variant="light"
  //           onChange={setPage}
  //         />
  //         <span className="text-small text-default-400">
  //           {selectedKeys === "all"
  //             ? "All items selected"
  //             : `${selectedKeys.size} of ${items.length} selected`}
  //         </span>
  //       </div>
  //     );
  //   }, [selectedKeys, items.length, page, pages, hasSearchFilter, setPage]);
  
  //   return bottomContent;
  // };
  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <>&nbsp;</>
        <Pagination
          showControls
          classNames={{
            cursor: "bg-foreground text-background",
          }}
          style={{
            marginLeft:"5rem"
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
        <span className="text-small text-default-400">
        <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
          {/* All items Selected */}
          {/* {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${items.length} selected`} */}
        </span>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  
  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    [],
  );
  return (
    <>

      <Table
        isCompact
        removeWrapper
        aria-label="Example table with custom cells, pagination and sorting"
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        checkboxesProps={{
          classNames: {
            wrapper: "after:bg-foreground after:text-background text-background",
          },
        }}
        classNames={classNames}
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
      // onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
        showSelectionCheckboxes={false}
      >
       <TableHeader columns={headerColumns}>
        {(column) => {;return(
          <TableColumn
            key={column.key}
            align={column.key === "actions" ? "center" : "start"}
            allowsSorting={column.key != "actions"}
          >
            {column.label}
          </TableColumn>
        )}}
      </TableHeader>
      <TableBody emptyContent={"No users found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey)=>{console.log(columnKey);return <TableCell>
              {renderCell(item, `${columnKey}`)}
              </TableCell>}
}
          </TableRow>
        )}
      </TableBody>
      </Table>
    </>
  );
}
