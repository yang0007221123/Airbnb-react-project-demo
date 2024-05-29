import {styled} from "styled-components";

export const RotatePicsWrapper = styled.div`
  .img-box {
    width: 100%;
    height: 256px;

    .img {
      width: 100%;
      height: 256px;
      border-radius: 10px;
    }

    /* 轮播图左右切换按钮的样式 */

    .slick-prev,
    .slick-next {
      display: none !important;
      width: 34px;
      height: 34px;
      border-radius: 17px;
      background-color: #ffffff !important; /* 按钮背景颜色 */
      font-size: 20px; /* 按钮文字大小 */
    }

    .slick-next {
      &::after {
        top: 12px;
        left: 9px;
        color: #8c8c8c;
      }
    }

    .slick-prev {
      &::after {
        top: 12px;
        left: 12px;
        color: #8c8c8c;
      }
    }

    &:hover {
      .slick-prev,
      .slick-next {
        display: block !important;
      }
    }
  }


  /* 修改下方圆圈样式 */

  //.slick-dots {
  //  display: flex;
  //  justify-content: center;
  //  align-items: center;
  //  bottom: 20px; /* 圆圈容器距离底部的距离 */
  //
  //  .slick-dots li button {
  //    display: inline-block;
  //  }
  //}
  //
  //.slick-dots li button {
  //  width: 8px; /* 单个圆圈的宽度 */
  //  height: 8px; /* 单个圆圈的高度 */
  //  border-radius: 50%; /* 圆圈变成圆形 */
  //  background-color: #333; /* 圆圈背景颜色 */
  //
  //}
  //
  //.slick-dots li .slick-active {
  //  width: 8px !important; /* 单个圆圈的宽度 */
  //  height: 8px; /* 单个圆圈的高度 */
  //  background-color: #fff; /* 活动状态下的圆圈背景颜色 */
  //}
`