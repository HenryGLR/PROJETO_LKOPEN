function BrandLogo({ className = '', compact = false }) {
  return (
    <span className={`brand-logo${compact ? ' brand-logo--compact' : ''}${className ? ` ${className}` : ''}`}>
      <img src="/images/lkopen-logo-web.png" alt="" />
      <span className="brand-logo__name">LK Open</span>
    </span>
  )
}

export default BrandLogo
