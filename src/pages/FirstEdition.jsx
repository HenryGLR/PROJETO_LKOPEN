import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import useScrollMotion from '../hooks/useScrollMotion'
import usePageMeta from '../hooks/usePageMeta'
import '../styles/home.css'
import '../styles/experience.css'
import '../styles/first-edition.css'
import '../styles/revisions.css'

const editionStats = [
  { count: 705183, suffix: '', label: 'visualizações' },
  { count: 41723, suffix: '', label: 'contas alcançadas' },
  { count: 200, suffix: '+', label: 'atletas participantes' },
  { count: 600, suffix: '+', label: 'pessoas no torneio' },
]

const podiums = [
  { category: 'Masculino Estreante', image: '/images/first-edition/podiums/masculino-estreante.jpg' },
  { category: 'Misto Estreante', image: '/images/first-edition/podiums/misto-estreante.jpg' },
  { category: 'Masculino Iniciante', image: '/images/first-edition/podiums/masculino-iniciante.jpg' },
  { category: 'Misto Iniciante', image: '/images/first-edition/podiums/misto-iniciante.jpg' },
  { category: 'Amador C', image: '/images/first-edition/podiums/amador-c.jpg' },
]

function FirstEdition() {
  const podiumTrackRef = useRef(null)
  const [activePodium, setActivePodium] = useState(0)
  useScrollMotion()
  usePageMeta('Primeira edição | LK Open', 'Números, momentos e história da primeira edição do LK Open em São Paulo.')

  const changePodium = (direction) => {
    const track = podiumTrackRef.current
    if (!track) return

    const nextPodium = (activePodium + direction + podiums.length) % podiums.length
    const nextCard = track.children[nextPodium]

    setActivePodium(nextPodium)
    track.scrollTo({
      left: nextCard.offsetLeft - track.offsetLeft,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Primeira edição | LK Open'
    const anchor = window.location.hash && document.getElementById(window.location.hash.slice(1))
    if (anchor) requestAnimationFrame(() => anchor.scrollIntoView())
    else window.scrollTo(0, 0)
    return () => { document.title = previousTitle }
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Navbar />

      <main className="edition-page" id="conteudo">
        <header className="edition-page__hero">
          <div className="edition-page__hero-photo">
            <img src="/images/home/history-handshake.jpg" alt="Atletas da primeira edição cumprimentando-se em quadra" />
          </div>
          <div className="edition-page__hero-copy">
            <a className="edition-page__back" href="/edicoes">← Todas as edições</a>
            <p className="eyebrow">Edição 01 · São Paulo</p>
            <h1>
              Primeira
              <span>edição.</span>
            </h1>
            <p>A edição que colocou o LK Open em quadra e transformou competição em comunidade.</p>
          </div>
          <span className="edition-page__number" aria-hidden="true">01</span>
          <div className="edition-page__place">
            <span>O palco</span>
            <strong>Venice Beach Club</strong>
            <small>Vila Gomes Cardim · São Paulo</small>
          </div>
        </header>

        <section className="edition-page__manifest section">
          <p className="eyebrow eyebrow--dark" data-reveal>Onde tudo começou</p>
          <div className="edition-page__manifest-grid">
            <h2 data-reveal>Um dia para<br />ficar na história.</h2>
            <div data-reveal data-delay="120">
              <p>
                A primeira edição reuniu esporte, disputa e conexão em um ambiente preparado para
                receber atletas, público e parceiros do futevôlei.
              </p>
              <p>
                Dentro da quadra, intensidade. Fora dela, uma comunidade vivendo cada ponto de perto.
              </p>
            </div>
          </div>
        </section>

        <section className="first-moments" id="quatro-atos" aria-labelledby="first-moments-title">
          <header className="first-moments__header section" data-reveal>
            <div>
              <p className="eyebrow">Dentro e fora da quadra</p>
              <h2 id="first-moments-title">O começo<br />em quatro atos.</h2>
            </div>
            <p>
              A primeira edição também foi feita de conexão, concentração e das pessoas que
              deram vida ao primeiro capítulo do LK Open.
            </p>
          </header>

          <div className="first-moments__grid section">
            <figure className="first-moments__photo first-moments__photo--connection" data-reveal="left">
              <img
                src="/images/first-edition/moments/protagonismo-feminino.jpeg"
                alt="Atleta da primeira edição segurando a bola durante o LK Open"
                loading="lazy"
              />
              <figcaption><span>01</span> Protagonismo</figcaption>
            </figure>
            <figure className="first-moments__photo first-moments__photo--court" data-reveal="right">
              <img
                src="/images/first-edition/moments/quadra.jpeg"
                alt="Atleta caminhando na quadra de areia da primeira edição"
                loading="lazy"
              />
              <figcaption><span>02</span> Em quadra</figcaption>
            </figure>
            <figure className="first-moments__photo first-moments__photo--portrait" data-reveal="left">
              <img
                src="/images/first-edition/moments/retrato-oculos.jpeg"
                alt="Retrato de atleta da primeira edição do LK Open"
                loading="lazy"
              />
              <figcaption><span>03</span> Concentração</figcaption>
            </figure>
            <figure className="first-moments__photo first-moments__photo--portrait" data-reveal="right">
              <img
                src="/images/first-edition/moments/sintonia-dupla.jpeg"
                alt="Dupla da primeira edição comemorando um ponto na quadra"
                loading="lazy"
              />
              <figcaption><span>04</span> Sintonia</figcaption>
            </figure>
          </div>
        </section>

        <section className="edition-page__numbers" aria-label="Números da primeira edição">
          <div className="edition-page__numbers-title section" data-reveal>
            <span>O impacto</span>
            <h2>Os números<br />da estreia.</h2>
          </div>
          <div className="edition-page__numbers-list">
            {editionStats.map((stat, index) => (
              <article data-reveal data-delay={index * 80} key={stat.label}>
                <small>0{index + 1}</small>
                <strong data-count={stat.count} data-suffix={stat.suffix}>0</strong>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="edition-page__story section">
          <figure className="edition-page__action" data-reveal="left">
            <img src="/images/lkopen-jogada.jpg" alt="Jogada de futevôlei durante o LK Open" loading="lazy" />
            <figcaption>A areia levantou. O nível também.</figcaption>
          </figure>
          <div className="edition-page__story-copy" data-reveal="right">
            <p className="eyebrow eyebrow--dark">A experiência</p>
            <h2>Mais que<br />um torneio.</h2>
            <p>
              O LK Open nasceu para entregar uma experiência completa: competição de alto nível,
              encontro entre atletas e uma atmosfera próxima para quem acompanha o esporte.
            </p>
            <ul>
              <li>Atletas no centro da experiência</li>
              <li>Público próximo de cada disputa</li>
              <li>Premiação e celebração no mesmo palco</li>
            </ul>
          </div>
        </section>

        <section className="edition-page__audience">
          <div className="section edition-page__audience-inner">
            <div data-reveal>
              <p className="eyebrow">Quem acompanhou</p>
              <h2>O jogo chegou<br />muito mais longe.</h2>
            </div>
            <div className="edition-page__reach" data-reveal data-delay="120">
              <div className="reach-chart">
                <div className="reach-chart__ring" style={{ '--reach': '77.5%' }}><strong>77,5%</strong></div>
                <p>das visualizações vieram de não seguidores</p>
              </div>
              <div className="reach-chart">
                <div className="reach-chart__ring" style={{ '--reach': '74.3%' }}><strong>74,3%</strong></div>
                <p>do público alcançado tinha entre 18 e 34 anos</p>
              </div>
              <p className="edition-page__source">Dados de visibilidade apresentados no mídia kit da edição.</p>
            </div>
          </div>
        </section>

        <section className="edition-page__moments section" id="podios">
          <header className="first-podiums__header" data-reveal>
            <div className="edition-page__moments-heading">
              <p className="eyebrow eyebrow--dark">Pódios da primeira edição</p>
              <h2>Quem subiu<br />ao pódio.</h2>
              <p>Cinco categorias. Cinco registros oficiais da primeira edição.</p>
            </div>
            <div className="first-podiums__controls" aria-label="Controles do carrossel de pódios">
              <span>{String(activePodium + 1).padStart(2, '0')} / {String(podiums.length).padStart(2, '0')}</span>
              <div>
                <button type="button" onClick={() => changePodium(-1)} aria-label="Categoria anterior">←</button>
                <button type="button" onClick={() => changePodium(1)} aria-label="Próxima categoria">→</button>
              </div>
            </div>
          </header>

          <div className="first-podiums__track" ref={podiumTrackRef} data-reveal>
            {podiums.map((podium, index) => (
              <article
                className={`first-podium-card${index === activePodium ? ' first-podium-card--active' : ''}`}
                aria-current={index === activePodium ? 'true' : undefined}
                key={podium.category}
              >
                <div className="first-podium-card__visual">
                  <img
                    src={podium.image}
                    alt={`Pódio da categoria ${podium.category} na primeira edição do LK Open`}
                    loading="lazy"
                  />
                  <span>Pódio</span>
                </div>
                <div className="first-podium-card__copy">
                  <small>{String(index + 1).padStart(2, '0')} · Categoria</small>
                  <h3>{podium.category}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="edition-page__next">
          <div className="section edition-page__next-inner" data-reveal>
            <p className="eyebrow">A história continua</p>
            <h2>Este foi apenas<br />o primeiro saque.</h2>
            <div>
              <p>Faça parte do próximo capítulo do LK Open.</p>
              <a className="button" href="/edicoes/terceira-edicao">Ir para a 3ª edição →</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="/#inicio" className="footer__brand">LK OPEN</a>
        <p>Primeira edição · São Paulo</p>
        <a href="/edicoes">Ver todas as edições ↑</a>
      </footer>
    </>
  )
}

export default FirstEdition
