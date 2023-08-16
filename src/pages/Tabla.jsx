import React from 'react'


export const Tabla = () => {
  return (
    <>
    <div className='cont2'>
    <h2 style={{padding:"10px"}}>Nivel Recomendado</h2>
      <table className='tabla' >
        <thead >
            <th style={{borderRadius:'20px 0px 0px 0px '}}>Planta</th>
            <th style={{borderRadius:'0px 20px 0px 0px '}}>Nivel de ph</th>
          </thead>
          <tr>
            <td >Algodon</td>
            <td>6.5 - 7</td>
          </tr>
          <tr>
            <td>Maiz</td>
            <td>5.5 - 7.8</td>
          </tr>
          <tr>
            <td>Frijoless</td>
            <td>5.7 - 6.2</td>
          </tr>
          <tr>
            <td>Col</td>
            <td>5.2 - 6.0</td>
          </tr>
          <tr>
            <td>Zanahoria</td>
            <td>4.9 - 5.2</td>
          </tr>
          <tr>
            <td>Cebollines</td>
            <td>5.2 - 6.1</td>
          </tr>
          <tr>
            <td>Pepino</td>
            <td>5.1 - 5.7</td>
          </tr>
          <tr>
            <td>Berenjenass</td>
            <td>4.5 - 5.3</td>
          </tr>
          <tr>
            <td>Apio</td>
            <td>5.7 - 6.0</td>
          </tr>
          <tr>
            <td>Remolacha</td>
            <td>4.9 - 5.6</td>
          </tr>
        
      </table>
    </div>
    </>
  )
}