import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import TableCell from '@mui/material/TableCell';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { columns } from "./data";
import { useRouter } from 'next/navigation'
import { getDashboardData } from '@/utilities/axios/project/createProject';
import { getMasterOutputMasterData } from "@/utilities/axios/masterData/masterDataApi";
import { exportToExcel, exportselected } from './DownloadExcel';
interface Data {
  key: Number;
  name: string;
  bycreated: string;
  createddate: string;
  // updateddate: string;
  // updatedby: string;
  history: string
}

function createData(
  key: number,
  name: string,
  bycreated: string,
  createddate: string,
  // updateddate: string,
  // updatedby: string,
  history: string,
): Data {
  return {
    key,
    name,
    bycreated,
    createddate,
    // updateddate,
    // updatedby,
    history,
  };
}
// const rows = [
//   createData(1, 'Cupcake', 305, 3.7, 67, 4.3),
//   createData(2, 'Donut', 452, 25.0, 51, 4.9),
//   createData(3, 'Eclair', 262, 16.0, 24, 6.0),
//   createData(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
//   createData(6, 'Honeycomb', 408, 3.2, 87, 6.5),
//   createData(7, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData(8, 'Jelly Bean', 375, 0.0, 94, 0.0),
//   createData(9, 'KitKat', 518, 26.0, 65, 7.0),
//   createData(10, 'Lollipop', 392, 0.2, 98, 0.0),
//   createData(11, 'Marshmallow', 318, 0, 81, 2.0),
//   createData(12, 'Nougat', 360, 19.0, 9, 37.0),
//   createData(13, 'Oreo', 437, 18.0, 63, 4.0),
// ];
// const rows = [
//   createData(1, "Flood Modeller", "2023-02-18 10:34:17", "William Howk", "Chris Price", "2024-02-18 18:40:34",),
//   createData(2, "Sales", "2020-11-30 08:57:10", "Steven Gorge", "Charles Anne", "2022-05-26 12:59:02",),
//   createData(3, "Digital", "2024-01-04 19:14:45", "Mary Thomos", "Adrien K", "2024-06-10 10:34:17",),
//   createData(4, "Hydraulic Modeller", "2018-02-18 20:55:12", "David Jhon", "Justin Tan", "2020-09-07 21:10:03",),
//   createData(5, "HR", "2022-12-08 18:03:48", "Adelina", "Mark Davies", "2024-02-28 11:30:29",),
// ];
const rowss = [
  { key: "1", name: "Flood Modeller", createddate: "2023-02-18 10:34:17", bycreated: "William Howk", updatedby: "Chris Price", updateddate: "2024-02-18 18:40:34", },
  { key: "2", name: "Sales", createddate: "2020-11-30 08:57:10", bycreated: "Steven Gorge", updatedby: "Charles Anne", updateddate: "2022-05-26 12:59:02", },
  { key: "3", name: "Digital", createddate: "2024-01-04 19:14:45", bycreated: "Mary Thomos", updatedby: "Adrien K", updateddate: "2024-06-10 10:34:17", },
  { key: "4", name: "Hydraulic Modeller", createddate: "2018-02-18 20:55:12", bycreated: "David Jhon", updatedby: "Justin Tan", updateddate: "2020-09-07 21:10:03", },
  { key: "5", name: "HR", createddate: "2022-12-08 18:03:48", bycreated: "Adelina", updatedby: "Mark Davies", updateddate: "2024-02-28 11:30:29", },
];
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: '  Name',
  },

  {
    id: 'bycreated',
    numeric: false,
    disablePadding: false,
    label: 'Created By',
  },
  {
    id: 'createddate',
    numeric: false,
    disablePadding: false,
    label: 'Created Date',
  },
  {
    id: 'history',
    numeric: false,
    disablePadding: false,
    label: 'History',
  },
  // {
  //   id: 'updateddate',
  //   numeric: false,
  //   disablePadding: false,
  //   label: 'Updated Date',
  // },
  // {
  //   id: 'updatedby',
  //   numeric: false,
  //   disablePadding: false,
  //   label: 'Updated By',
  // },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
            className=''
            style={{
              marginLeft:"-12px"
            }}
          />
        </TableCell>
        {headCells.map((headCell) => {
          return (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
              className=''
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
                className=''
              >
                {headCell.label == "  Name" ? <>
                  &nbsp;
                  &nbsp;
                </> : <>
                </>}
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          )
        })
        }
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;
  return <></>
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
interface ID {
  id: number
}
interface setidz {
  setidnumber: React.Dispatch<React.SetStateAction<ID>>
  setshow: React.Dispatch<React.SetStateAction<boolean>>
}
export default function App({ setidnumber, setshow }: setidz) {
  const router = useRouter()
  const [historyid, sethistoryid] = React.useState<ID>(
    {
      id: 0
    }
  );
  // const [rows, setrows] = React.useState<Data[]>([])
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('createddate');
  const [selected, setSelected] = React.useState<number[]>([]);
  const [page, setPage] = React.useState(1);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setrows] = React.useState<Data[]>([]);
  const [rows2, setrows2] = React.useState<Data[]>([]);

  const setrowsdata = () => {
    const datae: Data[] = [];
    for (var i = 0; i < rowss.length; i++) {
      datae.push(createData(
        Number(rowss[i].key),
        rowss[i].name,
        rowss[i].bycreated,
        rowss[i].createddate,
        "Show History"
        // rowss[i].updatedby,
        //  rowss[i].updateddate
      ));
    }
    // setrows(datae);
  }
  if (rows.length === 0) setrowsdata();
  const fetchtable = async () => {
    const currentUserdata = localStorage.getItem("user");
    const id = currentUserdata ? JSON.parse(currentUserdata).id : -1;
    const data = await getDashboardData(id);
    console.log(data);
    const datae: Data[] = [];
    for (var i = 0; i < data.data.length; i++) {
      console.log(new Date(data.data[i].attributes.createdAt).toLocaleString("en-US"))
      datae.push(createData(
        Number(data.data[i].id),
        data.data[i].attributes.ProjectName,
        data.data[i].attributes.CreatedByUserName.data.attributes.username ? data.data[i].attributes.CreatedByUserName.data.attributes.username : "NA",
        new Date(data.data[i].attributes.createdAt).toLocaleString("en-US"),
        "Show History",
        // data.data[i].attributes.UpdatedByUserName.data.attributes.username ? data.data[i].attributes.UpdatedByUserName.data.attributes.username : "NA",
        // data.data[i].attributes.updatedAt
      ));
    }
    setrows(datae);
    setrows2(datae);
  }

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.key);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const [searchprop, setsearchprop] = React.useState<string>("");
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setrows(rows2);
      setPage(1);
      return;
    }
    const searchdata: Data[] = [...rows2].filter((item) => {
      // return (item.email.includes(e.target.value) || item.name.includes(e.target.value) || item.country.includes(e.target.value))
      return (item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.bycreated.toLowerCase().includes(e.target.value.toLowerCase()))
    })
    setrows(searchdata)
    console.log("searching", rows, e.target.value);
    setPage(1);
    // setPage(0);
    setsearchprop(e.target.value);
  }

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    console.log(id);
    router.push('/CreateQA?id=' + id);
    // const selectedIndex = selected.indexOf(id);
    // let newSelected: readonly number[] = [];

    // if (selectedIndex === -1) {
    //   newSelected = newSelected.concat(selected, id);
    // } else if (selectedIndex === 0) {
    //   newSelected = newSelected.concat(selected.slice(1));
    // } else if (selectedIndex === selected.length - 1) {
    //   newSelected = newSelected.concat(selected.slice(0, -1));
    // } else if (selectedIndex > 0) {
    //   newSelected = newSelected.concat(
    //     selected.slice(0, selectedIndex),
    //     selected.slice(selectedIndex + 1),
    //   );
    // }
    // setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );
  React.useEffect(() => {
    if (rows2.length === 0) fetchtable();
    else { setPage(0); }
    console.log(1111, searchprop)
  }, [rows.length, searchprop]);
  
  
  const handleClick2 = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
    console.log(newSelected);
  };
  return (
    <>
    <div className='w-full flex justify-between'>

      <div className='w-[300px] ml-[rem]'>
        <input type="text" placeholder="Search" className="form-control" onChange={(e) => onSearch(e)} />
      </div>
      <div className=' font-semibold border px-2 p-1 mr-2 rounded-md cursor-pointer hover:bg-slate-200 '
      onClick={()=>{
        if(selected.length==0){
          return;
        }
        else if(selected.length==rows.length){
          exportToExcel();
        } 
        else{
          exportselected(selected)
        }
      }}
      >
        Export
      </div>
    </div>
      <Box sx={{ width: '100%' }} >
        <Paper sx={{ width: '100%', mb: 0, mt: 2 }} >

          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
              className=''
            >

              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {visibleRows.map((row, index) => {
                  const isItemSelected = isSelected(row.key as number);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      onClick={(event) => handleClick2(event, row.key as number)}
                      aria-checked={false}
                      tabIndex={-1}
                      key={row.key}
                      selected={isItemSelected}
                      sx={{ cursor: 'pointer' }}
                    >
                      <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="normal"
                        style={{ fontWeight: "400", fontFamily: "sans-serif" }}
                        onClick={(event) => handleClick(event, (row.key as number))}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="left" style={{ fontWeight: "400", fontFamily: "sans-serif" }} onClick={(event) => handleClick(event, (row.key as number))}>{row.bycreated}</TableCell>
                      <TableCell align="left" style={{ fontWeight: "400", fontFamily: "sans-serif" }} onClick={(event) => handleClick(event, (row.key as number))}>
                        {row.createddate.toLocaleString()}</TableCell>
                      <TableCell align="left" style={{ fontWeight: "400", fontFamily: "sans-serif", textDecoration:"underline" }} onClick={() => {
                        setidnumber({ id: row.key as number });
                        setshow(true);
                      }}
                      >{row.history}</TableCell>
                      {/* <TableCell align="left" style={{ fontWeight: "400", fontFamily: "sans-serif" }}>{row.updatedby}</TableCell> */}
                      {/* <TableCell align="left" style={{ fontWeight: "400", fontFamily: "sans-serif" }}>{row.updateddate}</TableCell> */}
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
      </Box>
    </>
  );
}
