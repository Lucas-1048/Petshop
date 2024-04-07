import "./App.css";
import { PrimaryInput } from "./components/PrimaryInput.tsx";
import { Button, Image, Spacer } from "@chakra-ui/react";
import logo from "./images/logo.jpg";
import banho from "./images/banho.jpg";

function Header() {
  return (
    <div className="header">
      <Image boxSize="60px" src={logo} />
      <h1>
        Petshop ®<br /> Searcher{" "}
      </h1>
    </div>
  );
}

function Text() {
  return (
    <div className="text">
      <p>
        Encontre o melhor petshop <br /> próximo de você{" "}
      </p>
      <Spacer width="40" maxWidth="40" />
      <Image borderRadius="12" boxSize="200px" src={banho} />
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
          Vai Rex: O preço do banho para dias úteis em cães pequenos é R$15,00 e{" "}
          <br /> em cães grandes é R$50,00. Durante os finais de semana o preço
          para cães <br />
          pequenos é R$ 20,00 e para os grandes é R$ 55,00
        </li>
        <li>
          ChowChawgas: O preço do banho é o mesmo em todos os dias dasemana.
          <br /> Para cães pequenos custa R$30 e para cães grandes R$45,00.
        </li>
      </ul>
    </div>
  );
}

function Form({
  labels,
}: {
  labels: { label: string; type: "number" | "date" }[];
}) {
  return (
    <form>
      <PrimaryInput labels={labels} />
      <Button colorScheme="teal" boxShadow="md">Calcular</Button>
    </form>
  );
}

function App() {
  const labels = [
    { label: "Quando irá ao petshop?", type: "date" as const },
    { label: "Quantos pets pequenos irá levar?", type: "number" as const },
    { label: "Quantos pets grandes irá levar?", type: "number" as const },
  ];

  return (
    <div className="container">
      <Header />
      <Text />
      <div className="body">
        <Options />
        <Spacer width="12" maxWidth="12" />
        <Form labels={labels} />
      </div>
    </div>
  );
}

export default App;
