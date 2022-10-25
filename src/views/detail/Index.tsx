import React, { FC } from 'react';
import { BannerComponent, ProInfoComponent, ProRecommendComponent, HeaderComponent, ActionBar } from './components/index';
import { useParams } from 'react-router-dom';
import useDetailsData from './hooks/useDetailsData'
import useDetailRecommend from './hooks/useProRec'
interface IDetailProps {
};


const Detail: FC<IDetailProps> = () => {

  const params = useParams().proid
  const proid = String(params)
  const detailData = useDetailsData(proid)

  const detailRecommend = useDetailRecommend()

  return (
    <>
      <header className="header"><HeaderComponent /></header>
      <div className="content">
        <BannerComponent details={detailData ? detailData : {}}></BannerComponent>
        <ProInfoComponent detailData={detailData}></ProInfoComponent>
        <ProRecommendComponent list={detailRecommend!}></ProRecommendComponent>
        <ActionBar></ActionBar>
      </div>
    </>
  )

};

export default Detail;