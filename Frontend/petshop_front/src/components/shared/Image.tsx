import { Image as ChakraImage } from "@chakra-ui/react";

interface ImageProps {
  boxSize: string;
  src: string;
}

export function Image({ boxSize, src }: ImageProps) {
  return <ChakraImage boxSize={boxSize} src={src} />;
}
