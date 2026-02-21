import { useState } from "react";
import { Box, Typography, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const MaintenanceLogs = () => {
  const [vehicles, setVehicles] = useState([{ plate: "Van-01", status: "Available" }]);
  const [logs, setLogs] = useState([]);
  const [form, setForm] = useState({ plate: "", service: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = () => {
    if (form.plate && form.service) {
      setLogs([...logs, { ...form }]);
      setVehicles(vs => vs.map(v => v.plate === form.plate ? { ...v, status: "In Shop" } : v));
      setForm({ plate: "", service: "" });
    } else alert("Fill all fields");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" mb={3}>Maintenance Logs</Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        <TextField
          select
          label="Vehicle"
          name="plate"
          value={form.plate}
          onChange={handleChange}
        >
          {vehicles.map(v => <MenuItem key={v.plate} value={v.plate}>{v.plate}</MenuItem>)}
        </TextField>
        <TextField label="Service Done" name="service" value={form.service} onChange={handleChange} />
        <Button variant="contained" onClick={handleAdd}>Add Log</Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Vehicle</TableCell>
            <TableCell>Service</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logs.map((l, idx) => (
            <TableRow key={idx}>
              <TableCell>{l.plate}</TableCell>
              <TableCell>{l.service}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default MaintenanceLogs;