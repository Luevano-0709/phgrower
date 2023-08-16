import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)


export const PieC = () => {

  const [chart, setChart] = useState([]);

  var baseUrl = 'http://localhost:5000/api/ph/5';

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
    fetch_ph()
    
  }) */

  const promedio = chart.map(x => x.promedio)

  var dataPie = {
    labels: ['Alcalino', 'Neutro', 'Ácido'],
    datasets: [{
      label: 'Nivel promedio del ph',
      data: promedio,
      backgroundColor: ['blue', 'green', 'red'],
      tension: 0.4
    }]
  }
  return (
    <Pie data={dataPie}></Pie>

  )

}