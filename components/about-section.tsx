export function AboutSection() {
  return (
    <section id="about" className="py-32 scroll-mt-24">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-sm uppercase tracking-wider text-muted-foreground">About</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
          I build <span className="text-primary">technology</span> and tell{" "}
          <span className="text-primary">stories</span>
        </h2>
        <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
          <p>
            I'm a software engineer and documentary filmmaker with a passion for creating meaningful experiences. By
            day, I architect distributed systems and design elegant interfaces. By evening, I capture compelling human
            stories through the lens.
          </p>
          <p>
            My dual expertise allows me to approach problems from both technical and narrative perspectives, resulting
            in products and films that are both functional and emotionally resonant.
          </p>
        </div>
      </div>
    </section>
  )
}
