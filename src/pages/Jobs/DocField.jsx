import React from 'react'
import { Typography } from "@mui/material";

export default function DocField({ label, value }) {
  return (
    <> 
    <div> 
    <Typography color={"#005572"} fontWeight={"bold"}>
      {label}
    </Typography>
    <Typography p={2}>{value}</Typography>
  </div>
  </>
  )
}
