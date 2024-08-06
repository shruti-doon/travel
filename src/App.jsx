import React from 'react';
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Mainlayout from './layouts/Mainlayout';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage'
import Notfound from './components/Notfound';
const router=createBrowserRouter(
  createRoutesFromElements(
<Route path='/' element={<Mainlayout/>}>
<Route index element={<Homepage/>}/>
<Route path='/about' element={<Aboutpage/>}/>
<Route path='*' element={<Notfound/>}/>
</Route>)
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
