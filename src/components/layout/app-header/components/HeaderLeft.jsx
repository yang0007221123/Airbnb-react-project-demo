import React, {memo} from 'react';
import {LeftWrapper} from "@/components/layout/app-header/css/header-left";
import SvgIcon from "@/components/svgIcon";

const HeaderLeft = memo((props) => {
  
  // 回到主页
  const goToHome = () => {
    console.log("goToHome");
  }
  
  return (
    <LeftWrapper>
      <div className="logo-area" onClick={goToHome}>
        <SvgIcon name="logo" width={161} height={36} needPointer />
      </div>
    </LeftWrapper>
  );
})

export default HeaderLeft;