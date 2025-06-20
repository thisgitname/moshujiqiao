import React from 'react'
import Hero from '../../components/hero'
import PerformanceSrc from  '@/public/2.png'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title:"Performance"
}
export default function page() {
  return (
    <Hero imgUrl={PerformanceSrc} altTxt="Performance" content="这是我这个Performance页面的内容"></Hero>
 )
}
