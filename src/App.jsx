import About from './components/About'
import Bio from './components/Bio'
import Contact from './components/Contact'
import Projects from './components/Projects'

/* eslint-disable react/prop-types */
function App() {
  return (
    <PageWrapper>
      <main className="grid gap-24">
        <Bio />
        <Projects />
        <About />
        <Contact />
      </main>
    </PageWrapper>
  )
}

function PageWrapper({ children }) {
  return (
    <div className="min-h-dvh p-4 md:p-12 lg:py-24 bg-zinc-950 text-zinc-100 max-w-[66rem] mx-auto">
      {children}
    </div>
  )
}

export default App
