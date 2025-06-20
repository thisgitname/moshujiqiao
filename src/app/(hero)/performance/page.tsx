import React from 'react'
import Hero from '../../components/hero'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title:"Performance"
}
export default function page() {
  return (
    <Hero imgUrl="/2.png" altTxt="Performance" content="这是我这个Performance页面的内容"></Hero>
 )
}
