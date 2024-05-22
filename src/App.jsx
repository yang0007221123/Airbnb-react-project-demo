import React, {memo} from 'react';
import {useRoutes} from "react-router-dom";
import routes from "@/router";

const App = memo((props) => {
  return (
    <div>
      <div className={"header"}>header</div>
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