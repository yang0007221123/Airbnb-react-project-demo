import React, {memo, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getHighScoreAction} from "@/store/modules/home";
import {HomeWrapper} from "@/views/home/css/HomeWrapper";
import GoodPriceInfo from "@/views/home/compomemts/GoodPriceInfo";

const Home = memo((props) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getHighScoreAction());
  });
  
  return (
    <HomeWrapper>
      <GoodPriceInfo></GoodPriceInfo>
    </HomeWrapper>
  );
})

export default Home;