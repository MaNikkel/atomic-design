import styled, {keyframes} from "styled-components";

const rotateAnimation = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg)}
`

export const Container = styled.div`
  svg {
    animation-name: ${rotateAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
`