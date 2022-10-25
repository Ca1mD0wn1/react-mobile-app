import React, { FC } from 'react';
import './header.scss'
import logo from './logo.png';
import { Image } from 'antd-mobile'
interface IHeaderProps {


};
const Header:FC<IHeaderProps> = () => {


  return (
 <header className="header">
    <ul>
      <li>西安</li>
      <li>
        <div className="searchBox">
            <Image src={logo}/>
          <span className="divider">|</span>
          {/* <van-icon name="search" size="24" /> */}
          <span className="searchText">立柜式空调</span>
        </div>
      </li>
      <li>登录</li>
    </ul>
  </header>
)

};

export default Header;