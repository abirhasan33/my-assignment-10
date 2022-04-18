import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heder from './components/Heder/Heder';
import About from './components/About/About';
import Login from './components/page/Login/Login';
import Register from './components/page/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Checkout from './components/Checkout/Checkout';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import { createContext, useState } from "react";
import Blogs from './components/Blogs/Blogs';

export const BlogContext = createContext()
function App() {
  const [serivces, setSerivces] = useState([]);
  return (
    <div>
      <BlogContext.Provider value={[serivces, setSerivces]}>
      <Heder></Heder>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      </BlogContext.Provider>
      </div>
  );
}

export default App;
