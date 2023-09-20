import Image from 'next/image'
import Index from './index'
import { getServerSideProps } from './index'

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <Index />
      </div>
    </main>
  )
}
