import React from 'react'
import Hero from '../../components/hero'
import ScaleSrc from  '@/public/4.png'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title:"Scale"
}
export default function page() {
  return (
    <Hero imgUrl={ScaleSrc} altTxt="Scale" content="这是我这个Scale页面的内容"></Hero>
 )
}
