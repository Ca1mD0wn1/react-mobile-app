import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Seckill.scss';
import { Image } from 'antd-mobile'

interface IPro {
  banners: string[]
  brand: string
  category: string
  desc: string
  discount: number
  img1: string
  img2: string
  img3: string
  img4: string
  isrecommend: number
  issale: number
  isseckill: number
  originprice: number
  proid: string
  proname: string
  sales: number
  stock: number
}

interface ISeckillComponentProps {
  list: IPro[]
};
const Seckill: FC<ISeckillComponentProps> = ({ list }) => {

  const [time, setTime] = useState(0)
  const [field, setField] = useState(0)
  const [hour, setHour] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    function timeCountDown() {
      let originTime = new Date(new Date().toLocaleDateString());
      let hours = new Date().getHours();
      if (hours % 2 === 0) {
        setField(hours)
        let twohour = originTime.getTime() + (hours + 2) * 60 * 60 * 1000
        setTime(twohour.valueOf() - new Date().valueOf())
      } else {
        setField(hours - 1)
        let twohour = originTime.getTime() + 60 * (hours + 1) * 60 * 1000;
        setTime(twohour - new Date().valueOf())
      }
    }

    const timer = setInterval(() => {
      timeCountDown()
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  // 检测到time发生改变，则计算 hour minutes seconds
  useEffect(() => {
    // console.log('1', time)
    const hour = Math.floor(time / 3600000)
    const minutes = Math.floor((time - hour * 3600000) / 60000)
    const seconds = Math.floor((time - hour * 3600000 - minutes * 60000) / 1000)
    setHour(hour)
    setMinutes(minutes)
    setSeconds(seconds)
  }, [time])



  return (
    <div className="seckillBox">
      <div className="title_wrap">
        <ul>
          <li>
            <span>嗨购秒杀</span>
            <span>{field}点场</span>
            {/* { hour } - { minutes } - { seconds } */}
            <div className="myTimer">
              <span className="block">{hour < 10 ? '0' + hour : hour}</span>
              <span className="colon">:</span>
              <span className="block">{minutes < 10 ? '0' + minutes : minutes}</span>
              <span className="colon">:</span>
              <span className="block">{seconds < 10 ? '0' + seconds : seconds}</span>
            </div>
          </li>
          <li>
            爆款轮番秒
          </li>
        </ul>
      </div>
      <ul className="seckillList">
        {
          list && list.map(item => (

            <li key={item.proid}>
              <Link to={'/detail/' + item.proid}>
                <Image src={item.img1} />
                <p>￥{item.originprice}</p>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )

};

export default Seckill;