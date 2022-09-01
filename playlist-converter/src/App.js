import logo from './logo.svg';
import './App.css';
import Header from './component/playlist-navigationbar';
import Home from './component/body-homepage';
import Login from './component/login';
import {
  BrowserRouter ,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import About from './component/about';
import Product from './component/product';
import Pricing from './component/pricing';
import Service from './component/service';

function App() {
  return (
    <div className="App">
       
       <BrowserRouter>
       <Header />
     <Routes>


 <Route exact path="/login" element={ <Login />}></Route>
 <Route exact path="/service" element={ <Service />}></Route>
 <Route exact path="/product" element={ <Product />}></Route>
 <Route exact path="/pricing" element={ <Pricing />}></Route>
 <Route exact path="/about" element={ <About />}></Route>

<Route exact path="/" element={<Home />}>
 </Route>

 </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
