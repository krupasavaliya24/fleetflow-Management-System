import { Box, Typography, Grid, Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow, Button } from "@mui/material";

const DispatcherDashboard = () => {
  const trips = [
    { id: 1, vehicle: "Van-01", driver: "Alex", status: "Draft" },
    { id: 2, vehicle: "Truck-05", driver: "John", status: "Dispatched" },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" mb={3}>Dispatcher Dashboard</Typography>
      <Button variant="contained" sx={{ mb: 2 }}>Create New Trip</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Vehicle</TableCell>
            <TableCell>Driver</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trips.map(trip => (
            <TableRow key={trip.id}>
              <TableCell>{trip.id}</TableCell>
              <TableCell>{trip.vehicle}</TableCell>
              <TableCell>{trip.driver}</TableCell>
              <TableCell>{trip.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default DispatcherDashboard;