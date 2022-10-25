import React, { FC, useState } from 'react';
import styled from './Banner.module.scss'
import { Swiper, Image } from 'antd-mobile'
import IPro from '../IPro'
import { ImageViewer } from 'antd-mobile'

interface IBannerProps {
  details: IPro
}
const Banner: FC<IBannerProps> = ({ details }) => {
  const bannerList = JSON.stringify(details) !== "{}" ? details.banners![0].split(',') : []

  const [visible, setVisible] = useState(false)
  if (bannerList.length > 0) {
    return (
      <div className={styled.bannerBox}>
        <Swiper autoplay loop={true}>{

          bannerList.map((item, index) => {
            return (
              <Swiper.Item key={index} onClick={() => {
                setVisible(true)
              }}>
                <Image src={item} ></Image>
                <div
                  className={styled.tip}
                // style={{ background: color }}
                // onClick={() => {
                //   Toast.show(`你点击了卡片 ${index + 1}`)
                // }}
                >
                  {index + 1}/{bannerList.length}
                </div>
              </Swiper.Item>
            )
          })
        }</Swiper>
        <ImageViewer.Multi images={bannerList} defaultIndex={1} visible={visible}
          onClose={() => {
            setVisible(false)
          }}></ImageViewer.Multi>
      </div>
    )
  } else {
    return null;
  }


};

export default Banner;