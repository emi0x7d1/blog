import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Resume' })

export default function Resume() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Resume
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Emilio González Rodríguez - Fullstack Engineer
          </p>
        </div>
        <div className="py-8">
          <div className="flex flex-col space-y-10">
            {/* Summary Section */}
            <div>
              <h2 className="mb-4 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                Summary
              </h2>
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                <p>
                  I am a 24-year-old software engineer passionate about everything code. Self-taught
                  since the age of 10, I have written code for all kinds of sotware and wish to work
                  on more. I like to develop all kinds of software, from the bootloader to the
                  browser. Usually writing Rust and TypeScript.
                </p>
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h2 className="mb-4 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                Experience
              </h2>

              <div className="space-y-8">
                <div>
                  <div className="flex flex-wrap items-baseline justify-between">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Connect Nodes IO
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2020 - Present</span>
                  </div>
                  <p className="mb-2 italic text-gray-600 dark:text-gray-400">Fullstack Engineer</p>
                  <ul className="ml-5 list-outside list-disc space-y-2 text-gray-500 dark:text-gray-400">
                    <li>
                      <strong>POS System with E-commerce:</strong> Engineered a comprehensive Point
                      of Sale and E-commerce platform using Node.js, React, and PostgreSQL.
                      Developed custom printer drivers in Rust to ensure seamless hardware
                      integration and reliability.
                    </li>
                    <li>
                      <strong>Internal Sales Software:</strong> Designed and implemented internal
                      sales tools for an aviation parts client, streamlining their sales process
                      through a custom fullstack solution.
                    </li>
                    <li>
                      <strong>Mobile App Development:</strong> Led the development of a
                      cross-platform mobile application using Capacitor, delivering a native-like
                      experience with a single codebase.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div>
              <h2 className="mb-4 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                Side Projects
              </h2>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://github.com/emi0x7d1/subjs"
                    className="text-xl font-semibold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    SubJS
                  </a>
                  <p className="text-gray-500 dark:text-gray-400">
                    A specialized JavaScript runtime designed for AI agents, optimizing performance
                    and resource management for autonomous tasks.
                  </p>
                </li>
                <li>
                  <a
                    href="https://github.com/emi0x7d1/nrap"
                    className="text-xl font-semibold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    Nrap
                  </a>
                  <p className="text-gray-500 dark:text-gray-400">
                    A programming language featuring Spanish syntax, created to explore language
                    design and parser implementation.
                  </p>
                </li>
                <li>
                  <a
                    href="https://github.com/emi0x7d1/okaoka"
                    className="text-xl font-semibold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    Okaoka
                  </a>
                  <p className="text-gray-500 dark:text-gray-400">
                    An experimental project exploring runtime allocator changes in Rust using memory
                    tagging techniques for enhanced memory safety and debugging.
                  </p>
                </li>
              </ul>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="mb-4 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                Education
              </h2>
              <div>
                <div className="flex flex-wrap items-baseline justify-between">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Universidad Autónoma de Nuevo León (UANL) - FIME
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2018 - 2020</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Ingeniería en Tecnología de Software (Completed 2 years of coursework)
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h2 className="mb-4 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                Technical Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'JavaScript',
                  'TypeScript',
                  'Node.js',
                  'React',
                  'PostgreSQL',
                  'Rust',
                  'Capacitor',
                  'Next.js',
                  'Tailwind CSS',
                  'Git',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
