import React, {memo, useEffect} from 'react';
import {GoodPriceWrapper} from "@/views/home/css/GoodPriceWrapper";
import {useDispatch, useSelector} from "react-redux";
import {getGoodPriceInfoAction} from "@/store/modules/home";
import TitleSection from "@/components/titleSection";
import RoomItem from "@/components/roomItem";

const GoodPriceInfo = memo((props) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getGoodPriceInfoAction())
  }, [dispatch]);
  
  const {goodPriceInfo} = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }))
  
  return (
    <GoodPriceWrapper>
      {/* 标题 */}
      <TitleSection mainTitle={goodPriceInfo.title}></TitleSection>
      {/* 房源展示区域 */}
      <div className="room-box">
        {
          goodPriceInfo.list?.map(item => {
            return (<RoomItem roomItemInfo={item} key={item.id}></RoomItem>)
          })
        }
      </div>
    </GoodPriceWrapper>
  );
})

export default GoodPriceInfo;