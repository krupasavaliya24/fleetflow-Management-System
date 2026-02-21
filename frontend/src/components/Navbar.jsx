// src/components/Navbar.jsx
import { Box, Button, Typography, Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ role }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/login");
  };

  const handleAvatarClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  // Example email
  const email = "user@example.com";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        bgcolor: "#fff",
        borderBottom: "1px solid #e0e0e0",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
        color: "#333", 
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        {role?.toUpperCase()} Dashboard
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="body2">{email}</Typography>

        <IconButton onClick={handleAvatarClick}>
          <Avatar sx={{ bgcolor: "#1976d2" }}>{email[0].toUpperCase()}</Avatar>
        </IconButton>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Navbar;