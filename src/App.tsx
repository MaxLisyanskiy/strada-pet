import { Routes, Route } from 'react-router'
import { Link } from 'react-router-dom'
import { MainPage } from './pages/main-page'
import { ParagraphDetails } from './pages/paragraph-details'
import { Profile } from './pages/profile'
import { NotFoundPage } from './pages/not-found-page'
import { Layout } from './components/layout'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/ParagraphDetails" element={<ParagraphDetails />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
