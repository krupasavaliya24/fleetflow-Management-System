import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const ManagerDashboard = () => {
  // Example KPI Data
  const kpis = [
    { title: "Active Fleet", value: 12 },
    { title: "Maintenance Alerts", value: 3 },
    { title: "Utilization Rate", value: "78%" },
    { title: "Pending Cargo", value: 5 },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" mb={3}>Manager Dashboard</Typography>
      <Grid container spacing={3}>
        {kpis.map((kpi) => (
          <Grid item xs={12} sm={6} md={3} key={kpi.title}>
            <Card sx={{ p: 2, textAlign: "center" }}>
              <Typography variant="h6">{kpi.title}</Typography>
              <Typography variant="h4">{kpi.value}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ManagerDashboard;