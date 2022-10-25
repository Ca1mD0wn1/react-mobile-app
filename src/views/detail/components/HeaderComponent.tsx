// src/views/detail/components/HeaderComponent.tsx
import React, { FC } from 'react';
import { LeftOutline, MoreOutline } from 'antd-mobile-icons'
import './Header.scss'
import { useNavigate } from 'react-router-dom';
interface IHeaderComponentProps {

};

const HeaderComponent: FC<IHeaderComponentProps> = () => {
  const navigate = useNavigate()
  return (
    <div className='myHeader'>
      <header className="header2">
        <ul>
          <li className="left" onClick={() => navigate(-1)} >
            <LeftOutline />
          </li>
          <li className="middle">
            <span>详情</span>
            <span>推荐</span>
          </li>
          <li className="right">
            <MoreOutline />
          </li>
        </ul>
      </header>
    </div>
  )
};

export default HeaderComponent;