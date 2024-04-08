import { useState } from "react";
import "./App.css";
import { Header } from "./components/common/Header";
import { Text } from "./components/common/Text";
import { Options } from "./components/common/Options";
import { PrimaryInput } from "./components/common/PrimaryInput";
import { Button } from "./components/shared/Button";
import { sendData } from "./services/api";

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
      const responseData = await sendData(date, smallPets, bigPets);
      setResponseMessage(`Petshop: ${responseData.petshopName}\nValor total: R$${responseData.lowestPrice},00`);
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
              <p>
                {responseMessage.split("\n")[0]}
                <br />
                {responseMessage.split("\n")[1]}
              </p>
              <br />
              <Button onClick={handleBack}>Voltar</Button>
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
              <Button onClick={submit}>Calcular</Button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
