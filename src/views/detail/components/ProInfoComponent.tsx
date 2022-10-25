import React, { FC } from 'react';
import { Tag } from 'antd-mobile';
import './ProInfo.scss'
import IPro from '../IPro'

interface IProInFoProps {
  detailData: IPro
}

const ProInfo: FC<IProInFoProps> = ({ detailData }) => {


  return (
    <>
      <div className="proInfo">
        <div className="priceBox">
          <span>￥{detailData.originprice}</span>
          <span>销量{detailData.sales}</span>
        </div>

        <div className="proName">
          <Tag color={"danger"}>{detailData.brand}</Tag>
          <Tag color={"primary"}>{detailData.category}</Tag>
          <span>{detailData.proname}</span>
        </div>
      </div>
    </>
  )

};

export default ProInfo;