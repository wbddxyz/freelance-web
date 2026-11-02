import MobileMenu from "./components/MobileMenu";
import ContactForm from "./components/ContactForm";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navigation */}
      <nav className="relative container-site flex items-center justify-between py-6">
        <div className="text-xl font-bold">
          Colin<span className="text-blue-400">.</span>
        </div>

        <div className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#services" className="transition hover:text-white">
            Services
          </a>

          <a href="#work" className="transition hover:text-white">
            My Work
          </a>

          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary px-5 py-2.5 text-sm">
            Let's Talk
          </a>
        </div>

        <MobileMenu />
      </nav>

      {/* Hero */}
      <section className="container-site grid min-h-[80vh] items-center gap-16 py-20 lg:grid-cols-2">

        <div>
          <p className="eyebrow mb-6">
            Freelance Web Developer
          </p>

          <h1 className="max-w-4xl">
            Websites that help your business
            <span className="text-blue-400"> stand out.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400 md:text-xl">
            I design and build modern, responsive websites and web
            applications for businesses that want a professional online
            presence without the agency price tag.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Start a Project
            </a>

            <a href="#work" className="btn-secondary">
              View My Work
            </a>
          </div>
        </div>


        {/* Code window */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">

            <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-4">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />

              <span className="ml-4 text-xs text-slate-500">
                website.tsx
              </span>
            </div>

            <div className="p-6 font-mono text-sm leading-7">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">website</span> = {"{"}
              </p>

              <p className="pl-6">
                <span className="text-slate-500">business:</span>{" "}
                <span className="text-green-300">"Your Business"</span>,
              </p>

              <p className="pl-6">
                <span className="text-slate-500">design:</span>{" "}
                <span className="text-green-300">"Modern"</span>,
              </p>

              <p className="pl-6">
                <span className="text-slate-500">responsive:</span>{" "}
                <span className="text-orange-300">true</span>,
              </p>

              <p className="pl-6">
                <span className="text-slate-500">fast:</span>{" "}
                <span className="text-orange-300">true</span>,
              </p>

              <p className="pl-6">
                <span className="text-slate-500">builtWith:</span>{" "}
                <span className="text-green-300">"Next.js"</span>
              </p>

              <p>{"}"}</p>

              <p className="mt-4">
                <span className="text-purple-400">export default</span>{" "}
                <span className="text-blue-300">website</span>;
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Services */}
      <section id="services" className="section bg-slate-950">
        <div className="container-site">

          <div className="section-heading">
            <p className="eyebrow">
              What I do
            </p>

            <h2>
              Everything you need to build your online presence.
            </h2>

            <p className="section-description">
              From simple business websites to custom web applications,
              I can design and build a solution around what your business
              actually needs.
            </p>
          </div>


          <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <div className="card card-hover">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                🌐
              </div>

              <h3 className="mt-6">
                Business Websites
              </h3>

              <p className="card-text">
                Modern, responsive websites designed to make your
                business look professional and attract new customers.
              </p>
            </div>


            <div className="card card-hover">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                ⚙️
              </div>

              <h3 className="mt-6">
                Web Applications
              </h3>

              <p className="card-text">
                Custom online tools, dashboards and systems that
                help businesses manage their work more efficiently.
              </p>
            </div>


            <div className="card card-hover">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                ✨
              </div>

              <h3 className="mt-6">
                Website Redesigns
              </h3>

              <p className="card-text">
                Give an outdated website a fresh, modern design
                that works beautifully across phones, tablets and desktops.
              </p>
            </div>


            <div className="card card-hover">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                🛠️
              </div>

              <h3 className="mt-6">
                Ongoing Support
              </h3>

              <p className="card-text">
                Need changes after launch? I can help keep your
                website updated, secure and running smoothly.
              </p>
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

              <div className="flex h-72 items-center justify-center bg-gradient-to-br from-blue-500/20 via-slate-900 to-slate-950">

                <div className="w-4/5 rounded-xl border border-slate-700 bg-slate-900 p-5 shadow-2xl transition duration-500 group-hover:scale-105">

                  <div className="mb-4 flex items-center justify-between">
                    <div className="h-3 w-24 rounded bg-slate-700" />
                    <div className="h-6 w-6 rounded-full bg-blue-500/30" />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-lg bg-slate-800" />
                    <div className="h-20 rounded-lg bg-slate-800" />
                    <div className="h-20 rounded-lg bg-slate-800" />
                  </div>

                  <div className="mt-4 h-3 w-2/3 rounded bg-slate-800" />
                  <div className="mt-2 h-3 w-1/2 rounded bg-slate-800" />
                </div>
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
              <p className="eyebrow">
                About me
              </p>

              <h2>
                A developer who understands both design and technology.
              </h2>
            </div>


            <div className="mt-8 space-y-5 text-lg leading-8 text-slate-400">

              <p>
                I'm Colin, a freelance web developer based in Scotland.
                I design and build modern websites and web applications
                for businesses and individuals.
              </p>

              <p>
                With a background in web design, graphic design and
                technical problem solving, I care about more than just
                making a website look good. It needs to be fast, easy to
                use and work properly.
              </p>

              <p>
                I work directly with my clients from the initial idea
                through to launch, keeping things straightforward and
                making sure the finished website does what you need it
                to do.
              </p>

            </div>

            <a href="#contact" className="btn-primary mt-8 inline-flex">
              Work with me
            </a>
          </div>


          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-2">

            <div className="card">
              <div className="text-3xl font-bold text-blue-400">
                3+
              </div>

              <p className="mt-2 font-medium">
                Years of design experience
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Working with graphics, layouts and digital content.
              </p>
            </div>


            <div className="card">
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


            <div className="card">
              <div className="text-3xl font-bold text-blue-400">
                100%
              </div>

              <p className="mt-2 font-medium">
                Direct communication
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                You work directly with the person building your website.
              </p>
            </div>


            <div className="card">
              <div className="text-3xl font-bold text-blue-400">
                Scotland
              </div>

              <p className="mt-2 font-medium">
                Based locally
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Available for projects across Scotland and beyond.
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
