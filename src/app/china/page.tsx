import { Metadata } from 'next'
import Donations from '../components/Donations'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Apóyame en China | Ramón Aguilera',
  description: 'Apoya a Ramón Aguilera en su programa HUST 3+3 en Wuhan, China. Donaciones a través de Stripe para financiar vuelo, visa y estancia.',
  openGraph: {
    title: 'Apóyame en China — Ramón Aguilera',
    description: 'Fui aceptado en el programa HUST 3+3 en Wuhan, China. Cualquier apoyo me acerca más a este sueño.',
    images: ['/huazhong.jpg'],
  },
}

export default function ChinaPage() {
  return (
    <main className="overflow-x-hidden bg-neutral-950">
      <Navbar />
      <Donations />
      <Footer />
    </main>
  )
}
