// src/views/home/hooks/useBacktop.ts
import { useState, useRef } from 'react'
export default function useBacktop() {
  const contentRef = useRef(null)
  const [top, setTop] = useState<number>(0)
  const scroll = () => {
    const test = contentRef.current as unknown as HTMLDivElement
    setTop(test.scrollTop)
  }
  const backTop = () => {
    const test = contentRef.current as unknown as HTMLDivElement
    test.scrollTop = 0
  }
  return {
    contentRef, top, scroll, backTop
  }
}