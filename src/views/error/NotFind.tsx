import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { getSeckillListData } from '@/api/home'

interface INotFoundProps {


};
const NotFound: FC<INotFoundProps> = () => {
  const navigate = useNavigate()

  // async function test() {
  //   const res = await getSeckillListData()
  //   if (res) {
  //     window.location = './home' as unknown as Location
  //   }
  // }


  const back = () => {
    navigate('/home')
  }
  return (
    <div><h1>页面走丢了哦!</h1>
      <Link to={'/home'}>
        <button onClick={back}>点我重新加载</button>
      </Link>
    </div>
  )

};

export default NotFound;