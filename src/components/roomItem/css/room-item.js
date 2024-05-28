import {styled} from "styled-components";

export const RoomItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;

  .desc-box {
    height: calc(100% - 354px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0;


    .desc-text {
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      
    }

    .message-text {
      color: ${props => props.messagecolor || "#ffffff"};
    }
  }


}
`

