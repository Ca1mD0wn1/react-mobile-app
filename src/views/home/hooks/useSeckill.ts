// src/views/home/hooks/useSeckill.ts
import { useState, useEffect } from 'react'
import { getSeckillListData } from '@/api/home'
export default function useSeckill() {
  const [seckillList, setSeckillList] = useState([])
  useEffect(() => {
    getSeckillListData().then(res => {
      setSeckillList(res.data.data)
    })
  }, [])

  return {
    seckillList
  }
}