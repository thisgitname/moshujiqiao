import React from 'react'
import Hero from '../../components/hero'
import ReliabilitySrc from  '@/public/3.png'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title:"Reliability"
}
export default function page() {
  return (
    <Hero imgUrl={ReliabilitySrc} altTxt="Reliability" content="这是我这个Reliability页面的内容"></Hero>
 )
}
