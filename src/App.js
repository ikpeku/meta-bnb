import { Routes, Route } from 'react-router-dom'
import { Footer, Navbar } from './components'
import { Home, Place, Notfound } from './pages'

function App() {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/place" element={<Place />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
