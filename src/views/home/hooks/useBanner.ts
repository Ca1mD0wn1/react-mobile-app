// src/views/home/hooks/useBanner.ts
import { useState, useEffect } from 'react'
import { getBannerListData } from '@/api/home'

export default function useBanner() {
  const [bannerList, setBannerList] = useState([])
  useEffect(() => {
    getBannerListData().then(res => {
      setBannerList(res.data.data)
    })
  }, [])

  return {
    bannerList
  }
}