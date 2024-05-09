import Bio from './components/Bio'
import NavigationMenu from './components/NavigationMenu'
import Projects from './components/Projects'
import Stacks from './components/Stacks'
import { CircleStackIcon, FolderIcon } from '@heroicons/react/24/solid'

const tabs = [
  { name: 'projects', icon: <FolderIcon width={20} /> },
  { name: 'stacks', icon: <CircleStackIcon width={20} /> },
]

/* eslint-disable react/prop-types */
function App() {
  function handleTabClick(name) {
    document.getElementById(name).scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <PageWrapper>
      <div className="max-w-[50rem] mx-auto flex flex-col gap-20 md:gap-30">
        <main className="flex flex-col gap-10 md:gap-12">
          <NavigationMenu tabs={tabs} onTabClick={handleTabClick} />
          <Bio />
          <Projects />
          <Stacks />
        </main>
        <footer className="text-center">
          <small>
            Created with 💖 by Chris Bui - {new Date().getFullYear()}
          </small>
        </footer>
      </div>
    </PageWrapper>
  )
}

function PageWrapper({ children }) {
  return (
    <main className="min-h-dvh px-4 py-10 md:py-20 bg-zinc-950 text-zinc-100 font-[DMMono]">
      {children}
    </main>
  )
}

export default App
