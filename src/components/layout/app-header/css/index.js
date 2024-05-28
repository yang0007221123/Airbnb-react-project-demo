import {styled} from "styled-components"

export const HeaderWrapper = styled.div`
  /* 固定头部在页面最顶部 */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #fff;

  display: flex;
  align-items: flex-start;
  height: ${props => props?.customheight + "px" || "200px"};
  border-bottom: 1px solid #c3c3c3;
  padding: 0 40px;

  transition: height 300ms ease; /* 平滑改变头部高度 */
`