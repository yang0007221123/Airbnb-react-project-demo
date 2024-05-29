import {styled} from "styled-components";

export const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${props => props.customheight + "px" || "80px"};

  .search-box {
    width: 315px;
    height: 48px;
    border-radius: 24px;
    border: 1px solid #dddddd;
    cursor: pointer;
    position: relative;

    &:hover {
      ${props => props.theme.mixins.boxShadowHover}
    }

    .left-text {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .text-item {
        display: flex;
        justify-content: center;
        align-content: center;

        .item {
          padding: 0 16px;
          font-weight: 600;
        }

        .item-light {
          font-weight: 400;
        }

        &:last-child {
          padding-right: 40px;
        }
      }

      .divider {
        height: 28px;
      }
    }

    .right-btn {
      position: absolute;
      right: 8px;
      width: 32px;
      height: 32px;
      border-radius: 16px;
      background-color: ${props => props.theme.color.firstColor};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }


  /* title区域的样式和动画 --- start */

  .title-text-list {
    min-width: 500px;
    height: 40px;
    display: flex;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 20px;
    animation: show-title-list 300ms ease alternate;

    @keyframes show-title-list {
      0% {
        opacity: 0;
        transform: translateY(-100%);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .item {
      display: inline-block;
      height: 44px;
      padding: 0 8px;
      line-height: 44px;
      margin: 0 10px;
      border-radius: 15px;

      &:hover {
        background-color: #f7f7f7;
      }
    }

    .active-title {
      font-weight: 600;
    }
  }

  /* title区域的样式和动画 --- end */

  /* scrollY !== 0 的时候添加该样式---start */

  .search-box-plus {
    width: 850px;
    height: 66px;
    transition: width 200ms ease;
    border-radius: 33px;

    .right-btn {
      width: 48px;
      height: 48px;
      border-radius: 24px;
    }

    .left-text {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .text-item {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-content: center;

        &:last-child {
          padding-right: 80px;
        }

        &:hover {
          background-color: #ebebeb;
          border-radius: 24px;
        }

        .item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 25px;
          font-weight: 600;

          .first-text {
            font-weight: 600;
            font-size: 12px;
            margin-bottom: 5px;
          }

          .second-text {
            font-size: 12px;
            color: #8c8c8c;
          }
        }
      }

      .divider {
        height: 35px;
      }
    }
  }

  /* scrollY !== 0 的时候添加该样式 ---end  */

  /* start---scrollY === 0（搜索区域变小）的时候添加该样式*/

  .search-box-small {
    animation: scale-small-box 300ms ease alternate;

    @keyframes scale-small-box {
      0% {
        width: 850px;
        height: 66px;
        transform: translateY(200%);
      }
      100% {
        width: 315px;
        height: 48px;
        transform: translateY(0);
      }
    }
  }

  /* end---scrollY === 0（搜索区域变小）的时候添加该样式*/

  /* start---搜索按钮的动画 */

  .small-btn-animation {
    animation: small-btn 200ms ease;
  }

  .big-btn-animation {
    animation: big-btn 200ms ease;
  }

  @keyframes small-btn {
    0% {
      transform: translate(-100%, -100%);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes big-btn {
    0% {
      transform: translate(-100%, -100%);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  /*  end---搜索按钮的动画 */
`