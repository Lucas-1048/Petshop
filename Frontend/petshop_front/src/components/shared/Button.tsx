import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <ChakraButton colorScheme="teal" boxShadow="md" onClick={onClick}>
      {children}
    </ChakraButton>
  );
}
