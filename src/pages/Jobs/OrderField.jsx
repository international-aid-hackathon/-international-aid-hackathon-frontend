// import React, { useState, useEffect } from "react";
// import { Box, Select } from "@chakra-ui/react";
import styled from "styled-components";
import { Box } from "@mui/system";
import NativeSelect from "@mui/material/NativeSelect";
import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .orderField {
    font-size: 1.5rem;
    padding: 0.5em;
    border: 2px solid #005572;
    border-radius: 1rem;
    display: inline-block;
    width: 400px;
    color: white;
    background-color: #005572;
  }
  .select {
    background-color: white;
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.7rem;
    }
  }
`;

function OrderField({
  handleChange,
  handleChangeInput = "",
  htmlFor = "",
  value1 = "Option1",
  value2 = "Option2",
  value3 = "Option3",
  label1 = "",
  label2 = "",
  label3 = "",
  inputLabel,
  defaultVal=""
}) {
  return (
    <>
      <ButtonStyle>
        <Grid container>
          <Grid item xs={12}>
            <Box display={"flex"} justifyContent={"center"}></Box>
          </Grid>
          <Grid item xs={12}>
            <Box display={"flex"} justifyContent={"center"}>
              {" "}
              <div className="orderField">
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel
                      variant="standard"
                      htmlFor={htmlFor}
                    ></InputLabel>
                    {inputLabel}
                    <NativeSelect
                      className="select"
                      onChange={handleChange(`${handleChangeInput}`)}
                      defaultValue={30}
                      inputProps={{
                        id: { htmlFor },
                      }}
                    >
                      <option value={defaultVal}>{defaultVal}</option>
                      <option value={value1}>{label1}</option>
                      <option value={value2}>{label2}</option>
                      <option value={value3}>{label3}</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
              </div>
            </Box>
          </Grid>
        </Grid>
      </ButtonStyle>
    </>
  );
}

export default OrderField;
