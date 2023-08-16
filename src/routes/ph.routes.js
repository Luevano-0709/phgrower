import { Router} from "express";
import { methods as get_ph} from "../controllers/get_ph.controller.js";

const router=Router();
router.get("/1", get_ph.top1);
router.get("/2", get_ph.top5);
router.get("/3", get_ph.prom_diario);
router.get("/4", get_ph.prom_semanal);
router.get("/5", get_ph.percent_mensual);


export default router;