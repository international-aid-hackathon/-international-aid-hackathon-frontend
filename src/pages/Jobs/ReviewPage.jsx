import React from "react";
import DocField from "./DocField";
import { Box, Grid, Container, Button, Typography} from "@mui/material";

export default function ReviewPage({ value, orderData, handleSubmit }) {

  let reportJSX = "";
  if (orderData) {
    reportJSX = (
      <div>
        <DocField label="Price Book" value={orderData.priceBook} />
        <DocField label="Filter" value={orderData.product} />
        <Box mb={-4}>
          <DocField label="Reason for purchasing" />
        </Box>

        <DocField label="" value={orderData.history[0]} />
        <DocField label="" value={orderData.history[1]} />
        <DocField label="" value={orderData.history[2]} />
        <Grid item xs={12}>
          <Box display={"flex"} justifyContent={"start"}>
            <Typography fontWeight={"bold"} fontSize={24} mt={1} mb={3}>
              Customer Detail
            </Typography>
          </Box>
        </Grid>

        <DocField label="Name" value={orderData["customer.name"]} />
        <DocField label="Address" value={orderData["customer.address"]} />
        <DocField
          label="Phone Number"
          value={orderData["customer.phoneNumber"]}
        />
        <DocField label="Deposit" value={orderData["customer.deposit"]} />
        <DocField
          label="Number of People in House"
          value={orderData["customer.peopleInHouse"]}
        />
        <DocField label="Date" value={orderData.date} />
      </div>
    );
  }

  return (
    <>
      <Container>
        <Box p={3}>
          <Grid item xs={12}>
            <Box display={"flex"} justifyContent={"start"}>
              <Typography fontWeight={"bold"} fontSize={24} mb={3}>
                Purchase Detail
              </Typography>
            </Box>
          </Grid>

          {reportJSX}
          <Grid item xs={12}>
            <Box display={"flex"} justifyContent={"start"} pt={2}>
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
                Submit
              </Button>
            </Box>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
