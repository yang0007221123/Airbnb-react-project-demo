import {styled} from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  
  .logo-area {
    color: ${props => props.theme.color.firstColor};
  }

`