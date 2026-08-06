export default function ArchFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-arch border-[6px] border-sage/80 bg-chalk-dark shadow-[0_10px_40px_-15px_rgba(43,32,24,0.35)]">
      {children}
    </div>
  )
}
