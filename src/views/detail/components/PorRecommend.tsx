import React, { FC } from 'react';
import { Image, Ellipsis } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import './ProRec.scss'
import IPro from '../IPro'

interface IProRecommendProps {
  list: IPro[]
}

const ProRecommend: FC<IProRecommendProps> = ({ list }) => {
  const navigate = useNavigate()
  const toDetail = (proid: string) => {
    navigate('/detail/' + proid)
  }
  list = list ? list : []
  return (
    <div className="recommendBox">
      <h1>猜你喜欢</h1>
      <div className={'proList'}>
        <ul className='left'>
          {list && list.map((item, index) => {
            if (index % 2 === 0) {
              return (<li key={item.proid} onClick={() => { toDetail(item.proid!) }}>
                <div className="itemImage">
                  <Image src={item.img1} />
                </div>
                <div className="itemInfo">
                  <div className="itemTitle"><Ellipsis direction='end' rows={2} content={item.proname!} /></div>
                  <div className="itemPrice">
                    ￥{(item.originprice!.toFixed(2) + '').split('.')[0]}.<span>{(item.originprice!.toFixed(2) + '').split('.')[1]}</span>
                  </div>
                </div>
              </li>)
            } else {
              return null
            }

          })}
        </ul>
        <ul className='right'>
          {list.map((item, index) => {
            if (index % 2 === 1) {
              return (<li key={item.proid} onClick={() => { toDetail(item.proid!) }}>
                <div className="itemImage">
                  <Image src={item.img1} />
                </div>
                <div className="itemInfo">
                  <div className="itemTitle"><Ellipsis direction='end' rows={2} content={item.proname!} /></div>
                  <div className="itemPrice">
                    ￥{(item.originprice!.toFixed(2) + '').split('.')[0]}.<span>{(item.originprice!.toFixed(2) + '').split('.')[1]}</span>
                  </div>
                </div>
              </li>)
            } else {
              return null
            }

          })}
        </ul>
      </div>
    </div>
  )

};

export default ProRecommend;