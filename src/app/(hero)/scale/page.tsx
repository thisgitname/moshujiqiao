import React from 'react'
import Hero from '../../components/hero'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title:"Scale"
}
export default function page() {
  return (
    <Hero imgUrl="/4.png" altTxt="Scale" content="这是我这个Scale页面的内容"></Hero>
 )
}
