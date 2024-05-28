import React, {memo} from 'react';
import {RoomItemWrapper} from "@/components/roomItem/css/room-item";
import PropTypes from "prop-types";
import RotatePics from "@/components/roomItem/cmps/RotatePics";

const RoomItem = memo((props) => {
  const {roomItemInfo} = props;
  
  return (
    <RoomItemWrapper messagecolor={roomItemInfo.verify_info?.text_color}>
      {/*  图片区域 */}
      <RotatePics picture_url={roomItemInfo.picture_url}></RotatePics>
      {/*  底部文字区域 */}
      <div className="desc-box">
        <div className="desc-text" title={roomItemInfo.name}>{roomItemInfo.name}</div>
        <div className="message-text">{roomItemInfo.verify_info.messages?.join(",")}</div>
        <div>{roomItemInfo.price_format}</div>
      </div>
    </RoomItemWrapper>
  );
})

RoomItem.propTyeps = {
  roomItemInfo: PropTypes.object
}

export default RoomItem;