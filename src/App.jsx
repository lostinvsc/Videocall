
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Room from './Components/Room.jsx'
function App() {

  let router=createBrowserRouter([

    {
      path:'/room/:roomid',
      element:<Room/>
    },
    {
      path:'/',
      element:<Home/>
    },
  
  ])

  return (
    
    <>
    <RouterProvider router={router}/>
    </>

  
  )
}

export default App
