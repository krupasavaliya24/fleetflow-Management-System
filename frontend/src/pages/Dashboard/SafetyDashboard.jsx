import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const SafetyDashboard = () => {
  const drivers = [
    { name: "Alex", licenseExpiry: "2026-05-01", safetyScore: 95 },
    { name: "John", licenseExpiry: "2025-12-31", safetyScore: 88 },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" mb={3}>Safety Officer Dashboard</Typography>
      <Grid container spacing={3}>
        {drivers.map(driver => (
          <Grid item xs={12} sm={6} md={4} key={driver.name}>
            <Card sx={{ p: 2 }}>
              <Typography variant="h6">{driver.name}</Typography>
              <Typography>License Expiry: {driver.licenseExpiry}</Typography>
              <Typography>Safety Score: {driver.safetyScore}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SafetyDashboard;