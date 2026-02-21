// src/pages/Vehicles/VehicleDetails.jsx
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const VehicleDetails = () => {
  const { plate } = useParams(); // get vehicle plate from route
  // For demo, you could fetch from API using plate
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" mb={2}>Vehicle Details</Typography>
      <Typography>Vehicle Plate: {plate}</Typography>
      <Typography>Model: Van-01</Typography>
      <Typography>Capacity: 500kg</Typography>
      <Typography>Status: Available</Typography>
    </Box>
  );
};

export default VehicleDetails;