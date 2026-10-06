import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ThirdEditionCta from '../components/ThirdEditionCta'
import usePageMeta from '../hooks/usePageMeta'
import useScrollMotion from '../hooks/useScrollMotion'
import '../styles/home.css'
import '../styles/experience.css'
import '../styles/gallery-page.css'

const galleryPhotos = Array.from({ length: 50 }, (_, index) => ({
  src: `/images/gallery/lk-gallery-${String(index + 1).padStart(3, '0')}.jpg`,
  alt: `Registro ${String(index + 1).padStart(2, '0')} do LK Open`,
}))

const heroPhotos = [galleryPhotos[48], galleryPhotos[49], galleryPhotos[22], galleryPhotos[35], galleryPhotos[44]]

function splitIntoBalancedSlides(photos, maxPerSlide = 5) {
  const slideCount = Math.ceil(photos.length / maxPerSlide)
  const baseSize = Math.floor(photos.length / slideCount)
  const largerSlides = photos.length % slideCount
  const slides = []
  let cursor = 0

  for (let index = 0; index < slideCount; index += 1) {
    const slideSize = baseSize + (index < largerSlides ? 1 : 0)
    slides.push(photos.slice(cursor, cursor + slideSize))
    cursor += slideSize
  }

  return slides
}

const gallerySlides = splitIntoBalancedSlides(galleryPhotos)

function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useScrollMotion()
  usePageMeta('Galeria | LK Open', '50 registros do LK Open reunidos em um arquivo visual dentro e fora da areia.')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const changeSlide = (direction) => {
    setCurrentSlide((current) => (current + direction + gallerySlides.length) % gallerySlides.length)
  }

  const activePhotos = gallerySlides[currentSlide]
  const firstPhotoNumber = gallerySlides
    .slice(0, currentSlide)
    .reduce((total, slide) => total + slide.length, 0)

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Navbar />

      <main className="gallery-page" id="conteudo">
        <header className="gallery-page__hero">
          <div className="gallery-page__hero-copy">
            <p className="eyebrow">Arquivo visual LK Open</p>
            <h1>Momentos<br /><span>em quadra.</span></h1>
            <p>50 registros que mostram o jogo, a parceria e a energia de quem viveu o LK Open dentro da areia.</p>
            <a href="#fotos">Ver todas as fotos <span aria-hidden="true">↓</span></a>
          </div>
          <div className="gallery-page__hero-stack" aria-label="Destaques da galeria">
            {heroPhotos.map((photo, index) => (
              <img key={photo.src} src={photo.src} alt={index === 0 ? 'Dupla unindo as mãos diante da rede do LK Open' : photo.alt} />
            ))}
          </div>
          <span className="gallery-page__outline" aria-hidden="true">LK</span>
        </header>

        <section className="gallery-archive section" id="fotos" aria-labelledby="gallery-title">
          <header className="gallery-archive__header">
            <div>
              <p className="eyebrow eyebrow--dark">Dentro e fora da areia</p>
              <h2 id="gallery-title">O evento<br />em imagens.</h2>
            </div>

            <div className="gallery-archive__navigation" aria-label="Navegação da galeria">
              <span>{String(currentSlide + 1).padStart(2, '0')} / {String(gallerySlides.length).padStart(2, '0')}</span>
              <button type="button" onClick={() => changeSlide(-1)} aria-label="Ver fotos anteriores">←</button>
              <button type="button" onClick={() => changeSlide(1)} aria-label="Ver próximas fotos">→</button>
            </div>
          </header>

          <div
            key={currentSlide}
            className={`gallery-mosaic${activePhotos.length === 5 ? ' gallery-mosaic--five' : ''}`}
            aria-live="polite"
            aria-label={`Grupo ${currentSlide + 1} de ${gallerySlides.length}`}
          >
            {activePhotos.map((photo, index) => (
              <figure className="gallery-mosaic__item" key={photo.src}>
                <img src={photo.src} alt={photo.alt} loading={currentSlide === 0 ? 'eager' : 'lazy'} />
                <figcaption>{String(firstPhotoNumber + index + 1).padStart(2, '0')}</figcaption>
              </figure>
            ))}
          </div>

          <div className="gallery-archive__dots" aria-label="Escolher grupo de fotos">
            {gallerySlides.map((_, index) => (
              <button
                className={index === currentSlide ? 'is-active' : ''}
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Ir para o grupo ${index + 1}`}
                aria-current={index === currentSlide ? 'true' : undefined}
              />
            ))}
          </div>

          <p className="gallery-archive__summary">50 fotos · 10 sequências · um só LK Open</p>
        </section>
        <ThirdEditionCta />
      </main>

      <footer className="footer">
        <a href="/#inicio" className="footer__brand">LK OPEN</a>
        <p>O LK Open pelas lentes de quem viveu.</p>
        <a href="/#inicio">Voltar para a Home ↑</a>
      </footer>
    </>
  )
}

export default Gallery
