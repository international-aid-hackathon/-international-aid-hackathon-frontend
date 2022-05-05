import { Box, Grid, Typography } from "@mui/material";
import ButtonJob from "./ButtonJob";

export default function Customer({ handleNext, orderData, handleChange }) {
  return (
    <>
      <Grid container justifyContent="center">
        <Box
          p={4}
          justifyContent={"center"}
          flexDirection={"column"}
          display={"flex"}
        >
           <Grid item xs={12}>
            <Box display={"flex"} justifyContent={"center"}>
              <Typography fontWeight={'bold'} fontSize={24} mb={2}>
                Customer Information
              </Typography>
            </Box>
          </Grid> 
           <Box
            flexDirection={"column"}
            display={"flex"}
            justifyContent={"center"}
          > 


            <Grid item xs={12} mb={2} justifyContent='center' display={'flex'}>
              <input
                className="formInput"
                value={orderData["customer.name"]}
                placeholder="Name"
                id="html"
                type="text"
                onChange={handleChange("customer.name")}
              />
            </Grid>
            <Grid item xs={12} mb={2} justifyContent='center' display={'flex'}>
              <input
                className="formInput"
                value={orderData["customer.address"]}
                placeholder="Address"
                id="html"
                type="text"
                onChange={handleChange("customer.address")}
              />
            </Grid>

            <Grid item xs={12} mb={2} justifyContent='center' display={'flex'}>
              <input
                className="formInput"
                value={orderData["customer.phoneNumber"]}
                placeholder="Phone Number"
                id="html"
                type="text"
                onChange={handleChange("customer.phoneNumber")}
              />
            </Grid>
            <Grid item xs={12} mb={2} justifyContent='center' display={'flex'}>
              <input
                className="formInput"
                value={orderData["customer.deposit"]}
                placeholder="Deposit"
                id="html"
                type="text"
                onChange={handleChange("customer.deposit")}
              />
            </Grid>
            <Grid item xs={12}  mb={2}justifyContent='center' display={'flex'}>
              <input
                className="formInput"
                value={orderData["customer.peopleInHouse"]}
                placeholder="# of People in House"
                id="html"
                type="text"
                onChange={handleChange("customer.peopleInHouse")}
              />
            </Grid>
            <Grid item xs={12}  justifyContent='center' display={'flex'}>
              <input
                className="formInput"
                value={orderData.date}
                placeholder="Date"
                id="html"
                type="text"
                onChange={handleChange("date")}
              />
            </Grid>
            <ButtonJob handleNext={handleNext} />
           </Box> 
        </Box>
      </Grid>
    </>
  );
}
