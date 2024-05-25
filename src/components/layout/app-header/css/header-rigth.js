import {styled} from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .language-box {
    width: 46px;
    height: 46px;
    border-radius: 23px;
    cursor: pointer;
    margin-right: 5px;

    &:hover {
      background-color: #f7f7f7;
    }
  }


  .user-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 86px;
    height: 48px;
    border-radius: 24px;
    border: 1px solid #dddddd;
    cursor: pointer;

    svg {
      margin-right: 12px;
    }

    ${props => props.theme.mixins.boxShadowHover}
  }
`