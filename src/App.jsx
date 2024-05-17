/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'
import Bio from './components/Bio'
import Projects from './components/Projects'
import BorderTabs from './components/BorderTabs'

export const BorderContext = createContext(null)

function App() {
  const [currentBorderStyle, setCurrentBorderStyle] = useState('dashed')

  let customizedBorderClass = ''

  switch (currentBorderStyle) {
    case 'dashed':
      customizedBorderClass = 'border-dashed'
      break
    case 'dotted':
      customizedBorderClass = 'border-dotted'
      break
    case 'solid':
      customizedBorderClass = 'border-solid'
      break
  }

  const handleChangeBorderStyle = (event) => {
    setCurrentBorderStyle(event.target.textContent)
  }

  return (
    <BorderContext.Provider
      value={{ type: currentBorderStyle, styles: customizedBorderClass }}>
      <PageWrapper>
        <main className="grid gap-24">
          <BorderTabs onTabClick={handleChangeBorderStyle} />
          <Bio />
          <Projects />
        </main>
      </PageWrapper>
    </BorderContext.Provider>
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
