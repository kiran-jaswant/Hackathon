import { useState } from 'react'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Home from './views/Home/Home'
import About from './views/About/About'
import Review from './views/Review/Review'

function App() {

  const router =createBrowserRouter([
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:"/about",
      element:<About></About>
    },
    {
      path:"/review",
      element:<Review></Review>
    }
  ])
  

  return (
     <>
     <RouterProvider router={router}></RouterProvider>
     </>
    
   
  )
}

export default App;
