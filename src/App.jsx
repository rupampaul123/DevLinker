import './App.css'
import Home from './pages/Home/Home'
import Card from './pages/Card/Card';
import Work from './components/Work';
import {  RouterProvider, createHashRouter } from 'react-router-dom';

function App() {

  const router = createHashRouter([
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: '/Form',
      element: <Work/>
    },
    {
      path: '/Card',
      element: <Card/>
    }
  ])

  return (
      <div>
        <RouterProvider router={router}/>
      </div>
  )
}

export default App
