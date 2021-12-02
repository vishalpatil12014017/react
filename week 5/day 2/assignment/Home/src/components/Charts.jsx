import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Piachart from "./Piachart";
import { useState, useEffect } from 'react';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
  Tooltip
} from "@devexpress/dx-react-chart-material-ui";

import { EventTracker } from "@devexpress/dx-react-chart";
function Charts() {
  const [data, setData] = useState([])
  useEffect(() => {
    handleadd()
  }, [])
  const handleadd = async () => {
    await axios.get("http://localhost:3001/Details")
      .then(function (response) {
        setData(response.data)

      })
  }
  var pending = 0
  var shipped = 0
  var notstarted = 0
  data.map((e) => {
    if (e.status === "pending") {
      pending++
    }
    if (e.status === "shipped") {
      shipped++
    }
    if (e.status === "not started") {
      notstarted++
    }
  })
 
  return (
    <Box sx={{ flexGrow: 1, p: 4 }} >
      <Grid container spacing={2} >
        <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
          <Paper>
            <Chart data={data}>
              <ArgumentAxis />
              <ValueAxis />
              <BarSeries valueField="status" argumentField="created_at" />
              <EventTracker />
              <Tooltip />
            </Chart>
          </Paper>

        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
          <Piachart pending={pending} shipped={shipped} notstarted={notstarted} />
        </Grid>

      </Grid>
    </Box>
  );
}

export default Charts