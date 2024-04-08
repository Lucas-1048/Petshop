import { Router } from "express";
import { petshopGetter } from "../controllers/petshopResponse";

export const router = Router();

router.post('/send-data/', petshopGetter);