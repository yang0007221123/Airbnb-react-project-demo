import React, {memo, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getHighScoreAction} from "@/store/modules/home";

const Home = memo((props) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getHighScoreAction());
  }, []);
  
  return (
    <div>
      home
    </div>
  );
})

export default Home;