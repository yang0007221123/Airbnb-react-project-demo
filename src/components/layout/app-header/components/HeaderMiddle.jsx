import React, {memo} from 'react';
import {MiddleWrapper} from "@/components/layout/app-header/css/header-middle";
import classnames from "classnames";
import {SearchOutlined} from "@ant-design/icons";
import {Divider} from "antd";


const HeaderMiddle = memo((props) => {
  const searchTextList = ["任务地方", "任务一周", "添加人数"];  // 搜索框中的文字选项
  
  return (
    <MiddleWrapper>
      <div className={classnames("search-box", "flexBetween")}>
        <div className="left-text">
          {
            searchTextList.map((item, index) => {
              const lastItemFlag = index === searchTextList.length - 1;
              return (
                <div key={index}>
                  <span className={classnames("item", lastItemFlag ? "item-light" : "")}>{item}</span>
                  {
                    !lastItemFlag &&
                    <Divider type="vertical"/>
                  }
                </div>
              )
            })
          }
        </div>
        <div className="right-btn">
          <SearchOutlined style={{color: "#ffffff"}}/>
        </div>
      </div>
    </MiddleWrapper>
  );
})

export default HeaderMiddle;