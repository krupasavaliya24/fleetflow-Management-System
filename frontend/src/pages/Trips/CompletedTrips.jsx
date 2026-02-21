import { useState } from "react";
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, TextField, Button } from "@mui/material";

const CompletedTrips = () => {
  const [trips, setTrips] = useState([]);
  const [form, setForm] = useState({ vehicle: "", fuel: "", cost: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = () => {
    if (form.vehicle && form.fuel && form.cost) {
      setTrips([...trips, { ...form, totalCost: parseFloat(form.fuel) * parseFloat(form.cost) }]);
      setForm({ vehicle: "", fuel: "", cost: "" });
    } else alert("Fill all fields");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" mb={3}>Completed Trips & Expenses</Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        <TextField label="Vehicle" name="vehicle" value={form.vehicle} onChange={handleChange} />
        <TextField label="Liters" type="number" name="fuel" value={form.fuel} onChange={handleChange} />
        <TextField label="Cost per Liter" type="number" name="cost" value={form.cost} onChange={handleChange} />
        <Button variant="contained" onClick={handleAdd}>Add Trip</Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Vehicle</TableCell>
            <TableCell>Liters</TableCell>
            <TableCell>Cost per Liter</TableCell>
            <TableCell>Total Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trips.map((t, idx) => (
            <TableRow key={idx}>
              <TableCell>{t.vehicle}</TableCell>
              <TableCell>{t.fuel}</TableCell>
              <TableCell>{t.cost}</TableCell>
              <TableCell>{t.totalCost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default CompletedTrips;