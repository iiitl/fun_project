import React from 'react'
import  ReactDOM  from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Register from './pages/Resgister'
import Login from './pages/Login'

const App = () => {

  const router = createBrowserRouter([
    { path: '/register', element: <Register /> },
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login/>}
  ])

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);
}

export default App
