import { Metadata } from 'next'
import Donations from '../components/Donations'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Apóyame en China | Ramón Aguilera',
  description: 'Apoya a Ramón Aguilera en su programa HUST 3+3 en Wuhan, China. Donaciones a través de Stripe para financiar vuelo, visa y estancia.',
  openGraph: {
    title: 'Apóyame en China — Ramón Aguilera 🇨🇳',
    description: 'Fui aceptado en el programa HUST 3+3 en Wuhan, China. Cualquier apoyo me acerca más a este sueño. A cambio ofrezco servicios de diseño web e identidad visual.',
    url: 'https://ramonaguilera.xyz/china',
    siteName: 'Ramón Aguilera',
    images: [
      {
        url: 'https://ramonaguilera.xyz/huazhong.jpg',
        width: 1200,
        height: 630,
        alt: 'Huazhong University of Science and Technology, Wuhan, China',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apóyame en China — Ramón Aguilera 🇨🇳',
    description: 'Fui aceptado en el programa HUST 3+3 en Wuhan. Cualquier apoyo me acerca más a este sueño.',
    images: ['https://ramonaguilera.xyz/huazhong.jpg'],
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
