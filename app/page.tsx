export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-8 py-24 md:px-20">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50" />
        <div className="relative z-10 max-w-4xl">
          <p className="mb-4 text-sm tracking-[0.35em] text-slate-500 uppercase">SD KIYAN STUDIO</p>
          <h1 className="max-w-3xl text-5xl font-light leading-tight tracking-tight md:text-7xl">
            Stories for lonely people around the world.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            SD Kiyan Studio is an independent animation studio exploring loneliness, warmth, memory, voices, and human connection through animation, music, and atmosphere.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-2xl bg-slate-900 px-6 py-3 text-sm text-white">View Projects</a>
            <a href="#contact" className="rounded-2xl border border-slate-300 px-6 py-3 text-sm">Contact</a>
          </div>
        </div>
      </section>

      <section id="about" className="grid gap-12 px-8 py-24 md:grid-cols-2 md:px-20">
        <div>
          <p className="mb-4 text-sm tracking-[0.3em] text-slate-400 uppercase">About</p>
          <h2 className="text-4xl font-light leading-tight">A growing animation studio.</h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-slate-600">
          <p>We are building a creative world where animation, music, voices, and emotional storytelling connect people across different countries.</p>
          <p>Inspired by Nordic atmosphere, Japanese animation culture, and the feeling of human warmth, SD Kiyan Studio focuses on emotional and cinematic experiences.</p>
        </div>
      </section>

      <section id="artist-roster" className="border-y border-slate-200 bg-[#f7f7f5] px-8 py-24 md:px-20">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-500">KIYAN Artist Roster</p>
            <h2 className="text-4xl font-light leading-tight md:text-5xl">Create freely. Collaborate naturally.</h2>
            <p className="mt-6 leading-8 text-slate-600">A non-exclusive circle for independent artists around the world. Leave anytime, keep your own clients, and choose when you want our business representation.</p>
            <p className="mt-4 text-sm text-slate-500">6% when you choose KIYAN business services · 0% on your own work · Artists get paid first.</p>
          </div>
          <a href="/artists" className="inline-flex shrink-0 rounded-2xl bg-slate-900 px-6 py-3 text-sm text-white">Explore Artist Collaboration →</a>
        </div>
      </section>

      <section id="projects" className="bg-slate-50 px-8 py-24 md:px-20">
        <p className="mb-4 text-sm tracking-[0.3em] text-slate-400 uppercase">Projects</p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-light">Animation 30</h3>
            <p className="mt-4 leading-7 text-slate-600">A personal documentary-style animation project about loneliness, memory, and the love of animation.</p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-light">KIYAN Voice Project</h3>
            <p className="mt-4 leading-7 text-slate-600">Exploring emotional voice performances, atmosphere, and human connection through animation and sound.</p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-light">International Chorus</h3>
            <p className="mt-4 leading-7 text-slate-600">A future project connecting voices from different countries in a shared emotional space.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-8 py-24 md:px-20">
        <div className="max-w-3xl rounded-[2rem] bg-slate-900 p-10 text-white">
          <p className="mb-4 text-sm tracking-[0.3em] text-slate-400 uppercase">Contact</p>
          <h2 className="text-4xl font-light leading-tight">Let&apos;s create something together.</h2>
          <div className="mt-10 space-y-3 text-slate-300">
            <p>Email: your@email.com</p>
            <p>Studio: SD Kiyan Studio</p>
            <p>Founder: Juxian</p>
          </div>
        </div>
      </section>
    </main>
  );
}
