// src/views/home/hooks/usePro.ts
import { useState, useEffect } from 'react'
import { getProListData } from '@/api/home'
import { PullStatus } from 'antd-mobile/es/components/pull-to-refresh'
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
export default function usePro() {
  // 产品列表
  const [proList, setProList] = useState<IPro[]>([])
  useEffect(() => {
    getProListData().then(res => setProList(res.data.data))
  }, [])

  // 加载更多
  const [hasMore, setHasMOre] = useState<boolean>(true)
  const [count, setCount] = useState<number>(2)
  const loadMore = async () => {
    const res = await getProListData({ count })
    if (res.data.data.length === 0) {
      setHasMOre(false)
    } else {
      setHasMOre(true)
      setCount(count + 1)
      setProList([...proList, ...res.data.data])
    }
  }

  // 下拉刷新
  const onRefresh = async () => {
    const res = await getProListData()
    setProList(res.data.data)
    setHasMOre(true)
    setCount(2)
  }
  const statusRecord: Record<PullStatus, string> = {
    pulling: '用力拉',
    canRelease: '松开吧',
    refreshing: '玩命加载中...',
    complete: '好啦',
  }
  return {
    proList,
    onRefresh,
    hasMore,
    loadMore,
    statusRecord
  }
}