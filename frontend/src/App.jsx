// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";

// // Dashboards
// import ManagerDashboard from "./pages/Dashboard/ManagerDashboard";
// import DispatcherDashboard from "./pages/Dashboard/DispatcherDashboard";
// import SafetyDashboard from "./pages/Dashboard/SafetyDashboard";
// import FinanceDashboard from "./pages/Dashboard/FinanceDashboard";

// // Pages
// import VehicleRegistry from "./pages/Vehicles/VehicleRegistry";
// import TripDispatcher from "./pages/Trips/TripDispatcher";
// import CompletedTrips from "./pages/Trips/CompletedTrips";
// import MaintenanceLogs from "./pages/Maintenance/MaintenanceLogs";
// import DriverProfiles from "./pages/Drivers/DriverProfiles";
// import FinancialReports from "./pages/Analytics/FinancialReports";

// import Layout from "./components/Layout";

// // ===== Protected Route =====
// const ProtectedRoute = ({ children, role }) => {
//   const userRole = localStorage.getItem("role");

//   if (!userRole) return <Navigate to="/login" />;

//   if (role && (Array.isArray(role) ? !role.includes(userRole) : userRole !== role)) {
//     return <Navigate to={`/${userRole}-dashboard`} />;
//   }

//   return children;
// };

// // ===== App =====
// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Auth */}
//         <Route path="/login" element={<Login />} />
//         <Route
//           path="/register"
//           element={
//             <ProtectedRoute role={["admin", "manager"]}>
//               <Register />
//             </ProtectedRoute>
//           }
//         />

//         {/* Manager Pages */}
//         <Route
//           path="/manager-dashboard"
//           element={
//             <ProtectedRoute role="manager">
//               <Layout role="manager">
//                 <ManagerDashboard />
//               </Layout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/vehicle-registry"
//           element={
//             <ProtectedRoute role="manager">
//               <Layout role="manager">
//                 <VehicleRegistry />
//               </Layout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/maintenance-logs"
//           element={
//             <ProtectedRoute role="manager">
//               <Layout role="manager">
//                 <MaintenanceLogs />
//               </Layout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/driver-profiles"
//           element={
//             <ProtectedRoute role="manager">
//               <Layout role="manager">
//                 <DriverProfiles />
//               </Layout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/financial-reports"
//           element={
//             <ProtectedRoute role="manager">
//               <Layout role="manager">
//                 <FinancialReports />
//               </Layout>
//             </ProtectedRoute>
//           }
//         />

//         {/* Dispatcher Pages */}
//         <Route
//           path="/dispatcher-dashboard"
//           element={
//             <ProtectedRoute role="dispatcher">
//               <Layout role="dispatcher">
//                 <DispatcherDashboard />
//               </Layout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/trip-dispatcher"
//           element={
//             <ProtectedRoute role="dispatcher">
//               <Layout role="dispatcher">
//                 <TripDispatcher />
//               </Layout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/completed-trips"
//           element={
//             <ProtectedRoute role="dispatcher">
//               <Layout role="dispatcher">
//                 <CompletedTrips />
//               </Layout>
//             </ProtectedRoute>
//           }
//         />

//         {/* Safety Pages */}
//         <Route
//           path="/safety-dashboard"
//           element={
//             <ProtectedRoute role="safety">
//               <Layout role="safety">
//                 <SafetyDashboard />
//               </Layout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/driver-profiles"
//           element={
//             <ProtectedRoute role="safety">
//               <Layout role="safety">
//                 <DriverProfiles />
//               </Layout>
//             </ProtectedRoute>
//           }
//         />

//         {/* Finance Pages */}
//         <Route
//           path="/finance-dashboard"
//           element={
//             <ProtectedRoute role="finance">
//               <Layout role="finance">
//                 <FinanceDashboard />
//               </Layout>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/financial-reports"
//           element={
//             <ProtectedRoute role="finance">
//               <Layout role="finance">
//                 <FinancialReports />
//               </Layout>
//             </ProtectedRoute>
//           }
//         />

//         <Route path="*" element={<Navigate to="/login" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

// Dashboards
import ManagerDashboard from "./pages/Dashboard/ManagerDashboard";
import DispatcherDashboard from "./pages/Dashboard/DispatcherDashboard";
import SafetyDashboard from "./pages/Dashboard/SafetyDashboard";
import FinanceDashboard from "./pages/Dashboard/FinanceDashboard";

// Pages
import VehicleRegistry from "./pages/Vehicles/VehicleRegistry";
import TripDispatcher from "./pages/Trips/TripDispatcher";
import CompletedTrips from "./pages/Trips/CompletedTrips";
import MaintenanceLogs from "./pages/Maintenance/MaintenanceLogs";
import DriverProfiles from "./pages/Drivers/DriverProfiles";
import FinancialReports from "./pages/Analytics/FinancialReports";

import Layout from "./components/Layout";

// TEMP ProtectedRoute for UI testing
const NoRoleRoute = ({ children }) => children;

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Manager Pages */}
        <Route
          path="/manager-dashboard"
          element={
            <NoRoleRoute>
              <Layout role="manager">
                <ManagerDashboard />
              </Layout>
            </NoRoleRoute>
          }
        />
        <Route
          path="/vehicle-registry"
          element={
            <NoRoleRoute>
              <Layout role="manager">
                <VehicleRegistry />
              </Layout>
            </NoRoleRoute>
          }
        />
        <Route
          path="/maintenance-logs"
          element={
            <NoRoleRoute>
              <Layout role="manager">
                <MaintenanceLogs />
              </Layout>
            </NoRoleRoute>
          }
        />
        <Route
          path="/driver-profiles"
          element={
            <NoRoleRoute>
              <Layout role="manager">
                <DriverProfiles />
              </Layout>
            </NoRoleRoute>
          }
        />
        <Route
          path="/financial-reports"
          element={
            <NoRoleRoute>
              <Layout role="manager">
                <FinancialReports />
              </Layout>
            </NoRoleRoute>
          }
        />

        {/* Dispatcher Pages */}
        <Route
          path="/dispatcher-dashboard"
          element={
            <NoRoleRoute>
              <Layout role="dispatcher">
                <DispatcherDashboard />
              </Layout>
            </NoRoleRoute>
          }
        />
        <Route
          path="/trip-dispatcher"
          element={
            <NoRoleRoute>
              <Layout role="dispatcher">
                <TripDispatcher />
              </Layout>
            </NoRoleRoute>
          }
        />
        <Route
          path="/completed-trips"
          element={
            <NoRoleRoute>
              <Layout role="dispatcher">
                <CompletedTrips />
              </Layout>
            </NoRoleRoute>
          }
        />

        {/* Safety Pages */}
        <Route
          path="/safety-dashboard"
          element={
            <NoRoleRoute>
              <Layout role="safety">
                <SafetyDashboard />
              </Layout>
            </NoRoleRoute>
          }
        />
        <Route
          path="/driver-profiles"
          element={
            <NoRoleRoute>
              <Layout role="safety">
                <DriverProfiles />
              </Layout>
            </NoRoleRoute>
          }
        />

        {/* Finance Pages */}
        <Route
          path="/finance-dashboard"
          element={
            <NoRoleRoute>
              <Layout role="finance">
                <FinanceDashboard />
              </Layout>
            </NoRoleRoute>
          }
        />
        <Route
          path="/financial-reports"
          element={
            <NoRoleRoute>
              <Layout role="finance">
                <FinancialReports />
              </Layout>
            </NoRoleRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;