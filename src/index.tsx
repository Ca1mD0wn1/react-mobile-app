import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './ErrorBundary'; // 错误边界
import App from '@/App';
import reportWebVitals from './reportWebVitals';
import './main.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// 开发环境下，严格模式会触发组件的二次装载，修改状态时尽量不要使用 函数形式
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
