import { IPetshop } from "../data/petshopInfo";

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

const getMinPrice = (meuCaninoFeliz: number, vaiRex: number, chowChawgas: number) => {
    const lowestPrice = Math.min(chowChawgas, vaiRex, meuCaninoFeliz);

    let petshopName = "";

    // A ordem das comparações garante que a distância do canil seja a menor
    if (lowestPrice === chowChawgas) {
        petshopName = "ChowChawgas";
    } else if (lowestPrice === vaiRex) {
        petshopName = "Vai Rex";
    } else {
        petshopName = "Meu Canino Feliz";
    }

    return { petshopName, lowestPrice };
}

export { calculatePrices, getMinPrice };
