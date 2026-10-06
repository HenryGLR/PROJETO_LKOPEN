import '../styles/third-edition-cta.css'

function ThirdEditionCta() {
  return (
    <aside className="third-edition-cta" aria-labelledby="third-edition-cta-title" data-reveal>
      <span className="third-edition-cta__number" aria-hidden="true">03</span>
      <div className="third-edition-cta__copy">
        <p className="eyebrow">Próxima edição</p>
        <h2 id="third-edition-cta-title">Sua dupla no<br />próximo capítulo.</h2>
      </div>
      <div className="third-edition-cta__action">
        <p>A página de inscrição já está preparada. O formulário será liberado assim que o link oficial estiver disponível.</p>
        <a className="button" href="/edicoes/terceira-edicao">Ir para a 3ª edição →</a>
      </div>
    </aside>
  )
}

export default ThirdEditionCta
