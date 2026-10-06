import PageTransition from './components/PageTransition'
import Categories from './pages/Categories'
import Editions from './pages/Editions'
import FirstEdition from './pages/FirstEdition'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SecondEdition from './pages/SecondEdition'
import Sponsorship from './pages/Sponsorship'
import ThirdEdition from './pages/ThirdEdition'

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  let page = <NotFound />

  if (path === '/') {
    page = <Home />
  }

  if (path === '/edicoes') {
    page = <Editions />
  }

  if (path === '/edicoes/primeira-edicao') {
    page = <FirstEdition />
  }

  if (path === '/edicoes/segunda-edicao') {
    page = <SecondEdition />
  }

  if (path === '/edicoes/terceira-edicao') {
    page = <ThirdEdition />
  }

  if (path === '/categorias') {
    page = <Categories />
  }

  if (path === '/galeria') {
    page = <Gallery />
  }

  if (path === '/patrocinio') {
    page = <Sponsorship />
  }

  return (
    <>
      <PageTransition />
      {page}
    </>
  )
}

export default App
