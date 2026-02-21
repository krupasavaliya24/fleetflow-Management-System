import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useState } from "react";

const FinancialReports = () => {
  const [vehicles] = useState([
    { vehicle: "Van-01", revenue: 5000, fuel: 300, maintenance: 200, acquisition: 10000 },
    { vehicle: "Truck-05", revenue: 12000, fuel: 600, maintenance: 500, acquisition: 25000 },
  ]);

  const calculateROI = (v) => ((v.revenue - (v.fuel + v.maintenance)) / v.acquisition * 100).toFixed(2);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" mb={3}>Financial Reports</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Vehicle</TableCell>
            <TableCell>Revenue</TableCell>
            <TableCell>Fuel</TableCell>
            <TableCell>Maintenance</TableCell>
            <TableCell>Acquisition Cost</TableCell>
            <TableCell>ROI (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicles.map(v => (
            <TableRow key={v.vehicle}>
              <TableCell>{v.vehicle}</TableCell>
              <TableCell>{v.revenue}</TableCell>
              <TableCell>{v.fuel}</TableCell>
              <TableCell>{v.maintenance}</TableCell>
              <TableCell>{v.acquisition}</TableCell>
              <TableCell>{calculateROI(v)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default FinancialReports;