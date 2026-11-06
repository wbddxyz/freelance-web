import MobileMenu from "./components/MobileMenu";
import ContactForm from "./components/ContactForm";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="container-site flex items-center justify-between py-5">
          <a href="#" className="text-2xl font-bold tracking-tight">
            Colin<span className="text-blue-400">.</span>
          </a>

          <div className="hidden items-center gap-9 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-blue-400">Services</a>
            <a href="#work" className="transition hover:text-blue-400">My Work</a>
            <a href="#about" className="transition hover:text-blue-400">About</a>
            <a href="#contact" className="transition hover:text-blue-400">Contact</a>
          </div>

          <div className="hidden md:block">
            <a href="#contact" className="btn-primary px-6 py-3 text-sm">
              Let's Talk <span className="ml-2">↗</span>
            </a>
          </div>

          <MobileMenu />
        </div>
      </nav>

      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />

        <div className="container-site relative grid min-h-[760px] items-center gap-16 py-24 lg:grid-cols-[1.05fr_0.95fr]">

          <div className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Livingston · West Lothian · Scotland
              </span>
            </div>

            <p className="eyebrow mb-6">
              Independent web design & development
            </p>

            <h1 className="max-w-3xl">
              Websites built for
              <span className="block bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                businesses like yours.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400 md:text-xl">
              I'm a web developer based in Livingston, helping local
              businesses across West Lothian build a stronger presence
              online. Thoughtful design, modern technology and a
              personal service — without the agency price tag.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Let's build something <span className="ml-2">↗</span>
              </a>

              <a href="#work" className="btn-secondary">
                Explore my work <span className="ml-2">↓</span>
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <span className="text-blue-400">✦</span> Personal, direct service
              </span>
              <span className="flex items-center gap-2">
                <span className="text-blue-400">✦</span> Built around your business
              </span>
            </div>
          </div>

          {/* PlayStation-inspired project interface */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-8 rounded-full bg-blue-500/20 blur-[90px]" />

            <div className="relative rotate-1 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-blue-950/50 backdrop-blur-xl sm:p-6">

              <div className="flex items-center justify-between border-b border-white/10 px-2 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                    Independent developer
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Digital work, made personal.
                  </p>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  <span className="h-2 w-2 rounded-full bg-blue-400/40" />
                  <span className="h-2 w-2 rounded-full bg-blue-400/20" />
                </div>
              </div>

              <div className="group relative mt-5 overflow-hidden rounded-2xl border border-blue-400/30 bg-gradient-to-br from-blue-600 via-blue-800 to-slate-950 p-7 sm:p-9">
                <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-white/10" />
                <div className="absolute -right-2 top-8 h-32 w-32 rounded-full border border-white/10" />

                <div className="relative">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-100">
                    Featured project
                  </span>

                  <h3 className="mt-10 text-3xl font-bold text-white sm:text-4xl">
                    Job Manager
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-blue-100/80">
                    A custom business management application, designed and built from the ground up.
                  </p>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-xs font-medium text-blue-100/70">
                      Next.js · TypeScript · MariaDB
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-xl text-white transition group-hover:bg-white group-hover:text-blue-700">
                      ↗
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <span className="text-2xl text-blue-400">⌘</span>
                  <p className="mt-4 text-sm font-semibold text-white">
                    Web applications
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Tools that make work easier.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <span className="text-2xl text-blue-400">✧</span>
                  <p className="mt-4 text-sm font-semibold text-white">
                    Business websites
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Stand out from the crowd.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <div>
                  <p className="text-xs text-slate-500">Your local web developer</p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Livingston, West Lothian
                  </p>
                </div>
                <span className="text-2xl text-blue-400">⌖</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-5 hidden rounded-xl border border-white/10 bg-slate-900/90 px-5 py-3 shadow-xl backdrop-blur-xl sm:block">
              <p className="text-xs text-slate-500">Based locally</p>
              <p className="mt-1 text-sm font-semibold text-white">
                Built in West Lothian.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Services */}
      <section id="services" className="section relative overflow-hidden bg-slate-950">
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="container-site relative">
          <div className="section-heading">
            <p className="eyebrow">What I bring to the table</p>
            <h2>
              Digital solutions designed around
              <span className="text-blue-400"> your business.</span>
            </h2>
            <p className="section-description">
              Whether you're starting from scratch or improving what
              you've already got, I'll help turn your ideas into
              something useful, professional and built to last.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            <article className="group relative overflow-hidden rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-slate-900/50 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50">
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold tracking-[0.2em] text-blue-400">01 / WEB DESIGN</span>
                <span className="text-3xl text-blue-400">◈</span>
              </div>
              <h3 className="mt-10 text-2xl">Business websites</h3>
              <p className="card-text max-w-md">
                Make a great first impression with a modern, responsive
                website that showcases your business and helps customers
                find what they're looking for.
              </p>
              <div className="mt-8 text-xs font-medium uppercase tracking-widest text-slate-500">
                Design · Responsive layouts · SEO foundations
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-400/[0.04]">
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold tracking-[0.2em] text-blue-400">02 / DEVELOPMENT</span>
                <span className="text-3xl text-blue-400">⌘</span>
              </div>
              <h3 className="mt-10 text-2xl">Web applications</h3>
              <p className="card-text max-w-md">
                Go beyond a standard website with custom dashboards,
                management tools and online systems built around the
                way you work.
              </p>
              <div className="mt-8 text-xs font-medium uppercase tracking-widest text-slate-500">
                Next.js · React · Databases · Custom functionality
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-400/[0.04]">
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold tracking-[0.2em] text-blue-400">03 / REFRESH</span>
                <span className="text-3xl text-blue-400">✧</span>
              </div>
              <h3 className="mt-10 text-2xl">Website redesigns</h3>
              <p className="card-text max-w-md">
                Give an existing website a new lease of life with a
                cleaner design, better user experience and a layout
                that works beautifully on every screen.
              </p>
              <div className="mt-8 text-xs font-medium uppercase tracking-widest text-slate-500">
                Modernisation · User experience · Visual design
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-400/[0.04]">
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold tracking-[0.2em] text-blue-400">04 / ONGOING CARE</span>
                <span className="text-3xl text-blue-400">↗</span>
              </div>
              <h3 className="mt-10 text-2xl">Support & improvements</h3>
              <p className="card-text max-w-md">
                Your website shouldn't stand still after launch.
                I can help with updates, improvements and keeping
                things running smoothly.
              </p>
              <div className="mt-8 text-xs font-medium uppercase tracking-widest text-slate-500">
                Updates · Maintenance · New features
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Local to Livingston */}
      <section className="relative isolate overflow-hidden border-y border-blue-400/10 bg-gradient-to-r from-blue-950/60 via-slate-950 to-slate-950 py-24">
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-500/15 blur-[110px]" />

        <div className="container-site relative grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow">Local knowledge. Personal service.</p>
            <h2 className="mt-5 max-w-2xl">
              Good things are being built
              <span className="text-blue-400"> right here in West Lothian.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              I'm an independent web developer based in Livingston,
              working with businesses and individuals across West Lothian
              and beyond. You deal directly with me throughout your
              project — from the first conversation to launch and beyond.
            </p>
            <p className="mt-5 max-w-2xl leading-7 text-slate-400">
              Whether you're a local business looking to get online,
              or an established company ready for something better,
              I'd love to hear what you're working on.
            </p>
            <a href="#contact" className="btn-primary mt-9 inline-flex">
              Let's talk about your project <span className="ml-2">↗</span>
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-blue-950/30 backdrop-blur-xl sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Your local web developer
            </p>
            <div className="mt-8 flex items-center gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-3xl text-blue-300">
                ⌖
              </div>
              <div>
                <h3 className="text-2xl">Livingston</h3>
                <p className="mt-1 text-sm text-slate-400">West Lothian, Scotland</p>
              </div>
            </div>
            <div className="my-8 h-px bg-white/10" />
            <div className="space-y-5">
              <div>
                <p className="font-semibold text-white">Direct communication</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Speak directly with the person designing and building your website.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Local and independent</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  A personal service for Livingston, West Lothian and businesses further afield.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">No unnecessary complexity</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Straightforward conversations, clear communication and solutions that fit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Portfolio */}
      <section id="work" className="section bg-slate-900/30">
        <div className="container-site">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="section-heading">

              <p className="eyebrow">
                Selected work
              </p>

              <h2>
                Projects I've built.
              </h2>

              <p className="section-description">
                A selection of websites and applications I've designed
                and developed.
              </p>
            </div>

            <span className="text-sm text-slate-500">
              More projects coming soon
            </span>
          </div>


          <div className="mt-20 grid gap-8 md:grid-cols-2">

            {/* Job Manager */}
            <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">

              <div className="overflow-hidden bg-slate-900">
                <img
                  src="/jobmanager.png"
                  alt="Job Manager dashboard showing live customer and job statistics"
                  className="h-72 w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                />
              </div>


              <div className="p-8">

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                    Next.js
                  </span>

                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                    TypeScript
                  </span>

                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                    MariaDB
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl">
                    Job Manager
                  </h3>

                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-300">
                    Interactive Demo
                  </span>
                </div>

                <p className="card-text">
                  A full-stack business management application for
                  managing customers, jobs and business information
                  in one place. Try adding fictional customers and jobs
                  using the live demo.
                </p>

                <a
                  href="https://job-manager-ashen.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  Launch live demo →
                </a>
              </div>
            </article>


            {/* The Source */}
            <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">

              <div className="flex h-72 items-center justify-center bg-gradient-to-br from-purple-500/20 via-slate-900 to-slate-950">

                <div className="w-4/5 rounded-xl border border-slate-700 bg-slate-900 p-5 shadow-2xl transition duration-500 group-hover:scale-105">

                  <div className="mb-5 h-8 rounded bg-slate-800" />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 rounded-lg bg-slate-800" />

                    <div>
                      <div className="h-4 w-full rounded bg-slate-700" />
                      <div className="mt-3 h-3 w-4/5 rounded bg-slate-800" />
                      <div className="mt-2 h-3 w-3/5 rounded bg-slate-800" />
                      <div className="mt-5 h-8 w-24 rounded bg-purple-500/30" />
                    </div>
                  </div>

                </div>
              </div>


              <div className="p-8">

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                    Next.js
                  </span>

                  <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                    React
                  </span>

                  <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                    API
                  </span>
                </div>

                <h3 className="mt-5 text-2xl">
                  The Source
                </h3>

                <p className="card-text">
                  A modern news platform designed to present
                  articles and information through a clean,
                  responsive interface.
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-flex font-semibold text-purple-400 transition hover:text-purple-300"
                >
                  View project →
                </a>
              </div>
            </article>

          </div>
        </div>
      </section>


      {/* About */}
      <section id="about" className="section bg-slate-950">
        <div className="container-site grid gap-16 lg:grid-cols-2 lg:items-center">

          <div>
            <div className="section-heading">
              <p className="eyebrow">A little about me</p>

              <h2>
                Design knowledge. Technical skills. A personal approach.
              </h2>
            </div>

            <div className="mt-8 space-y-5 text-lg leading-8 text-slate-400">
              <p>
                I'm Colin, a freelance web developer based in Livingston,
                West Lothian. I build modern websites and web applications
                for businesses and individuals who want a strong online presence.
              </p>

              <p>
                I graduated from Edinburgh Napier University with an Honours
                degree in Web Design and Development. That combination of
                design and development means I think about how a website looks,
                how it works and how people actually use it.
              </p>

              <p>
                Alongside my development work, I have over three years'
                experience using Adobe Creative Suite, including Photoshop
                and Illustrator. I bring that design experience into the
                websites I build, paying attention to the details that make
                a site feel polished and professional.
              </p>

              <p>
                When you work with me, you deal directly with the person
                designing and building your website. No jargon, no unnecessary
                complications — just a straightforward process and a result
                built around what your business needs.
              </p>
            </div>

            <a href="#contact" className="btn-primary mt-8 inline-flex">
              Let's work together
            </a>
          </div>

          {/* About highlights */}
          <div className="grid gap-4 sm:grid-cols-2">

            <div className="card card-hover">
              <div className="text-3xl font-bold text-blue-400">
                3+
              </div>
              <p className="mt-2 font-medium">
                Years of design experience
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Adobe Photoshop, Illustrator and digital design.
              </p>
            </div>

            <div className="card card-hover">
              <div className="text-3xl font-bold text-blue-400">
                BSc (Hons)
              </div>
              <p className="mt-2 font-medium">
                Web Design and Development
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Graduate of Edinburgh Napier University.
              </p>
            </div>

            <div className="card card-hover">
              <div className="text-3xl font-bold text-blue-400">
                Full Stack
              </div>
              <p className="mt-2 font-medium">
                Web development
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Frontend, backend and database development.
              </p>
            </div>

            <div className="card card-hover">
              <div className="text-3xl font-bold text-blue-400">
                Livingston
              </div>
              <p className="mt-2 font-medium">
                Local and independent
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Working with businesses across West Lothian, Scotland and beyond.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Process */}
      <section className="section bg-slate-900/30">
        <div className="container-site">

          <div className="section-heading">

            <p className="eyebrow">
              How it works
            </p>

            <h2>
              From idea to launch.
            </h2>

            <p className="section-description">
              Building a website doesn't need to be complicated.
              I'll guide you through the process from the initial idea
              right through to getting your website online.
            </p>

          </div>


          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div>
              <div className="text-6xl font-bold text-slate-800">
                01
              </div>

              <h3 className="mt-4">
                Tell me about your idea
              </h3>

              <p className="card-text">
                We'll have a chat about your business, what you need
                your website to do and what you're hoping to achieve.
              </p>
            </div>


            <div>
              <div className="text-6xl font-bold text-slate-800">
                02
              </div>

              <h3 className="mt-4">
                Plan & design
              </h3>

              <p className="card-text">
                I'll plan the structure and design of your website,
                making sure it looks professional and works for your
                customers.
              </p>
            </div>


            <div>
              <div className="text-6xl font-bold text-slate-800">
                03
              </div>

              <h3 className="mt-4">
                Build & test
              </h3>

              <p className="card-text">
                I'll develop the website and test it across different
                screen sizes and devices before it goes live.
              </p>
            </div>


            <div>
              <div className="text-6xl font-bold text-slate-800">
                04
              </div>

              <h3 className="mt-4">
                Launch
              </h3>

              <p className="card-text">
                Once everything is ready, we'll get your website online
                and I'll make sure everything is working as it should.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="section bg-slate-950">
        <div className="container-site">

          <div className="section-heading">

            <p className="eyebrow">
              Get in touch
            </p>

            <h2>
              Have a project in mind?
            </h2>

            <p className="section-description">
              Tell me a little about what you're looking for and I'll
              get back to you to discuss your project.
            </p>

          </div>


          <div className="mt-20 grid gap-12 lg:grid-cols-3">

            {/* Contact information */}
            <div>

              <h3>
                Let's talk
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Whether you need a brand-new website, want to modernise
                an existing one or have an idea for a custom web
                application, I'd love to hear about it.
              </p>


              <div className="mt-8 space-y-6">

                <div>
                  <p className="text-sm text-slate-500">
                    Based in
                  </p>

                  <p className="mt-1 font-medium">
                    Scotland, UK
                  </p>
                </div>


                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 font-medium text-blue-400">
                    hello@yourdomain.co.uk
                  </p>
                </div>

              </div>
            </div>


            {/* Form */}
      <ContactForm />
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 px-6 py-10">

        <div className="container-site flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Colin Anderson. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a href="#services" className="transition hover:text-white">
              Services
            </a>

            <a href="#work" className="transition hover:text-white">
              Work
            </a>

            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>

          </div>
        </div>
      </footer>

    </main>
  );
}
