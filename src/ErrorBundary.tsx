import React from 'react'
// 如何给类组件添加类型注解
interface IState {
  hasError: boolean
}
class ErrorBoundary extends React.Component <any, IState> {
// class ErrorBoundary extends React.Component <{ children: any }, {hasError: boolean}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // 更新 state 使下一次渲染可以显示降级 UI
    return { hasError: true };
  }

  componentDidCatch(error: any, info: { componentStack: any; }) {
    // "组件堆栈" 例子:
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    console.log(info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // 你可以渲染任何自定义的降级 UI
      return <h1>代码出错了，请自信检查一下</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary