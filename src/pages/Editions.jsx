import { useEffect } from 'react'
import BrandLogo from '../components/BrandLogo'
import Navbar from '../components/Navbar'
import useScrollMotion from '../hooks/useScrollMotion'
import usePageMeta from '../hooks/usePageMeta'
import '../styles/home.css'
import '../styles/experience.css'
import '../styles/editions.css'

const editions = [
  {
    number: '01',
    status: 'Realizada',
    title: 'Primeira edição',
    summary: 'A estreia que reuniu mais de 200 atletas, mais de 600 pessoas e colocou o LK Open em quadra.',
    detail: 'Venice Beach Club · São Paulo',
    image: '/images/lkopen-premiacao.jpg',
    href: '/edicoes/primeira-edicao',
    cta: 'Saber mais',
  },
  {
    number: '02',
    status: 'Realizada',
    title: 'Segunda edição',
    summary: 'Uma nova rodada de disputas, encontros e pódios registrada pelas lentes dentro e fora da quadra.',
    detail: 'Arquivo da segunda edição',
    image: '/images/second-edition/web/hero-action.jpg',
    href: '/edicoes/segunda-edicao',
    cta: 'Ver a edição',
  },
  {
    number: '03',
    status: 'Vem aí',
    title: 'Terceira edição',
    summary: 'O próximo capítulo do LK Open já tem lugar reservado. As informações oficiais serão divulgadas em breve.',
    detail: 'Data e local em breve',
    image: '/images/second-edition/web/ball-detail.jpg',
    href: '/edicoes/terceira-edicao',
    cta: 'Acompanhar novidades',
  },
]

function Editions() {
  useScrollMotion()
  usePageMeta('Edições | LK Open', 'Reviva cada edição do LK Open e acompanhe os próximos capítulos do campeonato.')

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Edições | LK Open'
    window.scrollTo(0, 0)
    return () => { document.title = previousTitle }
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Navbar />

      <main className="editions-page" id="conteudo">
        <header className="editions-page__hero">
          <div className="editions-page__hero-copy">
            <p className="eyebrow">A história do campeonato</p>
            <h1>Edições<span>.</span></h1>
            <p>Cada torneio tem sua própria história. Entre em cada edição para reviver os jogos, os números e os momentos.</p>
          </div>
          <div className="editions-page__hero-images" aria-hidden="true">
            <img src="/images/lkopen-jogada.jpg" alt="" />
            <img src="/images/home/history-team.jpg" alt="" />
          </div>
          <span className="editions-page__hero-outline" aria-hidden="true"><BrandLogo /></span>
        </header>

        <section className="editions-page__list section" aria-labelledby="editions-title">
          <div className="editions-page__list-heading" data-reveal>
            <p className="eyebrow eyebrow--dark">Arquivo LK Open</p>
            <h2 id="editions-title">Escolha uma edição.</h2>
          </div>

          <div className="editions-page__entries">
            {editions.map((edition, index) => (
              <article className="edition-entry" data-reveal data-delay={index * 120} key={edition.number}>
                <a href={edition.href} aria-label={`${edition.cta}: ${edition.title}`}>
                  <div className="edition-entry__number">
                    <small>Edição</small>
                    <strong>{edition.number}</strong>
                  </div>
                  <div className="edition-entry__image">
                    <img src={edition.image} alt="" loading="lazy" />
                    <span>{edition.status}</span>
                  </div>
                  <div className="edition-entry__copy">
                    <p>{edition.detail}</p>
                    <h3>{edition.title}</h3>
                    <span>{edition.summary}</span>
                    <strong>{edition.cta} ↗</strong>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="/#inicio" className="footer__brand">LK OPEN</a>
        <p>Um campeonato. Muitas histórias.</p>
        <a href="/#inicio">Voltar para a Home ↑</a>
      </footer>
    </>
  )
}

export default Editions
