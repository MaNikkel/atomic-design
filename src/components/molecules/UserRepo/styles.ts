import styled from "styled-components"

export const Container = styled.a`
  display: block;
  cursor: pointer;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #cecece;
  border-radius: 5px;
  transition: all 0.3s;
  text-decoration: none;
  color: #000;
  
  &:hover {
    background: #000;
    color: #fff;
  }
`