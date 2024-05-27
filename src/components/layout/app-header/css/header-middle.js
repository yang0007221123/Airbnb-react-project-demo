import {styled} from "styled-components";

export const MiddleWrapper = styled.div`

  .search-box {
    width: 315px;
    height: 48px;
    padding: 0 8px;
    border-radius: 24px;
    border: 1px solid #dddddd;
    cursor: pointer;

    &:hover {
      ${props => props.theme.mixins.boxShadowHover}
    }

    .left-text {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      .item {
        padding: 0 16px;
        font-weight: 600;
      }

      .item-light {
        font-weight: 400;
      }
    }

    .right-btn {
      width: 32px;
      height: 32px;
      border-radius: 16px;
      background-color: ${props => props.theme.color.firstColor};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

`