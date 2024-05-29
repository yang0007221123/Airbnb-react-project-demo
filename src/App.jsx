import React, {memo, useEffect, useState} from 'react';
import {useRoutes} from "react-router-dom";
import routes from "@/router";
import AppHeader from "@/components/layout/app-header";
import AppFooter from "@/components/layout/app-footer/AppFooter";
import {AppWrapper} from "@/app-style";
import {useDispatch} from "react-redux";
import {setScrollY} from "@/store/modules/global";

const App = memo((props) => {
  const [customHeight, setCustomHeight] = useState(168);  // 头部区域默高度 168px
  const dispatch = useDispatch();
  
  useEffect(() => {
    
    // 监听网页的滚动事件
    function handleScroll() {
      dispatch(setScrollY(window.scrollY)); // 保存scrollY值到redux
      if (window.scrollY === 0) {
        setCustomHeight(168);
      } else if (customHeight !== 80) {
        setCustomHeight(80);
      }
    }
    window.addEventListener("scroll", handleScroll, true)
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, customHeight]);
  
  return (
    <AppWrapper customheight={customHeight}>
      {/* 头部区域 */}
      <AppHeader customHeight={customHeight}></AppHeader>
      {/* 内容区域 */}
      <div className="page">
        {/* 内容区域的路由 */}
        {
          useRoutes(routes)
        }
      </div>
      {/* 底部区域 */}
      <AppFooter></AppFooter>
    </AppWrapper>
  );
})

export default App;