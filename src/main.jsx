import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MoviePage } from './pages/Movie'
import { ErrorPage } from './pages/Error'
import { MoviesListPage } from './pages/MoviesList'
import { GlobalStyles } from './GlobalStyles'
import { MovieListProvider } from './contexts/MovieListContext'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MoviesListPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/movie/:id',
    element: <MoviePage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    
    <MovieListProvider>
      <RouterProvider router={routes} />
    </MovieListProvider>
  </React.StrictMode>
)
