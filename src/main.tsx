import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DetailsPage from './pages/Detail'
import DevsPage from './pages/About'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <DevsPage /> },
  { path: '/details', element: <DetailsPage /> },
  { path: '/favorites', element: <Home isFav={true} /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
