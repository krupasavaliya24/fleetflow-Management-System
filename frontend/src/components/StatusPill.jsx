// src/components/StatusPill.jsx
import { Box, Typography } from "@mui/material";

const StatusPill = ({ status }) => {
  const colors = {
    Approved: "green",
    Cancelled: "red",
    Pending: "orange",
    "Cancel Pending": "gray",
    Reprocess: "blue",
  };

  return (
    <Box sx={{ px: 2, py: 0.5, borderRadius: 2, bgcolor: colors[status] || "lightgray", display: "inline-block" }}>
      <Typography variant="body2" sx={{ color: "#fff" }}>{status}</Typography>
    </Box>
  );
};

export default StatusPill;