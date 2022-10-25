import { getDetailRecommendData } from "@/api/detail"
import { useEffect, useState } from 'react'
import IPro from '../IPro'

export default function useProRec() {

  const [detailRecommend, setDetailRecommend] = useState<IPro[]>()
  useEffect(() => {
    getDetailRecommendData().then(res => {
      setDetailRecommend(res.data.data)
    })
  }, [])

  return detailRecommend
}