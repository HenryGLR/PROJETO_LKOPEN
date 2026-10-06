import { useEffect } from 'react'
import BrandLogo from '../components/BrandLogo'
import Navbar from '../components/Navbar'
import ThirdEditionCta from '../components/ThirdEditionCta'
import useScrollMotion from '../hooks/useScrollMotion'
import usePageMeta from '../hooks/usePageMeta'
import '../styles/home.css'
import '../styles/experience.css'
import '../styles/sponsorship.css'

const plans = [
  {
    tier: 'Ouro',
    price: 'R$ 5.000',
    placement: 'Frente da camisa',
    side: 'frente',
    className: 'gold',
    deliveries: ['Quadra principal', 'Backdrop oficial', 'Divulgação especial', 'Presença na camisa oficial'],
  },
  {
    tier: 'Prata',
    price: 'R$ 3.000',
    placement: 'Duas mangas da camisa',
    side: 'frente',
    className: 'silver',
    deliveries: ['Quadra secundária', 'Backdrop oficial', 'Redes sociais', 'Marca nas duas mangas da camisa'],
  },
  {
    tier: 'Bronze',
    price: 'R$ 800',
    placement: 'Costas da camisa',
    side: 'costas',
    className: 'bronze',
    deliveries: ['Costas da camisa', 'Backdrop oficial', 'Divulgação nas redes sociais'],
  },
]

const whatsappNumber = '5511994814513'
const whatsappLink = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

function Sponsorship() {
  useScrollMotion()
  usePageMeta('Patrocínio | LK Open', 'Conheça as cotas, entregas e espaços de marca disponíveis para patrocinadores do LK Open.')

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Patrocínio | LK Open'
    const anchor = window.location.hash && document.getElementById(window.location.hash.slice(1))
    if (anchor) requestAnimationFrame(() => anchor.scrollIntoView())
    else window.scrollTo(0, 0)
    return () => { document.title = previousTitle }
  }, [])

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Navbar />

      <main className="sponsorship-page" id="conteudo">
        <header className="sponsorship-hero">
          <div className="sponsorship-hero__copy">
            <p className="eyebrow">Patrocínio LK Open</p>
            <h1>Sua marca<br /><span>entra no jogo.</span></h1>
            <p>Presença na arena, no uniforme e no conteúdo de um evento conectado à comunidade do futevôlei.</p>
            <div>
              <a className="button button--primary" href="#cotas">Conhecer as cotas</a>
              <a
                className="button button--ghost"
                href={whatsappLink('Olá! Quero conhecer as oportunidades de patrocínio do LK Open.')}
                target="_blank"
                rel="noreferrer"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
          <div className="sponsorship-hero__mark" aria-hidden="true"><BrandLogo /></div>
          <div className="sponsorship-hero__proof">
            <span><strong>2.612.229</strong> visualizações em 30 dias</span>
            <span><strong>530.440</strong> visualizadores</span>
            <span><strong>101.677</strong> interações</span>
          </div>
        </header>

        <section className="sponsor-audience section">
          <div className="sponsor-audience__heading" data-reveal>
            <p className="eyebrow eyebrow--dark">Por que o LK Open</p>
            <h2>Alcance que sai<br />da quadra.</h2>
          </div>
          <div className="sponsor-audience__charts" data-reveal data-delay="120">
            <div className="sponsor-bar">
              <span>Descoberta de marca</span>
              <strong>85,5%</strong>
              <i aria-hidden="true"><b style={{ '--bar': '85.5%' }} /></i>
              <p>das visualizações vieram de pessoas que ainda não seguiam o perfil.</p>
            </div>
            <div className="sponsor-bar">
              <span>Público principal</span>
              <strong>67,8%</strong>
              <i aria-hidden="true"><b style={{ '--bar': '67.8%' }} /></i>
              <p>do público tinha entre 18 e 34 anos.</p>
            </div>
            <div className="sponsor-bar">
              <span>Presença nacional</span>
              <strong>96,5%</strong>
              <i aria-hidden="true"><b style={{ '--bar': '96.5%' }} /></i>
              <p>da audiência estava no Brasil.</p>
            </div>
            <small>Fonte: Instagram Insights da segunda edição · período de 30 dias.</small>
          </div>
        </section>

        <section className="brand-spaces">
          <div className="brand-spaces__intro section" data-reveal>
            <p className="eyebrow">Inventário de marca</p>
            <h2>Onde sua marca<br />pode aparecer.</h2>
            <p>Uma entrega real da segunda edição. Formato, tamanho e localização final são alinhados com a organização.</p>
          </div>

          <div className="brand-spaces__court section">
            <figure className="backdrop-preview">
              <img
                src="/images/sponsorship/backdrop-lk-open.jpeg"
                alt="Backdrop do LK Open com as marcas patrocinadoras na arena"
                loading="lazy"
              />
              <figcaption>
                <span>Entrega real · 2ª edição</span>
                <strong>Backdrop oficial</strong>
              </figcaption>
            </figure>
            <div className="brand-spaces__court-copy" data-reveal="right">
              <span>01 · Backdrop</span>
              <h3>Sua marca dentro do registro oficial.</h3>
              <ul>
                <li>Quadra principal e quadra secundária</li>
                <li>Rede, placas e backdrop de premiação</li>
                <li>Ativações presenciais e espaços de marca</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="uniform-placements section" id="cotas">
          <div className="uniform-placements__heading" data-reveal>
            <p className="eyebrow eyebrow--dark">Catálogo de patrocínio</p>
            <h2>Cada cota ocupa<br />uma posição.</h2>
            <p>Veja as posições no uniforme e a opção de dar o nome da sua marca a uma das quadras.</p>
          </div>

          <div className="uniform-placements__grid">
            {plans.map((plan, index) => (
              <article className={`uniform-card uniform-card--${plan.className}`} data-reveal data-delay={index * 100} key={plan.tier}>
                <div className="uniform-card__top">
                  <span>Cota {plan.tier}</span>
                  <strong>{plan.price}</strong>
                </div>
                <div className={`jersey-3d jersey-3d--${plan.side}`} aria-label={`Simulação tridimensional. Marca em: ${plan.placement}`}>
                  <div className="jersey-3d__stage">
                    <div className="jersey-3d__shadow" aria-hidden="true" />
                    <div className="jersey-3d__model">
                      <div className="jersey-3d__shirt">
                        <span className="jersey-3d__collar" aria-hidden="true" />
                        <span className="jersey-3d__crest" aria-hidden="true">LK<br />OPEN</span>
                        <span className={`jersey-3d__brand jersey-3d__brand--${plan.className}`}>SUA MARCA</span>
                        {plan.className === 'silver' && (
                          <span className="jersey-3d__brand jersey-3d__brand--silver-secondary">SUA MARCA</span>
                        )}
                        <span className="jersey-3d__seam" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  <div className="jersey-3d__legend">
                    <span>Vista de {plan.side}</span>
                    <strong>{plan.placement}</strong>
                  </div>
                </div>
                <ul>
                  {plan.deliveries.map((delivery) => <li key={delivery}>{delivery}</li>)}
                </ul>
                <a
                  href={whatsappLink(`Olá! Tenho interesse na cota ${plan.tier} do LK Open e gostaria de mais informações.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Conversar sobre a cota <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>

          <article className="court-package">
            <figure className="court-package__visual">
              <img
                src="/images/sponsorship/cota-quadra.jpg"
                alt="Faixa de patrocinador instalada na lateral de uma quadra do LK Open"
                loading="lazy"
              />
              <figcaption>Exemplo real de exposição na quadra</figcaption>
            </figure>
            <div className="court-package__content">
              <div className="court-package__top">
                <span>Cota Quadra</span>
                <strong>R$ 2.000</strong>
              </div>
              <p className="eyebrow eyebrow--dark">Naming rights</p>
              <h3>A quadra leva<br />o nome da sua marca.</h3>
              <p>
                Sua empresa passa a identificar uma das quadras do LK Open, com presença visual
                no espaço onde as partidas acontecem.
              </p>
              <ul>
                <li>Nome da marca na identificação da quadra</li>
                <li>Faixa de exposição instalada no espaço</li>
                <li>Visibilidade durante os jogos realizados na quadra</li>
              </ul>
              <a
                href={whatsappLink('Olá! Tenho interesse na Cota Quadra de R$ 2.000 do LK Open e gostaria de mais informações.')}
                target="_blank"
                rel="noreferrer"
              >
                Conversar sobre a Cota Quadra <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <article className="support-package">
            <div className="support-package__heading">
              <span>Cota Apoio</span>
              <strong>Permuta / sob consulta</strong>
            </div>
            <div className="support-package__content">
              <div>
                <p className="eyebrow eyebrow--dark">Parcerias de apoio</p>
                <h3>Sua entrega ajuda<br />o evento a acontecer.</h3>
              </div>
              <div>
                <p>Uma cota própria para marcas que apoiam a experiência com serviços ou fornecimento para atletas, equipe e público.</p>
                <ul>
                  <li>Água e hidratação</li>
                  <li>Alimentação</li>
                  <li>Brindes para atletas</li>
                  <li>Produtos e serviços</li>
                </ul>
                <a
                  href={whatsappLink('Olá! Tenho interesse na Cota Apoio do LK Open e gostaria de alinhar uma parceria.')}
                  target="_blank"
                  rel="noreferrer"
                >
                  Montar uma parceria de apoio <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        </section>

        <section className="sponsor-journey section">
          <div data-reveal>
            <p className="eyebrow">A parceria completa</p>
            <h2>Antes, durante<br />e depois.</h2>
          </div>
          <ol>
            <li data-reveal><span>01</span><strong>Antes</strong><p>Anúncios, conteúdo social e comunicação oficial preparam o público.</p></li>
            <li data-reveal data-delay="100"><span>02</span><strong>Durante</strong><p>Uniforme, arena e ativações colocam a marca dentro da experiência.</p></li>
            <li data-reveal data-delay="200"><span>03</span><strong>Depois</strong><p>Registros, vídeos e conteúdos prolongam a exposição do evento.</p></li>
          </ol>
        </section>

        <section className="sponsor-contact section" data-reveal>
          <BrandLogo />
          <p className="eyebrow">Vamos construir juntos</p>
          <h2>Qual espaço combina<br />com a sua marca?</h2>
          <div>
            <a
              className="button button--primary"
              href={whatsappLink('Olá! Quero conversar sobre uma proposta de patrocínio para o LK Open.')}
              target="_blank"
              rel="noreferrer"
            >
              Conversar no WhatsApp
            </a>
            <p><a href="mailto:lkopenassessoria@gmail.com">lkopenassessoria@gmail.com</a><br /><a href="tel:+5511994814513">(11) 99481-4513 · Lucas</a><br /><a href="tel:+5511972248088">(11) 97224-8088 · Guilherme</a></p>
          </div>
        </section>
        <ThirdEditionCta />
      </main>

      <footer className="footer">
        <a href="/#inicio" className="footer__brand">LK OPEN</a>
        <p>Parcerias que entram no jogo.</p>
        <a href="/#inicio">Voltar para a Home ↑</a>
      </footer>
    </>
  )
}

export default Sponsorship
