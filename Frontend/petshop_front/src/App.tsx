import "./App.css";
import { PrimaryInput } from "./components/PrimaryInput.tsx";
import { Button, Image } from "@chakra-ui/react";
import logo from "./assets/logo.jpg";
import { useDataMutation } from "./hooks/useDataMutation.ts";
import { useState } from "react";

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
    <div className="options">
      <h2>Opções de petshops</h2>
      <ul>
        <li>
          Meu Canino Feliz: Em dias de semana o banho para cães pequenos custa
          <br /> R$20,00 e o banho em cães grandes custa R$40,00. Durante os
          finais de <br /> semana o preço dos banhos é aumentado em 20%.
        </li>
        <li>
          Vai Rex: O preço do banho para dias úteis em cães pequenos é R$15,00 e
          <br /> em cães grandes é R$50,00. Durante os finais de semana o preço
          para cães <br /> pequenos é R$ 20,00 e para os grandes é R$ 55,00
        </li>
        <li>
          ChowChawgas: O preço do banho é o mesmo em todos os dias dasemana.
          <br /> Para cães pequenos custa R$30 e para cães grandes R$45,00.
        </li>
      </ul>
    </div>
  );
}

function App() {
  const { mutate } = useDataMutation();

  const [date, setDate] = useState("");
  const [smallPets, setSmallPets] = useState(0);
  const [bigPets, setBigPets] = useState(0);

  const handleChangeSmall = (_valueAsString: string, valueAsNumber: number) => {
    setSmallPets(valueAsNumber);
  };

  const handleChangeBig = (_valueAsString: string, valueAsNumber: number) => {
    setBigPets(valueAsNumber);
  };

  const submit = () => {
    mutate({
      date,
      smallPets,
      bigPets,
    });
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
        </form>
      </div>
    </div>
  );
}

export default App;
