import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface IFooterProps {

}
const Footer: FC<IFooterProps> = () => {
  return (
    <footer className='footer'>
      <ul>
        <NavLink to='/home'>
          <span className="iconfont icon-shouye"></span>
          <p>首页</p>
        </NavLink>
        <NavLink to='/kind'>
          <span className="iconfont icon-fenlei"></span>
          <p>分类</p>
        </NavLink>
        <NavLink to='/cart'>
          <span className="iconfont icon-gouwuchekong"></span>
          <p>购物车</p>
        </NavLink>

        <NavLink to='user'>
          <span className="iconfont icon-wode"></span>
          <p>我的</p>
        </NavLink>
      </ul>
    </footer>)
}

export default Footer