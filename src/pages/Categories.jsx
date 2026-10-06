import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ThirdEditionCta from '../components/ThirdEditionCta'
import useScrollMotion from '../hooks/useScrollMotion'
import usePageMeta from '../hooks/usePageMeta'
import '../styles/home.css'
import '../styles/experience.css'
import '../styles/categories.css'

const categories = [
  {
    number: '01',
    slug: 'masculino-estreante',
    group: 'Dupla masculina',
    title: 'Masculino Estreante',
    phrase: 'A porta de entrada para a competição.',
    how: 'Disputada por duplas masculinas na faixa estreante. A categoria apresenta o ritmo de um torneio em confrontos entre atletas com experiência competitiva compatível.',
    audience: 'Para quem está começando a competir ou vivendo suas primeiras experiências em campeonatos de futevôlei.',
  },
  {
    number: '02',
    slug: 'misto-estreante',
    group: 'Dupla mista',
    title: 'Misto Estreante',
    phrase: 'Parceria, leitura de jogo e primeira experiência.',
    how: 'Formada por uma atleta e um atleta na faixa estreante. A dinâmica mista valoriza entrosamento, comunicação e construção conjunta de cada ponto.',
    audience: 'Para duplas mistas que estão iniciando a trajetória em torneios e querem competir com adversários de nível semelhante.',
  },
  {
    number: '03',
    slug: 'masculino-iniciante',
    group: 'Dupla masculina',
    title: 'Masculino Iniciante',
    phrase: 'Mais repertório. Um novo desafio.',
    how: 'Categoria de duplas masculinas que já possuem alguma vivência no esporte e começam a consolidar seu jogo dentro do ambiente competitivo.',
    audience: 'Para atletas iniciantes com prática mais regular, respeitando os critérios de nível definidos pelo regulamento da edição.',
  },
  {
    number: '04',
    slug: 'misto-iniciante',
    group: 'Dupla mista',
    title: 'Misto Iniciante',
    phrase: 'Técnica e sintonia dividindo a mesma quadra.',
    how: 'Reúne uma atleta e um atleta no nível iniciante. Os jogos exigem organização da dupla, adaptação e estratégia para evoluir ponto a ponto.',
    audience: 'Para duplas mistas que já treinam com frequência e buscam uma experiência competitiva mais intensa.',
  },
  {
    number: '05',
    slug: 'feminino-iniciante',
    group: 'Dupla feminina',
    title: 'Feminino Iniciante',
    phrase: 'Espaço para competir, evoluir e protagonizar.',
    how: 'Disputada por duplas femininas do nível iniciante, com partidas pensadas para estimular evolução técnica e experiência de campeonato.',
    audience: 'Para atletas que já praticam futevôlei e querem desenvolver seu jogo em uma chave feminina competitiva.',
  },
  {
    number: '06',
    slug: 'amador-b-c',
    group: 'Nível amador',
    title: 'Amador B + C',
    phrase: 'Experiência, intensidade e alto nível amador.',
    how: 'Reúne os níveis amadores B e C em um formato competitivo definido pelo regulamento de cada edição do LK Open.',
    audience: 'Para atletas amadores enquadrados nesses níveis e prontos para confrontos de maior intensidade e exigência técnica.',
  },
]

function Categories() {
  useScrollMotion()
  usePageMeta('Categorias | LK Open', 'Conheça as categorias disputadas no LK Open e entenda para quem cada nível foi pensado.')

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Categorias | LK Open'
    const anchor = window.location.hash && document.getElementById(window.location.hash.slice(1))
    if (anchor) {
      anchor.open = true
      requestAnimationFrame(() => anchor.scrollIntoView({ block: 'start' }))
    } else window.scrollTo(0, 0)
    return () => { document.title = previousTitle }
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Navbar />

      <main className="categories-page" id="conteudo">
        <header className="categories-hero">
          <div className="categories-hero__copy">
            <p className="eyebrow">Para todos os momentos do jogo</p>
            <h1>Categorias<span>.</span></h1>
            <p>Do primeiro campeonato ao nível amador, cada categoria cria uma disputa equilibrada e uma experiência própria dentro do LK Open.</p>
            <a href="#lista-categorias">Conheça as categorias <span aria-hidden="true">↓</span></a>
          </div>

          <div className="categories-hero__visual" aria-hidden="true">
            <span className="categories-hero__index">06</span>
            <img src="/images/home/history-embrace.jpg" alt="" />
            <p>categorias<br />em quadra</p>
          </div>
          <span className="categories-hero__outline" aria-hidden="true">JOGO</span>
        </header>

        <section className="categories-intro section" aria-labelledby="categories-intro-title">
          <p className="categories-intro__number" data-reveal>01 — 06</p>
          <div data-reveal data-delay="100">
            <p className="eyebrow eyebrow--dark">Encontre a sua disputa</p>
            <h2 id="categories-intro-title">Cada nível tem<br />seu momento.</h2>
          </div>
          <p className="categories-intro__text" data-reveal data-delay="200">
            As divisões aproximam atletas com experiências semelhantes. Abra cada categoria para entender sua formação e para quem ela foi pensada.
          </p>
        </section>

        <section className="categories-list section" id="lista-categorias" aria-label="Categorias do LK Open">
          {categories.map((category, index) => (
            <details className="category-row" id={category.slug} data-reveal data-delay={(index % 3) * 80} key={category.title}>
              <summary>
                <span className="category-row__number">{category.number}</span>
                <span className="category-row__heading">
                  <small>{category.group}</small>
                  <strong>{category.title}</strong>
                </span>
                <span className="category-row__phrase">{category.phrase}</span>
                <span className="category-row__toggle" aria-hidden="true" />
              </summary>

              <div className="category-row__reveal">
                <div className="category-row__body">
                  <div>
                    <span>Como funciona</span>
                    <p>{category.how}</p>
                  </div>
                  <div>
                    <span>Para quem é</span>
                    <p>{category.audience}</p>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </section>

        <aside className="categories-note section" data-reveal>
          <span>Importante</span>
          <p>O enquadramento de nível, os critérios de inscrição e o formato das chaves podem mudar entre edições. A validação final sempre segue o regulamento oficial do torneio.</p>
          <a href="/edicoes">Ver as edições <span aria-hidden="true">↗</span></a>
        </aside>
        <ThirdEditionCta />
      </main>

      <footer className="footer">
        <a href="/#inicio" className="footer__brand">LK OPEN</a>
        <p>Seu nível. Sua dupla. Seu jogo.</p>
        <a href="/#inicio">Voltar para a Home ↑</a>
      </footer>
    </>
  )
}

export default Categories
