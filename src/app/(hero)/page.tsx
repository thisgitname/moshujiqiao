import React from 'react'
import Hero from '../components/hero'
import { Metadata } from 'next'


export const metadata:Metadata={
  title:"Home"
}
export default function Page() {
  return (
    <Hero imgUrl="/home.png" altTxt="home" content="这是我这个HOME页面的内容"></Hero>
  )
}