import { Box, Typography, Grid, Card, CardContent, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

const DriverProfiles = () => {
  const [drivers, setDrivers] = useState([
    { name: "Alex", licenseExpiry: "2026-05-01", status: "On Duty", safetyScore: 95 },
    { name: "John", licenseExpiry: "2025-12-31", status: "Off Duty", safetyScore: 88 },
  ]);

  const handleStatusChange = (index, status) => {
    const updated = [...drivers];
    updated[index].status = status;
    setDrivers(updated);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" mb={3}>Driver Profiles</Typography>
      <Grid container spacing={3}>
        {drivers.map((d, idx) => (
          <Grid item xs={12} sm={6} md={4} key={d.name}>
            <Card sx={{ p: 2 }}>
              <Typography variant="h6">{d.name}</Typography>
              <Typography>License Expiry: {d.licenseExpiry}</Typography>
              <Typography>Safety Score: {d.safetyScore}</Typography>
              <TextField
                select
                label="Status"
                value={d.status}
                onChange={(e) => handleStatusChange(idx, e.target.value)}
                fullWidth
              >
                {["On Duty", "Off Duty", "Suspended"].map(opt => (
                  <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                ))}
              </TextField>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DriverProfiles;