import { TypographyProps as Base} from "./models";
import { Container } from './styles'
import React from "react";

interface TypographyProps extends Base {
    children: React.ReactNode;
    //todo: refactor this
    as?: 'h1' | 'h2' | 'span';
}

export const Typography = ({ as, children,...props }: TypographyProps) => {

    return (
        <Container as={as} { ...props }>
            {children}
        </Container>
    )
}