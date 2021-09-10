import React, { forwardRef } from "react";
import { Container } from './styles'

interface InputProps {
    variant?: 'primary' | 'light'
    placeholder?: string;
}


const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <Container
            {...props}
            ref={ref}
        />
    )
})

export {Input};
export default Input