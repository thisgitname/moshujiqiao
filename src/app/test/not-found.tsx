import Link  from "next/link";


export default function NotFound() {
  return (
    <>
    <h1>404 Not Found</h1>
    <p>很抱歉，您访问局部的页面不存在。</p>
    <Link href="/">Return Home</Link>
    </>
  )
}