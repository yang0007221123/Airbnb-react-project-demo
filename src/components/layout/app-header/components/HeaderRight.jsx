import React, {memo, useEffect, useState} from 'react';
import {RightWrapper, UserPopoverWrapper} from "@/components/layout/app-header/css/header-rigth";
import SvgIcon from "@/components/svgIcon";
import classnames from "classnames";
import {MenuOutlined} from "@ant-design/icons";

const HeaderRight = memo((props) => {
  const [showPopover, setShowPopover] = useState(false)
  
  useEffect(() => {
    function switchShowPopover() {
      setShowPopover(false);
    }
    
    // 监听页面的点击事件
    window.addEventListener("click", switchShowPopover, true);
    return () => {
      window.removeEventListener("click", switchShowPopover, true);
    }
  }, []);
  
  
  // 显示弹框
  function clickUserBox() {
    setShowPopover(true);
  }
  
  return (
    <RightWrapper>
      <div className={classnames("language-box", "flexCenter")}>
        <SvgIcon name="language" width={16} height={16}></SvgIcon>
      </div>
      <div className="user-box" onClick={clickUserBox}>
        <MenuOutlined/>
        <SvgIcon name={"userImg"} width={32} height={32}></SvgIcon>
        {
          showPopover &&
          <UserPopover></UserPopover>
        }
      </div>
    </RightWrapper>
  );
})


// 登录注册浮窗
const UserPopover = memo((props) => {
  return (
    <UserPopoverWrapper>
      <div className="item">登录</div>
      <div className="item">注册</div>
      <div className="item item-help">帮助中心</div>
    </UserPopoverWrapper>
  );
})

export default HeaderRight;