export default function PhotoFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-chalk-dark ring-1 ring-timber/10 shadow-[0_10px_40px_-15px_rgba(43,32,24,0.35)]">
      {children}
    </div>
  )
}
