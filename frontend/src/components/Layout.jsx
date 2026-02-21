// Layout.jsx (wrap all protected pages)
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children, role }) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      {/* Sidebar */}
      <Sidebar role={role} />

      {/* Main content */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Navbar role={role} />
        <Box sx={{ flex: 1, p: 3, bgcolor: "#f5f5f5" }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;