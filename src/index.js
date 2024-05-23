import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import {HashRouter} from "react-router-dom"
import "@/assets/css/index.css"  // css样式
import {Provider} from "react-redux";
import store from "@/store/index"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* redux */}
    <Provider store={store}>
      {/* 异步加载 */}
      <Suspense fallback={"加载中..."}>
        {/* Hash路由 */}
        <HashRouter>
          <App/>
        </HashRouter>
      </Suspense>
    </Provider>
  </React.StrictMode>
);
