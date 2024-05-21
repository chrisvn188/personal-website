/* eslint-disable react/prop-types */
import Bio from './components/Bio'
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {
  return (
    <PageWrapper>
      <main className="grid gap-24">
        <Bio />
        <Projects />
        <Contact />
      </main>
    </PageWrapper>
  )
}

function PageWrapper({ children }) {
  return (
    <div className="min-h-dvh px-4 py-4 sm:p-8 md:p-16 bg-zinc-950 text-zinc-100 max-w-[66rem] mx-auto">
      {children}
    </div>
  )
}

export default App
