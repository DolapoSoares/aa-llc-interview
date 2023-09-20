import Image from 'next/image'
import Index from './index'
import { getServerSideProps } from './index'

export default function Home() {
  return (
    <main >
      <Index />
    </main>
  )
}
