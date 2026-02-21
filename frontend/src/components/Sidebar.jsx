// src/components/Sidebar.jsx
import { Box, List, ListItem, ListItemButton, ListItemText, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ role }) => {
  const navigate = useNavigate();

  const links = {
    manager: [
      { label: "Dashboard", path: "/manager-dashboard" },
      { label: "Vehicles", path: "/vehicle-registry" },
      { label: "Maintenance", path: "/maintenance-logs" },
      { label: "Drivers", path: "/driver-profiles" },
      { label: "Reports", path: "/financial-reports" },
    ],
    dispatcher: [
      { label: "Dashboard", path: "/dispatcher-dashboard" },
      { label: "Dispatch Trips", path: "/trip-dispatcher" },
      { label: "Completed Trips", path: "/completed-trips" },
    ],
    safety: [
      { label: "Dashboard", path: "/safety-dashboard" },
      { label: "Drivers", path: "/driver-profiles" },
    ],
    finance: [
      { label: "Dashboard", path: "/finance-dashboard" },
      { label: "Reports", path: "/financial-reports" },
    ],
  };

  return (
    <Box
      sx={{
        width: 220,
        bgcolor: "#fff",
        borderRight: "1px solid #e0e0e0",
        display: "flex",
        color: "#333", 
        flexDirection: "column",
        justifyContent: "flex-start",
        minHeight: "100vh",
        p: 2,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#1976d2" }}>
        FleetFlow
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <List>
        {links[role]?.map((link) => (
          <ListItem key={link.path} disablePadding>
            <ListItemButton
              onClick={() => navigate(link.path)}
              sx={{
                borderRadius: 1,
                "&:hover": { bgcolor: "#e3f2fd" },
              }}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;