import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

//components
import NavBar from "./components/NavBar/NavBar";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import Profiles from "./pages/Profiles/Profiles";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Dashboard  from "./pages/Dashboard/Dashboard";
import Jobs from "./pages/Jobs/Jobs";
//end of components

// services
import * as authService from "./services/authService";
import * as jobsService from "./services/jobsServices"
// end of services

const App = () => {
  //states
  const [user, setUser] = useState(authService.getUser());
  const [jobData, setJobData] = useState({
    date: "",
    priceBook: "",
    loan: "",
    payFull: "",
    product: "",
    quantity: "",
    "customer.name": "",
    " customer.address": "",
    " customer.phoneNumber": "",
    "customer.deposit": "",
    " customer.peopleInHouse": "",
  });

  //end of states
  const [step, setStep] = useState(0)
  const [ jobs, setjobs] = useState([])
  //useEffect
  useEffect(()=>{
    jobsService.getAllJobs()
    .then(job => setjobs(job))
  },[])
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

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user}/>} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
          <Route
          path="/jobs"
          element={<Jobs />}
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
      </Routes>
    </>
  );
};

export default App;
