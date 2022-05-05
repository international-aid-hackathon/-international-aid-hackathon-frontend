import {  Button, Grid, Typography } from "@mui/material";
import ButtonJob from "./ButtonJob";
import OrderField from "./OrderField";

export default function Pricebook({ handleNext, handleChange }) {
  return (
      <>
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
  <Grid>
      <ButtonJob handleNext={handleNext}/>
  </Grid>
      </>
   
  )
}
