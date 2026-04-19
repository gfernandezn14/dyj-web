export default function SectionHeader({ eyebrow, title, size = 'big' }) {
  const sz = size === 'big' ? 'clamp(64px, 9vw, 140px)' : 'clamp(48px, 6vw, 96px)';
  return (
    <div className="reveal" style={{ marginBottom: 60 }}>
      <div className="mono" style={{ color: 'var(--dyj-red-deep)', marginBottom: 16 }}>{eyebrow}</div>
      <div className="display" style={{
        fontSize: sz, lineHeight: 0.95,
        color: 'var(--dyj-ink)',
      }}>{title}</div>
    </div>
  );
}
