export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  return (
    <div className={`section-header section-header--${align}`} data-reveal>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </div>
  );
}
