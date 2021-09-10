import styled, {css} from "styled-components"

export const Container = styled.button<{ variant?: 'primary' | 'light' }>`
  cursor: pointer;
  padding: 8px 16px;
  color: #fff;
  background: #000;
  border: 1px solid #000;
  border-radius: 5px;

  &:hover {
    filter: brightness(1.8);
  }
  
  ${props => props.variant === 'light' && css`
    background: #fff;
    color: #000;
    &:hover {
      filter: brightness(0.8);
    }
  `}
  
  
`