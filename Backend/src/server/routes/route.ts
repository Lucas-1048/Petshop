import { Router } from "express";
import { petshopGetter } from "../controllers/calculator";

export const router = Router();

router.post('/send-data/', petshopGetter);