import React, { FC, useState } from 'react';

import { InfiniteScroll, PullToRefresh } from 'antd-mobile';
import { UpOutline } from 'antd-mobile-icons';
import './backTop.scss'

import nav_List from '@/utils/nav'

import {
  BannerComponent, NavComponent, SeckillComponent, ProComponent, HeaderComponent
} from './components'
import {
  useBacktop, useBanner, usePro, useSeckill
} from './hooks'

interface IHomeProps { };

const Home: FC<IHomeProps> = () => {

  const { bannerList } = useBanner()

  // nav业务
  const [navList] = useState(nav_List)

  // 秒杀业务
  const { seckillList } = useSeckill()

  // 产品列表 下拉刷线  上拉加载
  const { onRefresh, proList, loadMore, hasMore, statusRecord } = usePro()

  const { contentRef, top, scroll, backTop } = useBacktop()

  return (
    <>

      <header className="header"><HeaderComponent></HeaderComponent></header>
      <div className="content" ref={contentRef
      } onScroll={scroll
      }>
        <PullToRefresh onRefresh={onRefresh} renderText={status => {
          return <div>{statusRecord[status]}</div>
        }
        }>
          <BannerComponent list={bannerList} /><NavComponent list={navList} />
          <SeckillComponent list={seckillList} />
          <ProComponent list={proList} />
          <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </PullToRefresh>
      </div>
      {top > 300 ? <div className="backTop" onClick={backTop
      }><UpOutline /></div> : null
      }
    </>
  )
};

export default Home;
