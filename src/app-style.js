import {styled} from "styled-components";

export const AppWrapper = styled.div`
  position: relative;

  .page {
    margin-top: ${props => props.customheight + "px" || "200px"}; /* 防止遮挡头部区域 */
  }

  transition: margin-top 200ms linear;
`