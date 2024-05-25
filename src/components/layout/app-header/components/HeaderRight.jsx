import React, {memo} from 'react';
import {RightWrapper} from "@/components/layout/app-header/css/header-rigth";
import SvgIcon from "@/components/svgIcon";
import classnames from "classnames";
import {MenuOutlined} from "@ant-design/icons";

const HeaderRight = memo((props) => {
  return (
    <RightWrapper>
      <div className={classnames("language-box", "flexCenter")}>
        <SvgIcon name="language" width={16} height={16}></SvgIcon>
      </div>
      <div className="user-box">
        <MenuOutlined/>
        <SvgIcon name={"userImg"} width={32} height={32}></SvgIcon>
      </div>
    </RightWrapper>
  );
})

export default HeaderRight;