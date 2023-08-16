import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale, //x
  LinearScale, //y
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';




/* import axios from 'axios'; */

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

export const BarC = () => {

  const [chart, setChart] = useState([]);

  var baseUrl = 'http://localhost:5000/api/ph/4';

  /*   useEffect(() => {
      const fetch_ph = async () => {
        await fetch(`${baseUrl}`)
        .then((response)=> {
          response.json().then((json)=>{
            console.log(json)
            setChart(json)
          })
        }).catch(error =>{
          console.log(error)
        })
      }
      fetch_ph() 
    }, [baseUrl]) */

    useEffect(() => {
      setTimeout(() => {
        const fetch_ph = async () => {
          await fetch(`${baseUrl}`)
          .then((response)=> {
            response.json().then((json)=>{
              console.log(json)
              setChart(json)
            })
          }).catch(error =>{
            console.log(error)
          })
        }
        fetch_ph() 
      }, 2000)
      }) 

/*   useEffect(() => {
    const fetch_ph = async () => {
      await fetch(`${baseUrl}`)
        .then((response) => {
          response.json().then((json) => {
            console.log(json)
            setChart(json)
          })
        }).catch(error => {
          console.log(error)
        })

        setTimeout(() => {
        }, 10000)
    }
    fetch_ph
    
  }) */

  const promedio = chart.map(x => x.promedio)

  var dataBar = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
    datasets: [{
      label: 'Nivel promedio del ph',
      data: promedio,
      borderColor: 'green',
      backgroundColor: 'green',
      borderWidth: 1
    }]
  }


  return (
    <Bar data={dataBar}></Bar>

  )
}