import logo from "../../assets/logo.jpg";
import { Image } from "@chakra-ui/react";

export function Header() {
    return (
        <div className="header">
            <Image boxSize="60px" src={logo} />
            <h1>
                Petshop ®<br /> Searcher
            </h1>
        </div>
    );
}
