import { Box, Grid, Typography, FormControlLabel, Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function History({ setStep, orderData, setOrderData }) {
  const [selected, setSelected] = useState([]);

  const addToSet = (input) => (e) => {
    const { checked } = e.target;
    if (checked) {
      selected.push(input);
    } else {
      selected.splice(selected.length - 1, 1);
    }
  };

  const handleClick = () => {
    setOrderData({ ...orderData, history: selected });
    setStep((currStep) => currStep + 1);
  };

  return (
    <Grid container justifyContent="center">
      <Box
        p={4}
        justifyContent={"center"}
        flexDirection={"column"}
        display={"flex"}
      >
        <Grid item xs={12}>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontWeight={"bold"} fontSize={24} mb={2}>
              Reason for purchasing?
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            label="Because I don't like the taste of chlorine"
            value="Because I don't like the taste of chlorine"
            control={
              <Checkbox
                onChange={addToSet(
                  "Because I don't like the taste of chlorine"
                )}
              />
            }
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            label="Because my children are getting sick"
            value="Because my children are getting sick"
            control={
              <Checkbox
                onChange={addToSet("Because my children are getting sick")}
              />
            }
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            label="Because the product is cheaper than I'm used to"
            value="Because the product is cheaper than I'm used to"
            control={
              <Checkbox
                onChange={addToSet(
                  "Because the product is cheaper than I'm used to"
                )}
              />
            }
          />
        </Grid>
        <Grid margin={"0 auto"} mt={3}>
          <Button
            onClick={handleClick}
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
        </Grid>
      </Box>
    </Grid>
  );
}
