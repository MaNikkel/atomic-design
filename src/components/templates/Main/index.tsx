import {Header} from "../../organisms/Header";
import React from "react";
import {Container} from "./styles";

export const MainLayout: React.FC = ({ children }) => {

    return (
        <Container>
            <Header />
            {children}
        </Container>
    )
}