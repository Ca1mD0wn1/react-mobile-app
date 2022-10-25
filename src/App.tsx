import React, { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import '@/App.scss';
import Footer from '@/components/Foot'

import Cart from '@/views/cart/Index';
import Home from '@/views/home/Index';
import Kind from '@/views/kind/Index';
import User from '@/views/user/Index';
import Detail from '@/views/detail/Index';
import NotFound from './views/error/NotFind';
interface IAppProps {
};



const App: FC<IAppProps> = () => {
  const test = [];
  if (test.length === 0) {

  }
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route>
            <Route path='/' element={<Navigate to='/home' replace />} />
            <Route path="home" element={<><Home /><Footer /></>} />
            <Route path="kind" element={<><Kind /><Footer /></>} />
            <Route path="cart" element={<><Cart /><Footer /></>} />
            <Route path="user" element={<><User /><Footer /></>} />
            <Route path="detail/:proid" element={<Detail />} />
            <Route path="NotFind" element={<NotFound />} />
          </Route>

        </Routes>


        <div className='landscape-tip'>
          请将屏幕竖向浏览
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;


