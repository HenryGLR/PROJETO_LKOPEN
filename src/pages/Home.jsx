import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import BrandLogo from '../components/BrandLogo'
import useScrollMotion from '../hooks/useScrollMotion'
import usePageMeta from '../hooks/usePageMeta'
import '../styles/home.css'
import '../styles/experience.css'
import '../styles/revisions.css'

const historyEditions = [
  {
    edition: '01',
    title: 'O ponto de partida · edição 01',
    source: 'Fonte: mídia kit da primeira edição.',
    metrics: [
      { group: 'Digital', value: '705.183', label: 'visualizações', width: '100%' },
      { group: 'Digital', value: '41.723', label: 'contas alcançadas', width: '5.92%' },
      { group: 'Presencial', value: '600+', label: 'pessoas no torneio', width: '100%' },
      { group: 'Presencial', value: '200+', label: 'atletas participantes', width: '33.33%' },
    ],
  },
  {
    edition: '02',
    title: 'Um novo patamar · edição 02',
    source: 'Fonte: Instagram Insights da segunda edição · período de 30 dias.',
    metrics: [
      { group: 'Alcance', value: '2.612.229', label: 'visualizações', width: '100%' },
      { group: 'Alcance', value: '530.440', label: 'visualizadores', width: '20.3%' },
      { group: 'Ação', value: '13.734', label: 'visitas ao perfil', width: '100%' },
      { group: 'Ação', value: '355', label: 'toques no link da bio', width: '2.59%' },
    ],
  },
]

const heroSlides = [
  {
    image: '/images/second-edition/web/hero-action.jpg',
    alt: 'Atleta da segunda edição do LK Open se preparando para tocar na bola',
    edition: 'Edição 02',
    caption: 'A competição subiu de nível.',
    position: '54% 8%',
  },
  {
    image: '/images/home/history-handshake.jpg',
    alt: 'Atletas se cumprimentando na primeira edição do LK Open',
    edition: 'Edição 01',
    caption: 'O primeiro capítulo da nossa história.',
    position: '52% center',
  },
  {
    image: '/images/second-edition/hero-night-action.jpeg',
    alt: 'Atleta executando uma bicicleta na segunda edição do LK Open',
    edition: 'Edição 02',
    caption: 'Noite de jogo, areia e espetáculo.',
    position: '52% 42%',
  },
]

function Home() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0)
  const [heroIsChanging, setHeroIsChanging] = useState(false)
  const [activeHistoryEdition, setActiveHistoryEdition] = useState(0)
  const [historyIsChanging, setHistoryIsChanging] = useState(false)
  const heroSlide = heroSlides[activeHeroSlide]
  const historyEdition = historyEditions[activeHistoryEdition]

  useScrollMotion()
  usePageMeta(
    'LK Open | Futevôlei em São Paulo',
    'Site oficial do LK Open. Conheça as edições, categorias e oportunidades de patrocínio do campeonato de futevôlei.',
  )

  useEffect(() => {
    const target = window.location.hash && document.getElementById(window.location.hash.slice(1))
    if (target) requestAnimationFrame(() => target.scrollIntoView())
    else window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let transitionTimer
    const editionTimer = window.setInterval(() => {
      setHistoryIsChanging(true)
      transitionTimer = window.setTimeout(() => {
        setActiveHistoryEdition((current) => (current + 1) % historyEditions.length)
        setHistoryIsChanging(false)
      }, 380)
    }, 3000)

    return () => {
      window.clearInterval(editionTimer)
      window.clearTimeout(transitionTimer)
    }
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let transitionTimer
    const slideTimer = window.setInterval(() => {
      setHeroIsChanging(true)
      transitionTimer = window.setTimeout(() => {
        setActiveHeroSlide((current) => (current + 1) % heroSlides.length)
        setHeroIsChanging(false)
      }, 420)
    }, 3000)

    return () => {
      window.clearInterval(slideTimer)
      window.clearTimeout(transitionTimer)
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Navbar />

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero__wordmark" aria-hidden="true">OPEN</div>
          <div className="hero__court" aria-hidden="true"><span /></div>
          <div className="hero__content">
            <p className="eyebrow">LK Open · Futevôlei em São Paulo</p>
            <h1>
              <span className="hero__line">A areia</span>
              <span className="hero__line hero__line--accent">vira</span>
              <span className="hero__line">arena.</span>
            </h1>
            <p className="hero__lead">
              Competição, comunidade e experiência em um evento feito para quem vive o esporte.
            </p>
            <div className="hero__actions">
              <a className="button hero__signup" href="/edicoes/terceira-edicao">
                Inscreva-se agora <span aria-hidden="true">→</span>
              </a>
              <div className="hero__secondary-actions">
                <a className="button button--ghost" href="/patrocinio">Seja patrocinador</a>
                <a className="hero__editions-link" href="/edicoes">Conheça as edições ↗</a>
              </div>
            </div>
          </div>

          <div
            className={`hero__visual${heroIsChanging ? ' is-changing' : ''}`}
            style={{ '--hero-position': heroSlide.position }}
            aria-label={`${heroSlide.edition}: ${heroSlide.caption}`}
          >
            <img
              src={heroSlide.image}
              alt={heroSlide.alt}
              fetchPriority="high"
            />
            <span className="hero__edition">{heroSlide.edition} <BrandLogo compact /></span>
            <p>{heroSlide.caption}</p>
            <div className="hero__slides" aria-hidden="true">
              {heroSlides.map((slide, index) => (
                <span className={index === activeHeroSlide ? 'is-active' : ''} key={`${slide.edition}-${slide.image}`} />
              ))}
            </div>
          </div>

          <div className="hero__stamp" aria-hidden="true">
            <BrandLogo />
          </div>

          <div className="hero__scroll" aria-hidden="true">
            <span /> Role para entrar em quadra
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker__track">
            <span>Futevôlei</span><i>✦</i><span>Competição</span><i>✦</i>
            <span>Experiência</span><i>✦</i><span>Comunidade</span><i>✦</i>
            <span>Futevôlei</span><i>✦</i><span>Competição</span><i>✦</i>
            <span>Experiência</span><i>✦</i><span>Comunidade</span><i>✦</i>
          </div>
        </div>

        <section className="section edition" id="edicoes">
          <div className="section__heading" data-reveal>
            <div>
              <p className="eyebrow eyebrow--dark">Nossa história</p>
              <h2>Duas edições.<br />A próxima vem aí.</h2>
            </div>
          </div>

          <div className="history-story">
            <div className="history-story__left" data-reveal>
              <p className="history-story__intro">
                O LK Open já escreveu dois capítulos na areia. Veja o crescimento do evento
                e os números que prepararam o próximo capítulo.
              </p>
              <div className="history-story__photos">
                <figure className="history-story__photo history-story__photo--team">
                  <img
                    src="/images/home/history-team.jpg"
                    alt="Dois atletas vestindo o uniforme do LK Open"
                    loading="lazy"
                  />
                  <figcaption>1ª edição · Quem entra em quadra faz parte da história.</figcaption>
                </figure>
                <figure className="history-story__photo history-story__photo--embrace">
                  <img
                    src="/images/home/history-embrace.jpg"
                    alt="Atletas se abraçando após uma partida do LK Open"
                    loading="lazy"
                  />
                  <figcaption>1ª edição · Competição que também vira encontro.</figcaption>
                </figure>
                <figure className="history-story__photo history-story__photo--handshake">
                  <img
                    src="/images/home/history-handshake.jpg"
                    alt="Atletas apertando as mãos durante a primeira edição do LK Open"
                    loading="lazy"
                  />
                  <figcaption>1ª edição · Respeito antes e depois de cada ponto.</figcaption>
                </figure>
              </div>
            </div>

            <div
              className="history-chart is-visible"
              aria-label={`Gráficos dos números da edição ${historyEdition.edition}`}
            >
              <div className={`history-chart__content${historyIsChanging ? ' is-changing' : ''}`}>
                <div className="history-chart__top">
                  <span>{historyEdition.title}</span>
                  <strong>{historyEdition.edition} / 02</strong>
                </div>
                <div className="history-chart__metrics">
                  {historyEdition.metrics.map((item, index) => (
                    <article
                      className={`history-chart__metric${item.value.length > 7 ? ' history-chart__metric--compact' : ''}`}
                      key={`${index}-${item.group}`}
                    >
                      <small>{item.group}</small>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                      <span className="history-chart__track" aria-hidden="true">
                        <i style={{ '--metric-width': item.width }} />
                      </span>
                    </article>
                  ))}
                </div>
                <small>{historyEdition.source}</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section gallery" id="galeria">
          <div className="section__heading section__heading--gallery">
            <div>
              <p className="eyebrow">Dentro do evento</p>
              <h2>Um filme para<br />reviver a arena.</h2>
            </div>
            <p>Assista aos movimentos, encontros e momentos que fizeram parte da experiência LK Open.</p>
          </div>

          <div className="event-video" aria-label="Vídeo oficial do LK Open">
            <div className="event-video__screen">
              <video
                controls
                playsInline
                preload="metadata"
                src="/videos/lk-open-oficial.mp4"
                aria-label="Vídeo com momentos do LK Open"
              >
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
            </div>
            <div className="event-video__meta">
              <span>LK Open · Filme oficial</span>
              <span>01:30 · Aperte o play</span>
            </div>
          </div>
          <a className="gallery__page-link button button--light" href="/galeria">
            Abrir galeria completa →
          </a>
        </section>

        <section className="home-next section" id="proxima-edicao" aria-labelledby="home-next-title">
          <div className="home-next__number" aria-hidden="true">03</div>
          <div className="home-next__copy" data-reveal>
            <p className="eyebrow eyebrow--dark">Próximo capítulo</p>
            <h2 id="home-next-title">A 3ª edição<br />vem aí.</h2>
            <p>Sem promessas antes da hora: todas as informações oficiais aparecerão na página da edição quando forem confirmadas.</p>
            <div>
              <a className="button button--dark" href="/edicoes/terceira-edicao">Acompanhar a 3ª edição</a>
              <a className="home-next__all" href="/edicoes">Ver todas as edições ↗</a>
            </div>
          </div>
        </section>

      </main>

      <footer className="footer">
        <a href="/#inicio" className="footer__brand">LK OPEN</a>
        <p>Competição. Comunidade. Futevôlei.</p>
        <a href="/#inicio">Voltar ao topo ↑</a>
      </footer>
    </>
  )
}

export default Home
