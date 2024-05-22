import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { HashRouter} from "react-router-dom"
import "@/assets/css/index.css"  // css样式

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={"加载中..."}>
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </React.StrictMode>
);
