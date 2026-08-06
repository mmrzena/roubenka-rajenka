export default function SectionHeading({
  eyebrow,
  title,
  onDark = false,
}: {
  eyebrow: string
  title: string
  onDark?: boolean
}) {
  return (
    <div className="mb-10">
      <p
        className={`mb-3 text-sm font-bold uppercase tracking-[0.2em] ${
          onDark ? 'text-amber-glow' : 'text-sage-dark'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display text-3xl font-medium sm:text-4xl ${
          onDark ? 'text-chalk' : 'text-timber'
        }`}
      >
        {title}
      </h2>
    </div>
  )
}
