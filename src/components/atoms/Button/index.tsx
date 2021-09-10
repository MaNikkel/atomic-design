import React from "react";
import { Container } from './styles'

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'light';
    type?: 'submit' | 'button' | 'reset';
}


const Button: React.FC<ButtonProps> = ({ children, type = 'button', ...props }) => {
    return (
        <Container
            {...props}
            type={type}
        >
            {children}
        </Container>
    )
}

export {Button};
export default Button