import axios from "axios";

const api_url = "http://localhost:8080/send-data"

export async function sendData(date: string, smallPets: number, bigPets: number) {
  try {
    const formattedDate = new Date(date).toISOString();
    const data = { date: formattedDate, smallPets, bigPets };
    const response = await axios.post(api_url, data);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer solicitação POST:", error);
    throw error;
  }
}
