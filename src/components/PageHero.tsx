type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
}

function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <p className="section-tag">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  )
}

export default PageHero
