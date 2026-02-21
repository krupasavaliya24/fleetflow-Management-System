import { useState } from "react";
import { Box, Typography, TextField, Button, MenuItem } from "@mui/material";

const vehicles = [
  { plate: "Van-01", capacity: 500 },
  { plate: "Truck-05", capacity: 2000 },
];

const drivers = [
  { name: "Alex", licenseValid: true },
  { name: "John", licenseValid: true },
];

const TripDispatcher = () => {
  const [form, setForm] = useState({ vehicle: "", driver: "", cargo: "" });
  const [errors, setErrors] = useState({});
  const [trips, setTrips] = useState([]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    let temp = {};
    temp.vehicle = form.vehicle ? "" : "Select a vehicle";
    temp.driver = form.driver ? "" : "Select a driver";
    temp.cargo = form.cargo ? "" : "Enter cargo weight";
    if (form.vehicle && form.cargo) {
      const selectedVehicle = vehicles.find(v => v.plate === form.vehicle);
      if (parseInt(form.cargo) > selectedVehicle.capacity) {
        temp.cargo = "Cargo exceeds vehicle capacity!";
      }
    }
    setErrors(temp);
    return Object.values(temp).every(x => x === "");
  };

  const handleSubmit = () => {
    if (validate()) {
      setTrips([...trips, { ...form, status: "Dispatched" }]);
      setForm({ vehicle: "", driver: "", cargo: "" });
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" mb={3}>Trip Dispatcher</Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        <TextField
          select
          label="Vehicle"
          name="vehicle"
          value={form.vehicle}
          onChange={handleChange}
          error={!!errors.vehicle}
          helperText={errors.vehicle}
        >
          {vehicles.map(v => <MenuItem key={v.plate} value={v.plate}>{v.plate}</MenuItem>)}
        </TextField>
        <TextField
          select
          label="Driver"
          name="driver"
          value={form.driver}
          onChange={handleChange}
          error={!!errors.driver}
          helperText={errors.driver}
        >
          {drivers.map(d => <MenuItem key={d.name} value={d.name}>{d.name}</MenuItem>)}
        </TextField>
        <TextField
          label="Cargo Weight (kg)"
          name="cargo"
          value={form.cargo}
          onChange={handleChange}
          error={!!errors.cargo}
          helperText={errors.cargo}
          type="number"
        />
        <Button variant="contained" onClick={handleSubmit}>Dispatch Trip</Button>
      </Box>
      <Typography variant="h6">Current Trips:</Typography>
      {trips.map((t, idx) => (
        <Box key={idx} sx={{ p: 1, border: "1px solid #ccc", mb: 1 }}>
          {t.vehicle} - {t.driver} - {t.cargo}kg - {t.status}
        </Box>
      ))}
    </Box>
  );
};

export default TripDispatcher;