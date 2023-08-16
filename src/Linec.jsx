import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)


export const LineC = () => {

  const [chart, setChart] = useState([]);

  var baseUrl = 'http://localhost:5000/api/ph/3';

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

  const dataLine = {
    labels: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
    datasets: [{
      label: 'Nivel promedio del ph',
      data: promedio,
      borderColor: 'green',
      backgroundColor: 'green',
      tension: 0.4
    }]
  }
  return (
    <Line style={{ display: 'grid', alignItems: 'center', justifyContent: 'center' }} data={dataLine}></Line>

  )

}