import { Box, Typography, Grid, Card } from "@mui/material";

const FinanceDashboard = () => {
  const finances = [
    { title: "Fuel Efficiency (km/L)", value: 12.5 },
    { title: "Total Operational Cost", value: "$5,200" },
    { title: "Vehicle ROI", value: "18%" },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" mb={3}>Financial Dashboard</Typography>
      <Grid container spacing={3}>
        {finances.map(f => (
          <Grid item xs={12} sm={6} md={4} key={f.title}>
            <Card sx={{ p: 2, textAlign: "center" }}>
              <Typography variant="h6">{f.title}</Typography>
              <Typography variant="h4">{f.value}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FinanceDashboard;