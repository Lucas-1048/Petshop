import axios from "axios";

const api_url = "http://localhost:8080/send-data"

export async function sendData(date: string, smallPets: number, bigPets: number) {
    if (smallPets === 0 && bigPets === 0) {
        throw new Error("Nenhum pet foi selecionado.");
    }
    const formattedDate = new Date(date).toISOString();
    const data = { date: formattedDate, smallPets, bigPets };
    const response = await axios.post(api_url, data);
    return response.data;
}
