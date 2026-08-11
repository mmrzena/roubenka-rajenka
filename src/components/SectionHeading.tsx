export default function SectionHeading({
  title,
  onDark = false,
}: {
  title: string
  onDark?: boolean
}) {
  return (
    <h2
      className={`mb-10 font-display text-3xl font-medium sm:text-4xl ${
        onDark ? 'text-chalk' : 'text-timber'
      }`}
    >
      {title}
    </h2>
  )
}
