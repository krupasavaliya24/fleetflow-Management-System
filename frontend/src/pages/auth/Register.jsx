// src/pages/Auth/Register.jsx
import { useState } from "react";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const roles = [
  { value: "manager", label: "Manager" },
  { value: "dispatcher", label: "Dispatcher" },
  { value: "safety", label: "Safety Officer" },
  { value: "finance", label: "Financial Analyst" },
];

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
    role: ""
  });

  const [errors, setErrors] = useState({});

  // Update form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate individual field (on blur)
  const handleBlur = (e) => {
    const { name } = e.target;
    validateField(name);
  };

  const validateField = (field) => {
    let temp = { ...errors };

    switch (field) {
      case "fullName":
        temp.fullName = formData.fullName ? "" : "Full Name is required.";
        break;
      case "email":
        temp.email = /\S+@\S+\.\S+/.test(formData.email) ? "" : "Invalid email.";
        break;
      case "phone":
        temp.phone = formData.phone ? "" : "Phone number is required.";
        break;
      case "address":
        temp.address = formData.address ? "" : "Address is required.";
        break;
      case "password":
        temp.password = formData.password.length >= 6 ? "" : "Password must be at least 6 characters.";
        break;
      case "confirmPassword":
        temp.confirmPassword =
          formData.password === formData.confirmPassword ? "" : "Passwords do not match.";
        break;
      case "role":
        temp.role = formData.role ? "" : "Select a role.";
        break;
      default:
        break;
    }
    setErrors(temp);
  };

  // Validate all fields before submit
  const validate = () => {
    const fields = ["fullName", "email", "phone", "address", "password", "confirmPassword", "role"];
    fields.forEach((f) => validateField(f));
    return Object.values(errors).every((x) => x === "");
  };

  const handleSubmit = () => {
    if (validate()) {
      fetch(`${import.meta.env.VITE_API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            alert("Registration successful! Please login.");
            navigate("/login");
          } else {
            alert("Registration failed: " + data.message);
          }
        });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "96vh",
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
        {/* Left Side: Registration Form */}
        <Box
          sx={{
            flex: 1,
            minWidth: { xs: "100%", md: "550px" },
            p: { xs: 4, md: 6 },
            bgcolor: "#fff",
          }}
        >
          <Typography variant="h4" sx={{ mb: 4, textAlign: "center", fontWeight: 700, color: "#333" }}>
            FleetFlow Registration
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* Full Name */}
            <TextField
              fullWidth
              label={<span>Full Name <span style={{ color: "red" }}>*</span></span>}
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.fullName}
              helperText={errors.fullName}
            />

            {/* Email */}
            <TextField
              fullWidth
              label={<span>Email <span style={{ color: "red" }}>*</span></span>}
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.email}
              helperText={errors.email}
            />

            {/* Phone */}
            <TextField
              fullWidth
              label={<span>Phone <span style={{ color: "red" }}>*</span></span>}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.phone}
              helperText={errors.phone}
            />

            {/* Address */}
            <TextField
              fullWidth
              label={<span>Address <span style={{ color: "red" }}>*</span></span>}
              name="address"
              value={formData.address}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.address}
              helperText={errors.address}
            />

            {/* Password */}
            <TextField
              fullWidth
              type="password"
              label={<span>Password <span style={{ color: "red" }}>*</span></span>}
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.password}
              helperText={errors.password}
            />

            {/* Confirm Password */}
            <TextField
              fullWidth
              type="password"
              label={<span>Confirm Password <span style={{ color: "red" }}>*</span></span>}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />

            {/* Role */}
            <TextField
              select
              fullWidth
              label={<span>Role <span style={{ color: "red" }}>*</span></span>}
              name="role"
              value={formData.role}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.role}
              helperText={errors.role}
            >
              {roles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            {/* Submit */}
            <Button
              variant="contained"
              fullWidth
              onClick={handleSubmit}
              sx={{
                mt: 2,
                py: 1.5,
                bgcolor: "#4dabf5",
                color: "#fff",
                fontWeight: 600,
                "&:hover": { bgcolor: "#3a8edc" },
              }}
            >
              Register
            </Button>

            <Typography mt={2} textAlign="center" sx={{ color: "#555" }}>
              Already have an account?{" "}
              <span
                style={{ color: "#1976d2", cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </Typography>
          </Box>
        </Box>

        {/* Right Side: Info Panel */}
        <Box
          sx={{
            flex: 1,
            minWidth: { xs: "100%", md: "400px" },
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
            Register your account to start managing your fleet efficiently.
            <br />
            Track vehicles, monitor safety, handle dispatches, and manage finances easily.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;