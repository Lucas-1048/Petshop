import { Input } from "@chakra-ui/react";
import "./PrimaryInput.css";
import { NumberInput, NumberInputField, NumberInputStepper,
  NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

interface PrimaryInputProps {
  labelDate: string;
  labelSmallPets: string;
  labelBigPets: string;
  onChangeDate: ChangeEventHandler<HTMLInputElement>;
  onChangeSmall: (valueAsString: string, valueAsNumber: number) => void;
  onChangeBig: (valueAsString: string, valueAsNumber: number) => void;
}

export function PrimaryInput({ labelDate, labelSmallPets, labelBigPets,
  onChangeDate, onChangeSmall, onChangeBig, }: PrimaryInputProps) {
  return (
    <div className="input-container">
      <label className="labelDate">{labelDate}</label>
      <Input type="date" color="#575757" onChange={onChangeDate} />

      <label className="labelSmallPets">{labelSmallPets}</label>
      <NumberInput
        defaultValue={0} min={0} max={100} color="#575757" onChange={onChangeSmall}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      
      <label className="labelBigPets">{labelBigPets}</label>
      <NumberInput 
        defaultValue={0} min={0} max={100} color="#575757" onChange={onChangeBig}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </div>
  );
}
