export function MPageHeader({ kicker, title, sub, variant = 'ink', bgImg }) {
  return (
    <div className={'m-page-header ' + (variant === 'red' ? 'm-page-header--red' : '')}>
      {bgImg && <div className="m-page-header__bg" style={{ backgroundImage: `url('${bgImg}')` }} />}
      <div className="m-page-header__kicker">{kicker}</div>
      <div className="m-page-header__title">{title}</div>
      {sub && <div className="m-page-header__sub">{sub}</div>}
    </div>
  );
}

export function MSectionHeader({ eyebrow, children, dark }) {
  return (
    <div className="reveal" style={{ marginBottom: 24 }}>
      <span className="m-eyebrow">{eyebrow}</span>
      <div className="m-title m-title--big" style={dark ? { color: 'var(--dyj-white)' } : undefined}>
        {children}
      </div>
    </div>
  );
}
