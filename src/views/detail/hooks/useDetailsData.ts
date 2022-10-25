import { getDetailData } from '@/api/detail'
import { useEffect, useState } from 'react'

import IPro from '../IPro'

export default function useDetailData(proid: string): IPro {

  const [detailData, setDetailData] = useState<IPro>({})
  useEffect(() => {
    getDetailData(proid).then(res => {
      setDetailData(res.data.data)
    })
  }, [proid])


  return detailData!
}