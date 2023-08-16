import React, { useState, useEffect } from 'react';

export const Reporte = () => {
  const [chart, setChart] = useState([]);

  var baseUrl = 'http://localhost:5000/api/ph/2';

  /*   useEffect(() => {
      const fetch_ph = async () => {
        try {
          const response = await fetch(baseUrl);
          const json = await response.json();
          console.log(json);
          setChart(json);
        } catch (error) {
          console.log(error);
        }
      };
      fetch_ph();
    }, [baseUrl]); */

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

  return (
    <div className='contreport'>
      <h2>Historial de los ultimos 5 reportes</h2>
      <br />
      <table className='tabla'>
        <thead>
          <tr>
            <th style={{ borderRadius: '20px 0px 0px 0px ' }}>Nivel de ph</th>
            <th>Estado</th>
            <th>Fecha</th>
            <th style={{ borderRadius: '0px 20px 0px 0px ' }}>Hora</th>
          </tr>
        </thead>
        <tbody>
          {chart.map((x) => (

            <tr key={x.id}>
              <td>{x.ph}</td>
              <td>
                {x.ph >= 6 && x.ph <= 10 && 'Estado: Neutro'}
                {x.ph <= 5 && 'Estado: Ácido'}
                {x.ph >= 11 && 'Estado: Alcalino'}
              </td>
              <td>{(x.fecha).slice(0, 10)}</td>
              <td>{x.hora}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};