// import { Box, Select } from "@chakra-ui/react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Customer from "./Customer";
import History from "./History";
import Pricebook from "./Pricebook";
import { useState } from "react";
import ReviewPage from "./ReviewPage";

function Jobs({ user, handleChange, orderData, setOrderData }) {
  const [step, setStep] = useState(0);
  let navigate = useNavigate();
  console.log(step);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        `https://agile-ocean-17104.herokuapp.com/api/jobs/${user._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(orderData),
        }
      );
    } catch (error) {
      console.log("error", error.message);
    }
    navigate(`/`);
  };
  const handleNext = () => {
    setStep((currStep) => currStep + 1);
  };

  // const handlePrev = () => {
  //   setStep((currStep) => currStep - 1);
  // };

  const OrderDisplay = () => {
    if (step === 1) {
      return (
        <>
          <History
            setStep={setStep}
            orderData={orderData}
            setOrderData={setOrderData}
          />
        </>
      );
    }
    if (step === 2) {
      return (
        <>
          <Customer
            handleNext={handleNext}
            orderData={orderData}
            handleChange={handleChange}
          />
        </>
      );
    }
    if (step === 3) {
      return (
        <>
          {orderData && (
            <ReviewPage handleSubmit={handleSubmit} orderData={orderData} />
          )}
        </>
      );
    } else {
      return <Pricebook handleNext={handleNext} handleChange={handleChange} />;
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <div className="content-display">{OrderDisplay()}</div>
        </Grid>
      </Grid>
    </>
  );
}

export default Jobs;
