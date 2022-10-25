import React, { FC } from 'react';
import { Swiper, Image } from 'antd-mobile'

interface IBanner {
  bannerid: string
  img: string
  alt: string
  link: string
  flag: boolean
};
interface IBannerComponentProps {
  list: IBanner[]
};
const Banner: FC<IBannerComponentProps> = ({ list }) => {

  if (list.length > 0) {
    return (
      <div style={{ padding: '15px' }}>
        <Swiper autoplay loop={true} style={{
          '--border-radius': '8px',
        }}>
          {
            list.map((item) => {
              return (
                <Swiper.Item key={item.bannerid}>
                  <Image src={item.img} />
                </Swiper.Item>
              )
            })
          }
        </Swiper>
      </div>
    )
  } else { return null }



};

export default Banner;  