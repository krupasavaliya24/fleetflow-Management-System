import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, TextField } from "@mui/material";
import { useState } from "react";

const VehicleRegistry = () => {
  const [vehicles, setVehicles] = useState([]);
  const [form, setForm] = useState({ name: "", plate: "", capacity: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = () => {
    if (form.name && form.plate && form.capacity) {
      setVehicles([...vehicles, { ...form, status: "Available" }]);
      setForm({ name: "", plate: "", capacity: "" });
    } else alert("Fill all fields");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" mb={3}>Vehicle Registry</Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField label="Name/Model" name="name" value={form.name} onChange={handleChange} />
        <TextField label="License Plate" name="plate" value={form.plate} onChange={handleChange} />
        <TextField label="Capacity (kg)" name="capacity" value={form.capacity} onChange={handleChange} />
        <Button variant="contained" onClick={handleAdd}>Add Vehicle</Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Plate</TableCell>
            <TableCell>Capacity</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicles.map(v => (
            <TableRow key={v.plate}>
              <TableCell>{v.name}</TableCell>
              <TableCell>{v.plate}</TableCell>
              <TableCell>{v.capacity}</TableCell>
              <TableCell>{v.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default VehicleRegistry;