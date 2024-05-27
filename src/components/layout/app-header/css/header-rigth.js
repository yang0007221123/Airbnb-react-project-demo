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
    position: relative;
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

export const UserPopoverWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 55px;
  right: 0px;
  width: 240px;
  height: 160px;
  padding: 10px 0;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  .item {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;

    &:hover {
      background-color: #f7f7f7;
    }
  }

  .item-help {
    border-top: 1px solid #eeeeee;
  }
`