import React, {Fragment, memo, useEffect, useState} from 'react';
import {MiddleWrapper} from "@/components/layout/app-header/css/header-middle";
import classnames from "classnames";
import {SearchOutlined} from "@ant-design/icons";
import {Divider} from "antd";
import {shallowEqual, useSelector} from "react-redux";


const HeaderMiddle = memo((props) => {
  const searchTitleText = ["住宿", "体验", "线上体验"];
  const firstTextList = [{firstText: "任何地方"}, {firstText: "任意一周"}, {firstText: "添加人数"}]; // 搜索框中的文字选项
  const firstSecondTextList = [{firstText: "地点", secondText: "搜索目的地"}, {firstText: "日期", secondText: "添加日期"}, {firstText: "人员", secondText: "添加人数"}]; // 搜索框中的文字选项
  const [showTextList, setShowTextList] = useState(firstTextList);
  const [currentActiveTitleText, setCurrentActiveTitleText] = useState("住宿");
  
  // 获取scrollY值
  const {scrollY} = useSelector((state) => ({
    scrollY: state.global.scrollY
  }), shallowEqual)
  
  // 基于ScrollY的值，切换搜索栏中显示的文字内容
  function handleChangeTextList() {
    if (scrollY === 0) {
      setShowTextList(firstSecondTextList);
    } else {
      setShowTextList(firstTextList);
    }
  }
  
  useEffect(() => {
    handleChangeTextList();
    // eslint-disable-next-line
  }, [scrollY]);
  
  // 切换激活的title text
  function changeActiveTitle(item) {
    setCurrentActiveTitleText(item);
  }
  
  return (
    <MiddleWrapper customheight={props.customHeight}>
      {/* 类型选择区域 */}
      {
        scrollY === 0 &&
        <div className={classnames("title-text-list", scrollY === 0 ? "show-title-list" : "hidden-title-list")}>
          {
            searchTitleText.map(item => (
              <span key={item} className={classnames("item", {"active-title": currentActiveTitleText === item})}
                    onClick={() => {changeActiveTitle(item)}}>
                {item}
              </span>
            ))
          }
        </div>
      }
      {/* 搜索框区域 */}
      <div className={classnames("search-box", "flexBetween", scrollY === 0 ? "search-box-plus" : "search-box-small")}>
        <div className="left-text">
          {
            showTextList.map((item, index) => {
              const lastItemFlag = index === showTextList.length - 1;
              return (
                <Fragment key={index}>
                  <div className="text-item">
                    <div className={classnames("item", lastItemFlag ? "item-light" : "")}>
                      <div className="first-text">{item.firstText}</div>
                      <div className="second-text">{item?.secondText}</div>
                    </div>
                  </div>
                  {!lastItemFlag && <Divider type="vertical" className="divider"/>}
                </Fragment>
              )
            })
          }
        </div>
        <div className={classnames("right-btn", scrollY === 0 ? "small-btn-animation" : "big-btn-animation")}>
          <SearchOutlined style={{color: "#ffffff"}}/>
        </div>
      </div>
    </MiddleWrapper>
  );
})

export default HeaderMiddle;