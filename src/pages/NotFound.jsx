import { useEffect } from 'react'
import BrandLogo from '../components/BrandLogo'
import Navbar from '../components/Navbar'
import usePageMeta from '../hooks/usePageMeta'
import '../styles/home.css'
import '../styles/not-found.css'

function NotFound() {
  usePageMeta('Página não encontrada | LK Open', 'A página solicitada não foi encontrada no site do LK Open.')
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Página não encontrada | LK Open'
    window.scrollTo(0, 0)
    return () => { document.title = previousTitle }
  }, [])

  return (
    <>
      <Navbar />
      <main className="not-found">
        <BrandLogo />
        <p>Erro 404</p>
        <h1>Essa bola foi<br />para fora.</h1>
        <span>A página que você procurou não existe ou mudou de endereço.</span>
        <div>
          <a className="button button--primary" href="/#inicio">Voltar para a Home</a>
          <a className="button button--ghost" href="/edicoes">Ver as edições</a>
        </div>
      </main>
    </>
  )
}

export default NotFound
