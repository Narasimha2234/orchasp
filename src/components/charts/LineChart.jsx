// LineChart.js

import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const LineChart = ({ data }) => {
  const ref=useRef()
  const inView=useInView(ref)
  const animationControl=useAnimation()
  useEffect(()=>{
    if(inView){
      animationControl.start("visible")
    }else{
      animationControl.start("initial")
    }
  })
    const slideupVariant={
      initial:{
        opacity:0,
        y:100
      },
      visible:{
        opacity:1,
        y:0,
        transition:{ 
          duration:2
        }      
      }
    }
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
         
        },
      },
      y: {
        title: {
          display: true,
        
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      },
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
  };

  return (
    <motion.div ref={ref} variants={slideupVariant} animate={animationControl} initial="initial"  style={{ height: '100%', width: '100%' }}>
      <Line data={chartData} options={options} />
    </motion.div>
  );
};

export default LineChart;
