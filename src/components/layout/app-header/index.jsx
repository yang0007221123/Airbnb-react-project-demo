import React, {memo} from 'react';
import {HeaderWrapper} from "src/components/layout/app-header/css";
import HeaderLeft from "@/components/layout/app-header/components/HeaderLeft";
import HeaderMiddle from "@/components/layout/app-header/components/HeaderMiddle";
import HeaderRight from "@/components/layout/app-header/components/HeaderRight";

const AppHeader = memo((props) => {
  
  return (
    <HeaderWrapper>
      <HeaderLeft></HeaderLeft>
      <HeaderMiddle></HeaderMiddle>
      <HeaderRight></HeaderRight>
    </HeaderWrapper>
  );
})

export default AppHeader;