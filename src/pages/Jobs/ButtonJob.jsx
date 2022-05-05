import {  Button, Grid, Box } from "@mui/material";


export default function ButtonJob({ handleNext}) {
  return (

      <Grid item xs={12}>
        <Box display={"flex"} justifyContent={"center"} p={5}>
         
          <Button
            onClick={handleNext}
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
 
  );
}
