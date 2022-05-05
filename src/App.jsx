import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Select, { SelectChangeEvent } from "@mui/material/Select";
//components
import NavBar from "./components/NavBar/NavBar";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import Profiles from "./pages/Profiles/Profiles";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import JobOrder from "./pages/Jobs/JobOrder";
import Dashboard from "./pages/Dashboard/Dashboard";
import SalesHistory from "./pages/SalesHistory/SalesHistory";
//end of components

// services
import * as authService from "./services/authService";
// end of services

const App = () => {
  //states
  const [user, setUser] = useState(authService.getUser());
  const [jobData, setJobData] = useState({});
  const [orderData, setOrderData] = useState({
    saleType: "",
    date: "",
    priceBook: "",
    loan: "",
    payFull: "",
    product: "",
    quantity: "",
    "customer.name": "",
    "customer.address": "",
    "customer.phoneNumber": "",
    "customer.deposit": "",
    "customer.peopleInHouse": "",
    history: ""
  });

  //end of states

  //useEffect

  //end of useEffect
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };

  const MakeAPICall = async () => {
    const res = await fetch(
      `https://agile-ocean-17104.herokuapp.com/api/jobs/${user.profile}`
    );
    const data = await res.json();
    setJobData(data);
  };

  useEffect(() => {
    MakeAPICall();
  }, []);

  const handleChange = (name) => (e) => {
    e.preventDefault();
    setOrderData({ ...orderData, [name]: e.target.value });
  };

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} jobData={jobData} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/history"
          element={<SalesHistory jobData={jobData} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/job"
          element={
            <JobOrder
              setOrderData={setOrderData}
              user={user}
              orderData={orderData}
              handleChange={handleChange}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
