export default function SectionHeading({
  title,
  onDark = false,
}: {
  title: string
  onDark?: boolean
}) {
  return (
    <div className="mb-10">
      <div
        aria-hidden="true"
        className={`mb-4 w-12 ${onDark ? 'stripe-mark-on-dark' : 'stripe-mark'}`}
      />
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
