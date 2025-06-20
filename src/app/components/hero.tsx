import  { StaticImageData } from 'next/image'
import React from 'react'
import  Image  from 'next/image';

interface IProps{
    imgUrl: string | StaticImageData;
    altTxt:string;
    content:string
}
export default function Hero(props:IProps) {
  return (
    <div className="relative min-h-screen w-full">
      {/* 背景图片层 */}
      <div className="absolute inset-0 z--20">
        <Image
          src={props.imgUrl}
          alt={props.altTxt}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        {/* 可选：渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 opacity-60"></div>
      </div>
      {/* 内容层 */}
      <div className="relative z--10 flex items-center justify-center min-h-screen">
        <h1 className="text-white text-6xl">{props.content}</h1>
      </div>
    </div>
  )
}