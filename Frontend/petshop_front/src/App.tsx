// App.js
import "./App.css";
import { PrimaryInput } from "./components/PrimaryInput.tsx";
import { Button, Image } from "@chakra-ui/react";
import logo from "./assets/logo.jpg";
import { useState } from "react";
import axios from "axios";

function Header() {
  return (
    <div className="header">
      <Image boxSize="60px" src={logo} />
      <h1>
        Petshop ®<br /> Searcher
      </h1>
    </div>
  );
}

function Text() {
  return (
    <div className="text">
      <h1>
        Encontre o melhor petshop <br /> próximo de você{" "}
      </h1>
    </div>
  );
}

function Options() {
  return (
    <div className="options" style={{maxWidth: "570px"}}>
      <h2>Petshops disponíveis</h2>
      <ul>
        <li>
          <strong>Meu Canino Feliz:</strong> Em dias de semana o banho para cães pequenos custa R$20,00 e o banho em cães grandes custa R$40,00. Durante os finais de semana o preço dos banhos é aumentado em 20%.
        </li>
        <li>
          <strong>Vai Rex:</strong> O preço do banho para dias úteis em cães pequenos é R$15,00 e em cães grandes é R$50,00. Durante os finais de semana o preço para cães pequenos é R$ 20,00 e para os grandes é R$ 55,00.
        </li>
        <li>
          <strong>ChowChawgas:</strong> O preço do banho é o mesmo em todos os dias da semana. Para cães pequenos custa R$30 e para cães grandes R$45,00.
        </li>
      </ul>
    </div>
  );
}

function App() {
  const [responseMessage, setResponseMessage] = useState("");
  const [date, setDate] = useState("");
  const [smallPets, setSmallPets] = useState(0);
  const [bigPets, setBigPets] = useState(0);

  const handleChangeSmall = (_valueAsString: string, valueAsNumber: number) => {
    setSmallPets(valueAsNumber);
  };

  const handleChangeBig = (_valueAsString: string, valueAsNumber: number) => {
    setBigPets(valueAsNumber);
  };

  const submit = async () => {
    try {
      const formattedDate = new Date(date).toISOString();
      const data = { date: formattedDate, smallPets, bigPets };
      const response = await axios.post("http://localhost:8080/send-data", data);
      setResponseMessage(`Petshop: ${response.data.petshopName}\nValor total: R$${response.data.lowestPrice},00`);
    } catch (error) {
      console.error("Erro ao fazer solicitação POST:", error);
      throw error;
    }
  };

  const handleBack = () => {
    setDate("");
    setSmallPets(0); 
    setBigPets(0);
    setResponseMessage("");
  };

  return (
    <div className="container">
      <Header />
      <div className="body">
        <div className="text">
          <Text />
          <Options />
        </div>
        <form>
          {responseMessage !== "" ? (
            <div>
              <p>{responseMessage.split('\n')[0]}<br />
                {responseMessage.split('\n')[1]}</p>
              <br />
              <Button colorScheme="teal" boxShadow="md" onClick={handleBack}>
                Voltar
              </Button>
            </div>
          ) : (
            <>
              <PrimaryInput
                labelDate="Quando irá ao petshop?"
                labelSmallPets="Quantos pets pequenos irá levar?"
                labelBigPets="Quantos pets grandes irá levar?"
                onChangeDate={(event) => setDate(event.target.value)}
                onChangeSmall={handleChangeSmall}
                onChangeBig={handleChangeBig}
              />
              <Button colorScheme="teal" boxShadow="md" onClick={submit}>
                Calcular
              </Button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
