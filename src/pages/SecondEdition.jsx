import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import useScrollMotion from '../hooks/useScrollMotion'
import usePageMeta from '../hooks/usePageMeta'
import '../styles/home.css'
import '../styles/experience.css'
import '../styles/second-edition.css'

const champions = [
  {
    category: 'Masculino Estreante',
    duo: 'Fofinho e Antônio',
    image: '/images/second-edition/champions/masculino-estreante-foinho-antonio.jpeg',
  },
  {
    category: 'Misto Estreante',
    duo: 'Rodrigo e Thais',
    image: '/images/second-edition/champions/misto-estreante-rodrigo-thais.jpeg',
  },
  {
    category: 'Masculino Iniciante',
    duo: 'Capixaba e Fortuna',
    image: '/images/second-edition/champions/masculino-iniciante-capixaba-fortuna.jpeg',
  },
  {
    category: 'Misto Iniciante',
    duo: 'Zé Borboleta e Juliana',
    image: '/images/second-edition/champions/misto-iniciante-ze-borboleta-juliana.jpeg',
  },
  {
    category: 'Feminino Iniciante',
    duo: 'Giu e Lu',
    image: '/images/second-edition/champions/feminino-iniciante-giu-lu.jpeg',
  },
  {
    category: 'Amador B + C',
    duo: 'JP e Ferretti',
    image: '/images/second-edition/champions/amador-b-c-jp-ferretti.jpeg',
  },
]

const contentViews = [
  { label: 'Posts', value: '1,6 mi', width: '100%' },
  { label: 'Reels', value: '869 mil', width: '54.3%' },
  { label: 'Stories', value: '160 mil', width: '10%' },
]

const ageRanges = [
  { label: '13–17', value: '1,9%', width: '4.7%' },
  { label: '18–24', value: '27,4%', width: '67.8%' },
  { label: '25–34', value: '40,4%', width: '100%' },
  { label: '35–44', value: '20,8%', width: '51.5%' },
  { label: '45–54', value: '7,6%', width: '18.8%' },
  { label: '55–64', value: '1,6%', width: '4%' },
  { label: '65+', value: '0,3%', width: '1%' },
]

function SecondEdition() {
  const carouselRef = useRef(null)
  const [activeChampion, setActiveChampion] = useState(0)
  useScrollMotion()
  usePageMeta('Segunda edição | LK Open', 'Conheça as duplas campeãs, fotos e registros da segunda edição do LK Open.')

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Segunda edição | LK Open'
    const anchor = window.location.hash && document.getElementById(window.location.hash.slice(1))
    if (anchor) requestAnimationFrame(() => anchor.scrollIntoView())
    else window.scrollTo(0, 0)
    return () => { document.title = previousTitle }
  }, [])

  const moveCarousel = (direction) => {
    const carousel = carouselRef.current
    if (!carousel) return
    const nextChampion = (activeChampion + direction + champions.length) % champions.length
    const nextCard = carousel.children[nextChampion]

    setActiveChampion(nextChampion)
    carousel.scrollTo({
      left: nextCard.offsetLeft - carousel.offsetLeft,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Navbar />

      <main className="second-page" id="conteudo">
        <section className="second-hero">
          <img
            className="second-hero__image"
            src="/images/second-edition/hero-night-action.jpeg"
            alt="Atleta executando uma bicicleta durante a segunda edição do LK Open"
          />
          <div className="second-hero__shade" />
          <div className="second-hero__copy">
            <a className="second-hero__back" href="/edicoes">← Todas as edições</a>
            <p className="eyebrow">LK Open · Edição 02</p>
            <h1>
              <span className="second-hero__line">A competição</span>
              <span className="second-hero__line second-hero__accent">subiu o nível.</span>
            </h1>
            <p>Mais quadra, mais histórias e uma nova coleção de momentos que marcaram o LK Open.</p>
            <a className="second-hero__jump" href="#campeoes">Ver campeões <span>↓</span></a>
          </div>
          <span className="second-hero__number" aria-hidden="true">02</span>
        </section>

        <section className="second-story section" data-reveal>
          <div className="second-story__title">
            <p className="eyebrow eyebrow--dark">O segundo capítulo</p>
            <h2>Um evento com<br />identidade própria.</h2>
          </div>
          <div className="second-story__copy">
            <span>02</span>
            <p>
              A segunda edição levou novamente atletas, torcida e parceiros para perto da areia.
              Aqui, o arquivo do evento ganha espaço para contar a competição pelas imagens reais
              de quem esteve dentro e fora da quadra.
            </p>
          </div>
        </section>

        <section className="second-gallery" aria-label="Momentos da segunda edição">
          <figure className="second-gallery__main" data-reveal>
            <img src="/images/second-edition/women-action.jpeg" alt="Atleta cabeceando a bola durante a segunda edição do LK Open" loading="lazy" />
            <figcaption>Dentro da quadra</figcaption>
          </figure>
          <figure className="second-gallery__side" data-reveal data-delay="150">
            <img src="/images/second-edition/web/men-champions.jpg" alt="Atletas premiados na segunda edição do LK Open" loading="lazy" />
            <figcaption>Depois do último ponto</figcaption>
          </figure>
        </section>

        <section className="second-insights section" id="impacto" aria-labelledby="second-insights-title">
          <header className="second-insights__heading" data-reveal>
            <div>
              <p className="eyebrow eyebrow--dark">Impacto digital · 30 dias</p>
              <h2 id="second-insights-title">2.612.229<br /><span>visualizações.</span></h2>
            </div>
            <p>O conteúdo da segunda edição atravessou a quadra e alcançou uma audiência majoritariamente nova.</p>
          </header>

          <div className="second-insights__metrics" data-reveal data-delay="100">
            <article><strong>530.440</strong><span>visualizadores</span></article>
            <article><strong>101.677</strong><span>interações</span></article>
            <article><strong>13.734</strong><span>visitas ao perfil</span></article>
            <article><strong>355</strong><span>toques no link da bio</span></article>
            <article><strong>+824</strong><span>seguidores líquidos</span></article>
          </div>

          <div className="second-insights__panels">
            <article className="insight-panel" data-reveal>
              <div className="insight-panel__top">
                <span>Visualizações por formato</span>
                <strong>Conteúdo</strong>
              </div>
              <div className="insight-bars">
                {contentViews.map((item) => (
                  <div className="insight-bar" key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                    <i aria-hidden="true"><b style={{ '--insight-width': item.width }} /></i>
                  </div>
                ))}
              </div>
              <p><strong>85,5%</strong> das visualizações vieram de pessoas que ainda não seguiam o perfil.</p>
            </article>

            <article className="insight-panel" data-reveal data-delay="120">
              <div className="insight-panel__top">
                <span>Quem acompanhou</span>
                <strong>Público</strong>
              </div>
              <div className="insight-gender">
                <div><span>Homens</span><strong>70,5%</strong></div>
                <div><span>Mulheres</span><strong>29,5%</strong></div>
                <i aria-hidden="true"><b /><b /></i>
              </div>
              <div className="insight-ages" aria-label="Distribuição do público por faixa etária">
                {ageRanges.map((item) => (
                  <div key={item.label}>
                    <span>{item.label}</span>
                    <i aria-hidden="true"><b style={{ '--insight-width': item.width }} /></i>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
              <p className="insight-location"><strong>96,5%</strong> da audiência estava no Brasil.</p>
            </article>
          </div>

          <small className="second-insights__source">Fonte: Instagram Insights da segunda edição do LK Open · período de 30 dias.</small>
        </section>

        <section className="second-categories" id="campeoes">
          <header className="second-categories__header section" data-reveal>
            <div>
              <p className="eyebrow">Campeões da segunda edição</p>
              <h2>As duplas que<br />levaram o título.</h2>
            </div>
            <div className="second-categories__controls" aria-label="Controles do carrossel de campeões">
              <button type="button" onClick={() => moveCarousel(-1)} aria-label="Ver dupla campeã anterior">←</button>
              <button type="button" onClick={() => moveCarousel(1)} aria-label="Ver próxima dupla campeã">→</button>
            </div>
          </header>

          <div className="second-categories__track" ref={carouselRef}>
            {champions.map((champion, index) => (
              <article
                className={`champion-card${index === activeChampion ? ' champion-card--active' : ''}`}
                aria-current={index === activeChampion ? 'true' : undefined}
                key={champion.category}
              >
                <div className="champion-card__visual">
                  <img
                    src={champion.image}
                    alt={`${champion.duo}, campeões da categoria ${champion.category} na segunda edição do LK Open`}
                    loading="lazy"
                  />
                  <span>Campeões</span>
                </div>
                <div className="champion-card__copy">
                  <small>{String(index + 1).padStart(2, '0')} · {champion.category}</small>
                  <h3>{champion.duo}</h3>
                </div>
              </article>
            ))}
          </div>

          <p className="second-categories__note section">
            Seis categorias. Seis duplas campeãs. Um novo capítulo marcado na história do LK Open.
          </p>
        </section>

        <section className="second-closing section" data-reveal>
          <p className="eyebrow eyebrow--dark">A história continua</p>
          <h2>Dois capítulos<br />já estão na areia.</h2>
          <div>
            <p>A próxima edição já tem lugar reservado nesta história.</p>
            <a className="button" href="/edicoes/terceira-edicao">Conhecer a 3ª edição →</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="/#inicio" className="footer__brand">LK OPEN</a>
        <p>Segunda edição · Arquivo oficial</p>
        <a href="/edicoes">Ver todas as edições ↑</a>
      </footer>
    </>
  )
}

export default SecondEdition
