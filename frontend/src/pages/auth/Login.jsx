// src/pages/Auth/Login.jsx
import { useState } from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const role = localStorage.getItem("role");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Validate single field on blur
  const handleBlur = (e) => {
    const { name } = e.target;
    validateField(name);
  };

  const validateField = (field) => {
    let temp = { ...errors };

    switch (field) {
      case "email":
        temp.email = form.email
          ? /\S+@\S+\.\S+/.test(form.email)
            ? ""
            : "Invalid email format"
          : "Email is required";
        break;
      case "password":
        temp.password = form.password
          ? form.password.length >= 6
            ? ""
            : "Password must be at least 6 characters"
          : "Password is required";
        break;
      default:
        break;
    }

    setErrors(temp);
  };

  const validate = () => {
    validateField("email");
    validateField("password");
    return Object.values(errors).every((x) => x === "");
  };

  const handleLogin = async () => {
    if (validate()) {
      try {
        // Example API call to get role based on email
        const response = await fetch(
          `/api/get-role?email=${encodeURIComponent(form.email)}`
        );
        const data = await response.json();
        const userRole = data.role;

        if (!userRole) {
          alert("No role assigned to this user!");
          return;
        }

        localStorage.setItem("role", userRole);
        navigate(`/${userRole}-dashboard`);
      } catch (error) {
        console.error(error);
        alert("Login failed. Please try again.");
      }
    }
  };

  return (
    <Box
      sx={{
        minHeight: "95vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f5f5",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          maxWidth: "2200px",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        {/* Left Side: Login Form */}
        <Box
          sx={{
            flex: 1,
            minWidth: { xs: "100%", md: "400px" },
            p: { xs: 4, md: 6 },
            bgcolor: "#fff",
          }}
        >
          <Typography
            variant="h4"
            sx={{ mb: 4, color: "#333", textAlign: "center", fontWeight: 700 }}
          >
            FleetFlow Login
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label={
                <span>
                  Email <span style={{ color: "red" }}>*</span>
                </span>
              }
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
              variant="outlined"
            />

            <TextField
              label={
                <span>
                  Password <span style={{ color: "red" }}>*</span>
                </span>
              }
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.password}
              helperText={errors.password}
              fullWidth
              variant="outlined"
            />

            {/* Forgot Password */}
            <Box sx={{ textAlign: "right" }}>
              <Link
                component="button"
                onClick={() => navigate("/forgot-password")}
                sx={{ fontSize: "0.875rem", color: "#1976d2" }}
              >
                Forgot Password?
              </Link>
            </Box>

            <Button
              variant="contained"
              onClick={handleLogin}
              fullWidth
              sx={{
                mt: 2,
                py: 1.5,
                bgcolor: "#4dabf5",
                color: "#fff",
                fontWeight: 600,
                "&:hover": { bgcolor: "#3a8edc" },
              }}
            >
              LOGIN
            </Button>

            {role === "manager" || role === "admin" ? (
              <Typography mt={2} textAlign="center">
                Don't have an account?{" "}
                <Link
                  component="button"
                  onClick={() => navigate("/register")}
                  sx={{ color: "#4dabf5" }}
                >
                  Register
                </Link>
              </Typography>
            ) : null}
          </Box>
        </Box>

        {/* Right Side: Info Panel */}
        <Box
          sx={{
            flex: 1,
            minWidth: { xs: "100%", md: "740px" },
            bgcolor: "#000",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: { xs: 4, md: 6 },
          }}
        >
          <Typography
            variant="h5"
            sx={{ mb: 2, fontWeight: 700, textAlign: "center" }}
          >
            Welcome to FleetFlow
          </Typography>
          <Typography sx={{ textAlign: "center", lineHeight: 1.6 }}>
            Manage your fleet efficiently with our comprehensive dashboard.
            <br />
            Track vehicles, monitor safety, handle dispatches, and manage
            finances all in one place.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
