import React, {memo} from 'react';
import {useRoutes} from "react-router-dom";
import routes from "@/router";
import AppHeader from "@/components/layout/app-header";

const App = memo((props) => {
  return (
    <div>
      <AppHeader></AppHeader>
      <div className={"page"}>
        {/* 页面的路由 */}
        {
          useRoutes(routes)
        }
      </div>
      <div className={"footer"}>footer</div>
    </div>
  );
})

export default App;