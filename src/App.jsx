import Navbar from "./Components/Navbar/Navbar"
import { Routes , Route } from "react-router-dom"
import Home from "./page/Home"
import ProductDetails from "./page/details/ProductDetails"
import Cart from "./page/Cart/Cart"
import { Toaster } from "react-hot-toast"
import Category from "./page/Category/Category"
import Fav from "./page/Favorite/fav"
import SearchResults from "./page/SearchResults/SearchResults"
import About from "./page/About/About"
import Services from "./page/Services/Services"
import Login from "./page/Login/Login"
function App() {


  return (
  <div>
      <>
  <Navbar />
    </>
    <Toaster position="bottom-right" toastOptions={{
      style:{
        background: '#e9e9e9',
        borderRadius: '5px',
        padding: '14px',
      }
    }}/>
   <Routes>
     <Route path="/category/:category" element={<Category />}/>
     <Route path="/" element={<Home />}/>
     <Route path="/product/:id" element={<ProductDetails />}/>
     <Route path="/cart" element={<Cart />}/>
     <Route path="/favorite" element={<Fav />}/>
     <Route path="/search" element={<SearchResults />}/>
     <Route path="/about" element={<About />}/>
     <Route path="/services" element={<Services />}/>
     <Route path="/login" element={<Login />}/>
   </Routes>
  </div>
  )
}

export default App
