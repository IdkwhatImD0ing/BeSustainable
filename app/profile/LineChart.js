'use client'
import React from 'react'
import {Line} from 'react-chartjs-2'
import {Box, Paper, Typography} from '@mui/material'
import 'chart.js/auto'

const LineChartComponent = ({data}) => {
  // Define the labels for the days of the week
  const daysOfWeek = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Day of the Week',
        },
        // Update the labels here
        labels: daysOfWeek,
      },
      y: {
        title: {
          display: true,
          text: 'Score',
        },
        beginAtZero: true,
      },
    },
  }

  const chartData = {
    // Use the daysOfWeek array for labels
    labels: daysOfWeek,
    datasets: [
      {
        label: 'Dataset',
        data: data,
        fill: false,
        backgroundColor: '#1976d2',
        borderColor: '#1976d2',
        tension: 0.3,
      },
    ],
  }

  return (
    <Paper elevation={3} sx={{padding: 2, borderRadius: 2}}>
      <Typography variant="h6" align="center" gutterBottom>
        Weekly Scores
      </Typography>
      <Box sx={{position: 'relative'}}>
        <Line options={options} data={chartData} />
      </Box>
    </Paper>
  )
}

export default LineChartComponent
