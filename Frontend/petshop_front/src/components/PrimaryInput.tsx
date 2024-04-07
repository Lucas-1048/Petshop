import { Input } from "@chakra-ui/react";
import "./PrimaryInput.css";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

interface PrimaryInputProps {
  labels: { label: string; type: "date" | "number" }[];
}

export const PrimaryInput: React.FC<PrimaryInputProps> = ({ labels }) => {
  return (
    <div className="input-container">
      {labels.map(({ label, type }, index) => (
        <div key={index}>
          <label className="label">{label}</label>
          {type === "date" ? (
            <Input type="date" color="#575757" />
          ) : type === "number" ? (
            <NumberInput defaultValue={0} min={0} max={100} color="#575757">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          ) : null}
        </div>
      ))}
    </div>
  );
};
