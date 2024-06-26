import { Request, Response } from 'express';
import { petshops } from '../data/petshopInfo';
import { calculatePrices, getMinPrice } from '../services/petshopCalculator';

interface IData {
    date: string;
    smallPets: number;
    bigPets: number;
}

const getDate = (date: string) => {
    const dateFormat = new Date(date);
    if (isNaN(dateFormat.getDay())) {
        throw new Error('Data inválida');
    }
    dateFormat.setDate(dateFormat.getDate()+1);
    return dateFormat.getDay();
}

export const petshopGetter = async (req: Request<{}, {}, IData>, res: Response) => {
    const { date, smallPets, bigPets } = req.body;

    try {
        const dayOfWeek = getDate(date);

        const meuCaninoFeliz = calculatePrices(petshops[0], dayOfWeek, smallPets, bigPets);
        const vaiRex = calculatePrices(petshops[1], dayOfWeek, smallPets, bigPets);
        const chowChawgas = calculatePrices(petshops[2], dayOfWeek, smallPets, bigPets);

        const { petshopName, lowestPrice } = getMinPrice(meuCaninoFeliz, vaiRex, chowChawgas);

        res.status(200).json({ petshopName, lowestPrice });

    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}