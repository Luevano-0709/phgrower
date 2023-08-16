import { getConnection } from "../database/database.js"

const top1 = async (req, res) => {
    try {
        const connection = await getConnection()
        const result = await connection.query("SELECT * FROM ph ORDER BY id DESC LIMIT 1; ")
        console.log(result)
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};
const top5 = async (req, res) => {
    try {
        const connection = await getConnection()
        const result = await connection.query("SELECT * FROM ph ORDER BY id DESC LIMIT 5; ")
        console.log(result)
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};
const prom_diario = async (req, res) => {
    try {
        const connection = await getConnection()

        //FILA
        /* 
        const result = await connection.query(
            `SELECT 
            (SELECT avg(ph) FROM sensor_ph WHERE DAYOFWEEK(fecha) in (1) AND fecha >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)) as p_domingo,
            (SELECT avg(ph) FROM sensor_ph WHERE DAYOFWEEK(fecha) in (2) AND fecha >= DATE_SUB(CURDATE(), INTERVAL 6 DAY)) as p_lunes,
            (SELECT avg(ph) FROM sensor_ph WHERE DAYOFWEEK(fecha) in (3) AND fecha >= DATE_SUB(CURDATE(), INTERVAL 5 DAY)) as p_martes,
            (SELECT avg(ph) FROM sensor_ph WHERE DAYOFWEEK(fecha) in (4) AND fecha >= DATE_SUB(CURDATE(), INTERVAL 4 DAY)) as p_miercoles,
            (SELECT avg(ph) FROM sensor_ph WHERE DAYOFWEEK(fecha) in (5) AND fecha >= DATE_SUB(CURDATE(), INTERVAL 3 DAY)) as p_jueves,
            (SELECT avg(ph) FROM sensor_ph WHERE DAYOFWEEK(fecha) in (6) AND fecha >= DATE_SUB(CURDATE(), INTERVAL 2 DAY)) as p_viernes,
            (SELECT avg(ph) FROM sensor_ph WHERE DAYOFWEEK(fecha) in (7) AND fecha >= DATE_SUB(CURDATE(), INTERVAL 1 DAY)) as p_sabado;`
        ) */

        //COLUMNA
        
        const result = await connection.query(
            `SELECT 'domingo' AS dia, avg(ph) AS promedio FROM ph WHERE DAYOFWEEK(fecha) in (1) AND fecha >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) UNION ALL 
            SELECT 'lunes' AS dia, avg(ph) AS promedio FROM ph WHERE DAYOFWEEK(fecha) in (2) AND fecha >= DATE_SUB(CURDATE(), INTERVAL 6 DAY) UNION ALL
            SELECT 'martes' AS dia, avg(ph) AS promedio FROM ph WHERE DAYOFWEEK(fecha) in (3) AND fecha >= DATE_SUB(CURDATE(), INTERVAL 5 DAY) UNION ALL
            SELECT 'miercoles' AS dia, avg(ph) AS promedio FROM ph WHERE DAYOFWEEK(fecha) in (4) AND fecha >= DATE_SUB(CURDATE(), INTERVAL 4 DAY) UNION ALL
            SELECT 'jueves' AS dia, avg(ph) AS promedio FROM ph WHERE DAYOFWEEK(fecha) in (5) AND fecha >= DATE_SUB(CURDATE(), INTERVAL 3 DAY) UNION ALL
            SELECT 'viernes' AS dia, avg(ph) AS promedio FROM ph WHERE DAYOFWEEK(fecha) in (6) AND fecha >= DATE_SUB(CURDATE(), INTERVAL 2 DAY) UNION ALL
            SELECT 'sabado' AS dia, avg(ph) AS promedio FROM ph WHERE DAYOFWEEK(fecha) in (7) AND fecha >= DATE_SUB(CURDATE(), INTERVAL 1 DAY);`
        )
       
        console.log(result)
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};
const prom_semanal = async (req, res) => {
    try {
        const connection = await getConnection()

        //FILA

        /* const result = await connection.query(
            `SELECT 
            (SELECT avg(ph) FROM sensor_ph WHERE fecha >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)) as semana_1,
            (SELECT avg(ph) FROM sensor_ph WHERE fecha >= DATE_SUB(CURDATE(), INTERVAL 14 DAY) and fecha <= DATE_SUB(CURDATE(), INTERVAL 8 DAY)) as semana_2,
            (SELECT avg(ph) FROM sensor_ph WHERE fecha >= DATE_SUB(CURDATE(), INTERVAL 21 DAY) and fecha <= DATE_SUB(CURDATE(), INTERVAL 15 DAY)) as semana_3,
            (SELECT avg(ph) FROM sensor_ph WHERE fecha >= DATE_SUB(CURDATE(), INTERVAL 28 DAY) and fecha <= DATE_SUB(CURDATE(), INTERVAL 22 DAY)) as semana_4; `
        ) */

        //COLUMNA
        
        const result = await connection.query(
            `SELECT 'semana1' AS semana, avg(ph) AS promedio FROM ph WHERE fecha >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) UNION ALL
            SELECT 'semana2' AS semana, avg(ph) AS promedio FROM ph WHERE fecha >= DATE_SUB(CURDATE(), INTERVAL 14 DAY) and fecha <= DATE_SUB(CURDATE(), INTERVAL 8 DAY) UNION ALL
            SELECT 'semana3' AS semana, avg(ph) AS promedio FROM ph WHERE fecha >= DATE_SUB(CURDATE(), INTERVAL 21 DAY) and fecha <= DATE_SUB(CURDATE(), INTERVAL 15 DAY) UNION ALL
            SELECT 'semana4' AS semana, avg(ph) AS promedio FROM ph WHERE fecha >= DATE_SUB(CURDATE(), INTERVAL 28 DAY) and fecha <= DATE_SUB(CURDATE(), INTERVAL 22 DAY);`
        )
       

        console.log(result)
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};
const percent_mensual = async (req, res) => {
    try {
        const connection = await getConnection()

        //FILA
/* 
        const result = await connection.query(
            `SELECT (COUNT(CASE WHEN ph >=11  THEN 1 END)) AS estado_alcalino, 
            (COUNT(CASE WHEN ph >=6 and ph <=10 THEN 1 END)) AS estado_neutro, 
            (COUNT(CASE WHEN ph <=5 THEN 1 END)) AS estado_acido FROM sensor_ph 
            WHERE fecha >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH);`
        ) */

        //COLUMNA
        
        const result = await connection.query(
            `SELECT 'alcalino' AS estado, (COUNT(CASE WHEN ph >=11  THEN 1 END)) AS promedio FROM ph WHERE fecha >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH) UNION ALL
            SELECT 'neutro' AS estado, (COUNT(CASE WHEN ph >=6 and ph <=10 THEN 1 END)) AS promedio FROM ph WHERE fecha >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH) UNION ALL
            SELECT 'acido' AS estado, (COUNT(CASE WHEN ph <=5 THEN 1 END)) AS promedio FROM ph WHERE fecha >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH);`
        )
       

        console.log(result)
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};



export const methods = {
    top1,
    top5,
    prom_diario,
    prom_semanal,
    percent_mensual
};

