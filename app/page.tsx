import Image from 'next/image'
import ProductCard from './components/ProductCard'
export default function Home() {
  return (
    <main className="ml-0 bg-color: #ffffff; p-1">
      <h1>welcome to ANF coffee farm</h1>
      <ProductCard/>
  
    </main>
  )
}
