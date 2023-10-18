import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
}
from 'react-router-dom';
import Rootlayout from './layouts/Rootlayout';
import Products from './pages/Products';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import ForgotPassword from './pages/ForgotPassword';
import './App.css';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Rootlayout/>}>
      <Route index element={<Products/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
    </Route>
  )
)

function App() {

  return (
      <RouterProvider router={router}/>
);
}

export default App;