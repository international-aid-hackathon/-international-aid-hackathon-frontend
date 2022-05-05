// import { Box, Select } from "@chakra-ui/react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import OrderField from "./OrderField";
import { useNavigate } from "react-router-dom";

function Jobs({ user, handleChange, orderData }) {
    console.log(user._id)
    console.log(orderData)

    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await fetch(`https://agile-ocean-17104.herokuapp.com/api/jobs/${user._id}`, {
            method: "POST",
            headers: {
              "Content-Type": "Application/json",
            },
            body: JSON.stringify(orderData),
          });
        } catch (error) {
          console.log("error", error.message);
        }
        navigate(`/`);
      };
    
  return (
    <>
      <Grid container>
     
      <Grid item xs={5}  mb={2}>
        <input
          className="formInput"
          value={orderData["customer.name"]}
          placeholder='place'
          id='html'
          type="text"
          onChange={handleChange('customer.name')}
        />
      </Grid>

        <Grid item xs={12}>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={24} mb={-2}>
              New Order
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <OrderField
            htmlFor="sales"
            value1="1"
            value2="2"
            value3="3"
            label1="1"
            label2="2"
            label3="3"
            inputLabel="Enter a sale"
            handleChange={handleChange}
            handleChangeInput="saleType"
          />
        </Grid>
        <Grid item xs={12}>
          <OrderField
            htmlFor="priceBook"
            value1="2"
            value2="6"
            label1="2"
            label2="6"
            inputLabel="Price Book"
            handleChange={handleChange}
            handleChangeInput="priceBook"
          />
        </Grid>
        <Grid item xs={12}>
          <OrderField
            htmlFor="product"
            value1="Filter"
            value2="Stove"
            value3="Entrepreneur Filter"
            label1="Filter"
            label2="Stove"
            label3="Entrepreneur Filter"
            inputLabel="Filter"
            handleChange={handleChange}
            handleChangeInput="product"
          />
        </Grid>
        <Grid item xs={12}>
          <Box display={"flex"} justifyContent={"center"} p={5}>
            <Button
            onClick={handleSubmit}
              style={{
                fontSize: "1rem",
                backgroundColor: " #005572",
                maxHeight: "100px",
                minWidth: "300px",
                minHeight: "30px",
                padding: "0.5rem",
              }}
              variant="contained"
            >
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Jobs;
