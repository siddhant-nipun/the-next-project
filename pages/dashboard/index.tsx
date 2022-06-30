import { Box, Grid, Stack, Typography } from "@mui/material"
import { NextPage } from "next"
import React from "react"

const cardData = [1, 2, 3, 4, 5, 6]

const Dashboard: NextPage = () => {
  return (
    <Stack
      sx={{ alignItems: "center", height: "100vh", justifyContent: "center" }}
    >
      <Stack
        sx={{
          width: "70vw",
          height: "70vh",
          border: "1px solid black",
          borderRadius: "16px",
        }}
      >
        <Typography my={2} textAlign="center" variant="h5">
          Admin DashBoard
        </Typography>
        <Grid height={"100%"} container>
          {cardData.map((data, index) => {
            return (
              <Grid item xs={4}>
                <Typography textAlign="center">card</Typography>
              </Grid>
            )
          })}
        </Grid>
      </Stack>
    </Stack>
  )
}

export default Dashboard
