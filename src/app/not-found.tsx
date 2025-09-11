import Link from 'next/link'

export const metadata = {
  title: '404 - Página no encontrada',
  description: 'La página que buscas no existe.',
}

export const viewport = {
  themeColor: "#000000",
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black dark:bg-black light:bg-white text-white dark:text-white light:text-black flex items-center justify-center transition-colors duration-300">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-8">Página no encontrada</h2>
        <Link 
          href="/"
          className="inline-flex items-center px-6 py-3 bg-pink-500 text-black rounded-lg hover:bg-pink-400 transition-colors duration-200"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
