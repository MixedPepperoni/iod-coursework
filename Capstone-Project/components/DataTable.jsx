import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "name", headerName: "Food", width: 150 },
  { field: "price", headerName: "Price per pound", width: 150 },
];

export default function DataTable({ onSelectionChange, sessionId }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/api/items/${sessionId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        return res.json();
      })
      .then((data) => {
        const formattedRows = data.map((item) => ({
          id: item._id,
          name: item.name,
          price: item.price,
        }));
        setRows(formattedRows);
        setLoading(false);
      })
      .catch((err) => {
        console.error("DataTable fetch error:", err);
        setError(
          "Failed to load items. Check if backend is running at http://localhost:5000 (try /api/health) and MongoDB is seeded with sessionId: default-session."
        );
        setLoading(false);
      });
  }, [sessionId]);

  return (
    <Paper sx={{ height: 400, width: "100%", marginBottom: 2 }}>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 4 } },
        }}
        pageSizeOptions={[4, 8]}
        checkboxSelection
        disableRowSelectionOnClick
        onRowSelectionModelChange={(ids) => {
          const selectedItems = rows.filter((row) => ids.includes(row.id));
          onSelectionChange?.(selectedItems);
        }}
      />
    </Paper>
  );
}
