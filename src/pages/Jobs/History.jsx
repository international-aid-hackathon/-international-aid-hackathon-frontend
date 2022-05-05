import { Box, Grid, Container, FormControlLabel, Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function History({ orderData, setOrderData }) {
  const [selected, setSelected] = useState([]);
  let navigate = useNavigate();

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
    navigate(`/job`);
  };

  return (
    <div>
      <Box
        p={5}
        justifyContent={"center"}
        flexDirection={"column"}
        display={"flex"}
      >
        <Grid item xs={12} >
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
        <Grid item xs={12} ml={-5}>
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
        <Grid item xs={12} >
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
        <Grid margin={"0 auto"}>
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
    </div>
  );
}
