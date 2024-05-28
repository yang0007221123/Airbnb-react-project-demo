import {styled} from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  .logo-area {
    color: ${props => props.theme.color.firstColor};
  }

`