import express from "express";
import morgan from "morgan";
import cors from "cors";
import OneSignal from 'react-onesignal';
import { useEffect } from "react";

import ph_Routes_Routes from "./routes/ph.routes.js";
const app=express();

// config
app.set("port",5000)

//middlewares
app.use(cors())
app.use(morgan("dev"));
app.use(express.json())

//rutas
app.use("/api/ph",ph_Routes_Routes)

function app() {
    useEffect(() => {
		OneSignal.init({
			appId: "c6d9496d-9544-4779-98a2-00ca60571ed3"
		});
	}, []);

    const onHandTag = (tag) => {
        console.log('Tagging');
        OneSignal.sendTag('tech', tag).then(() => {
            console.log('Tagged');
        });
    }
}

export default app;
