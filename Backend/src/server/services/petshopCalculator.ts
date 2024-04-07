import { IPetshop } from "../data/petshopInfo";

const getDayOfWeek = (date: string) => {
    const [day, month, year] = date.split("/");

    const dateFormat = new Date(Number(year), Number(month)-1, Number(day));

    if (isNaN(dateFormat.getTime())) {
        throw new Error('Data inválida');
    }

    return dateFormat.getDay();
}

const getMinPrice = (meuCaninoFeliz: number, vaiRex: number, chowChawgas: number) => {
    const lowestPrice = Math.min(meuCaninoFeliz, vaiRex, chowChawgas);

    let petshopName = "";
    if (lowestPrice === meuCaninoFeliz) {
        petshopName = "Meu Canino Feliz";
    } else if (lowestPrice === vaiRex) {
        petshopName = "Vai Rex";
    } else {
        petshopName = "ChowChawgas";
    }

    return { petshopName, lowestPrice };
}

const calculatePrices = (petshop: IPetshop, dayOfWeek: number, smallPets: number, bigPets: number) => {
    let price = 0;
    if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Weekdays
        price += petshop.weekdays.smallDogPrice * smallPets;
        price += petshop.weekdays.bigDogPrice * bigPets;
    } else { // Weekends
        price += petshop.weekends.smallDogPrice * smallPets;
        price += petshop.weekends.bigDogPrice * bigPets;
    }
    return price;
}

export { getDayOfWeek, getMinPrice, calculatePrices };
