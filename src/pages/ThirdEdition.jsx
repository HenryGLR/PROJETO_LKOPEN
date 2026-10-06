import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import usePageMeta from '../hooks/usePageMeta'
import '../styles/home.css'
import '../styles/experience.css'
import '../styles/second-edition.css'

const thirdEditionCategories = [
  { number: '01', title: 'Masculino Estreante' },
  { number: '02', title: 'Misto Estreante' },
  { number: '03', title: 'Masculino Iniciante' },
  { number: '04', title: 'Misto Iniciante' },
  { number: '05', title: 'Feminino Iniciante + C' },
  { number: '06', title: 'Amador B + C' },
]

function ThirdEdition() {
  usePageMeta('Terceira edição | LK Open', 'A terceira edição do LK Open acontece nos dias 12 e 13 de dezembro.')
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Terceira edição | LK Open'
    const anchor = window.location.hash && document.getElementById(window.location.hash.slice(1))
    if (anchor) requestAnimationFrame(() => anchor.scrollIntoView())
    else window.scrollTo(0, 0)
    return () => { document.title = previousTitle }
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Navbar />
      <main className="third-edition" id="conteudo">
        <div className="third-edition__content">
          <p className="eyebrow">LK Open · Próximo capítulo</p>
          <h1>3ª edição<br /><span>vem aí.</span></h1>
          <div className="third-edition__date" aria-label="Data da terceira edição: 12 e 13 de dezembro">
            <small>Data confirmada</small>
            <strong>12 e 13</strong>
            <span>de dezembro</span>
          </div>
          <p>Esta será a central oficial para escolher sua categoria e iniciar a inscrição quando o formulário for liberado.</p>
          <a className="third-edition__jump" href="#inscricoes">Quero me inscrever <span aria-hidden="true">↓</span></a>
        </div>

        <section className="third-registration" id="inscricoes" aria-labelledby="third-registration-title">
          <div>
            <p className="eyebrow eyebrow--dark">Inscrições · 3ª edição</p>
            <h2 id="third-registration-title">O próximo jogo<br />começa aqui.</h2>
          </div>
          <div className="third-registration__categories">
            {thirdEditionCategories.map((category) => (
              <div className="third-registration__category" key={category.title}>
                <span>{category.number}</span>
                <strong>{category.title}</strong>
              </div>
            ))}
            <p>Uma única inscrição dará acesso à escolha da categoria no formulário oficial.</p>
            <span className="button third-registration__disabled" aria-disabled="true">
              Link de inscrição em breve
            </span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="/#inicio" className="footer__brand">LK OPEN</a>
        <p>3ª edição · 12 e 13 de dezembro</p>
        <a href="/edicoes">Ver todas as edições ↑</a>
      </footer>
    </>
  )
}

export default ThirdEdition
