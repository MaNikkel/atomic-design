import styled, { css } from "styled-components"
import {TypographyProps} from "./models";


export const Container = styled.p<TypographyProps>`
  ${props => {
    switch(props.variant) {
      case "error":
          return css`
            color: red;
          `
      case 'light': 
          return css`
            opacity: 0.8;
          `
      case 'primary':
      default: {
          return css`
            opacity: 1;
          `
      }    
    }
  }}

  ${props => {
    switch(props.weight) {
      case 'bold':
        return css`
            font-weight: 700;
          `
      case 'regular':
      default: {
        return css`
            font-weight: 400;
          `
      }
    }
  }}

  ${props => {
    switch(props.size) {
      case 'sm':
        return css`
            font-size: 8px;
          `
      case 'lg':
        return css`
            font-size: 16px;
          `
      case 'xl':
        return css`
            font-size: 24px;
          `
      case 'md':
      default: 
        return css`
            font-size: 12px;
          `
      
    }
  }}
`