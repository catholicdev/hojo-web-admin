// ** React Imports
import CustomAvatar from "@web/@core/components/mui/avatar";
// ** Custom Components
import CustomChip from "@web/@core/components/mui/chip";
// ** Types Imports
import { ThemeColor } from "@web/@core/layouts/types";
// ** Utils Import
import { getInitials } from "@web/@core/utils/get-initials";
// ** Data Import
import { rows } from "@web/@fake-db/table/static-data";
import { useState } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

interface StatusObj {
  [key: number]: {
    title: string;
    color: ThemeColor;
  };
}

// ** renders client column
const renderClient = (params: GridRenderCellParams) => {
  const { row } = params;
  const stateNum = Math.floor(Math.random() * 6);
  const states = ["success", "error", "warning", "info", "primary", "secondary"];
  const color = states[stateNum];

  if (row.avatar.length) {
    return <CustomAvatar src={`/images/avatars/${row.avatar}`} sx={{ mr: 3, width: "1.875rem", height: "1.875rem" }} />;
  } else {
    return (
      <CustomAvatar
        skin="light"
        color={color as ThemeColor}
        sx={{ mr: 3, fontSize: ".8rem", width: "1.875rem", height: "1.875rem" }}>
        {getInitials(row.full_name ? row.full_name : "John Doe")}
      </CustomAvatar>
    );
  }
};

const statusObj: StatusObj = {
  1: { title: "current", color: "primary" },
  2: { title: "professional", color: "success" },
  3: { title: "rejected", color: "error" },
  4: { title: "resigned", color: "warning" },
  5: { title: "applied", color: "info" },
};

const TableSort = () => {
  // ** States
  const [pageSize, setPageSize] = useState<number>(7);
  const [isNameSortable, setIsNameSortable] = useState(true);

  const columns: GridColDef[] = [
    {
      flex: 0.275,
      minWidth: 290,
      field: "full_name",
      headerName: "Name",
      sortable: isNameSortable,
      renderCell: (params: GridRenderCellParams) => {
        const { row } = params;

        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {renderClient(params)}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography noWrap variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                {row.full_name}
              </Typography>
              <Typography noWrap variant="caption">
                {row.email}
              </Typography>
            </Box>
          </Box>
        );
      },
    },
    {
      flex: 0.2,
      minWidth: 120,
      headerName: "Date",
      field: "start_date",
      sortable: isNameSortable,
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant="body2" sx={{ color: "text.primary" }}>
          {params.row.start_date}
        </Typography>
      ),
    },
    {
      flex: 0.2,
      minWidth: 110,
      field: "salary",
      headerName: "Salary",
      sortable: isNameSortable,
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant="body2" sx={{ color: "text.primary" }}>
          {params.row.salary}
        </Typography>
      ),
    },
    {
      flex: 0.125,
      field: "age",
      minWidth: 80,
      headerName: "Age",
      sortable: isNameSortable,
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant="body2" sx={{ color: "text.primary" }}>
          {params.row.age}
        </Typography>
      ),
    },
    {
      flex: 0.2,
      minWidth: 140,
      field: "status",
      headerName: "Status",
      sortable: isNameSortable,
      renderCell: (params: GridRenderCellParams) => {
        const status = statusObj[params.row.status];

        return (
          <CustomChip
            size="small"
            skin="light"
            color={status.color}
            label={status.title}
            sx={{ "& .MuiChip-label": { textTransform: "capitalize" } }}
          />
        );
      },
    },
  ];

  return (
    <Card>
      <CardHeader
        title="Sorting"
        action={
          <div>
            <Button size="small" variant="contained" onClick={() => setIsNameSortable(!isNameSortable)}>
              {`Disable Sorting: ${!isNameSortable}`}
            </Button>
          </div>
        }
      />
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[7, 10, 25, 50]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      />
    </Card>
  );
};

export default TableSort;
