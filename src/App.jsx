/* eslint-disable react/prop-types */
import Bio from './components/Bio'
import Projects from './components/Projects'
import Tools from './components/Tools'

function App() {
  return (
    <PageWrapper>
      <main className="grid gap-24">
        <Bio />
        <Projects />
        <Tools />
      </main>
    </PageWrapper>
  )
}

function PageWrapper({ children }) {
  return (
    <div className="min-h-dvh px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32 bg-zinc-950 text-zinc-100 max-w-[66rem] mx-auto">
      {children}
    </div>
  )
}

export default App
