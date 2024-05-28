import {styled} from "styled-components"

export const GoodPriceWrapper = styled.div`
  .title {
    font-size: 24px;
    font-weight: 600;
  }

  .room-box {
    width: 100%;
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: repeat(2, 48%);   /* 行高度 */
    grid-template-columns: repeat(6, 15.96%);   /* 列宽度; repeat()第一个参数表示重复的格子数量 */
    grid-row-gap: 40px;   /* 行间距 */
    grid-column-gap: 20px;   /* 列间距 */
  }

`