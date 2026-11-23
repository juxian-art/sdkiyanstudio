import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Leave Anytime",
    chinese: "随时退出",
    body: "Artists may end their non-exclusive collaboration with KIYAN at any time by giving written notice, without a reason or an exit fee. Already confirmed projects and payment obligations remain subject to their agreed terms.",
  },
  {
    number: "02",
    title: "6% Business Representation",
    chinese: "6% 商务服务",
    body: "Only when you choose KIYAN to handle client introductions, commercial communication, negotiations and agreed business coordination, we charge 6% of the project fees you actually receive. The services and commission must be agreed in advance; production management is not automatically included.",
  },
  {
    number: "03",
    title: "0% on Your Own Projects",
    chinese: "自主订单零费用",
    body: "You are free to work with any client, agency or studio. If you find and manage a project independently without KIYAN representation, we charge nothing. Joining the roster does not create an exclusive relationship or an obligation to accept projects.",
  },
  {
    number: "04",
    title: "Artists Get Paid First",
    chinese: "艺术家优先收款",
    body: "Clients pay artists directly. Once the artist actually receives payment, the agreed commission is paid separately to KIYAN. Currency, transfer fees, timing and taxes are agreed in writing before each project.",
  },
];

export default function ArtistsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-8 sm:px-10">
        <nav className="flex items-center justify-between border-b border-slate-200 pb-6">
          <Link href="/" className="text-sm font-semibold tracking-[0.2em]">SD KIYAN STUDIO</Link>
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-900">← Back to studio</Link>
        </nav>

        <header className="max-w-3xl py-20 sm:py-28">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">KIYAN ARTIST ROSTER</p>
          <h1 className="text-5xl font-light leading-[1.07] tracking-tight sm:text-7xl">Create freely.<br />Collaborate naturally.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            An open, non-exclusive circle of independent animation artists, illustrators, comic creators and musicians around the world.
            We're a young studio in Shanghai, learning and building meaningful creative connections one project at a time.
          </p>
        </header>

        <section aria-labelledby="principles-title" className="pb-20">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3 border-b border-slate-300 pb-5">
            <h2 id="principles-title" className="text-2xl font-light sm:text-3xl">Our collaboration principles</h2>
            <p className="text-sm text-slate-500">Non-exclusive · Transparent · Artist-first</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {principles.map((item) => (
              <article key={item.number} className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
                <p className="mb-12 text-xs font-medium tracking-[0.2em] text-slate-400">{item.number}</p>
                <h3 className="text-2xl font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{item.chinese}</p>
                <p className="mt-6 text-base leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-24 rounded-3xl bg-slate-900 px-7 py-12 text-white sm:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">A small invitation</p>
          <h2 className="mt-5 max-w-2xl text-3xl font-light leading-tight sm:text-4xl">No exclusivity. No unnecessary restrictions. Just opportunities to create together.</h2>
          <p className="mt-6 max-w-2xl leading-7 text-slate-300">
            Joining the roster is free, does not guarantee paid work, and does not transfer your existing copyrights. Each paid commission or creative collaboration is discussed and agreed separately in writing.
          </p>
          <Link href="/#contact" className="mt-9 inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">Get in touch</Link>
        </section>
        <footer className="border-t border-slate-200 py-7 text-xs text-slate-500">© SD Kiyan Studio · Shanghai · Independent artists, independent futures.</footer>
      </div>
    </main>
  );
}
