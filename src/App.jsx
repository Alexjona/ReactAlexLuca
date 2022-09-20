
import { Route, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import CartContextComponent from "./CartContextComponent";


function App() {

    return ( 

    <CartContextComponent>
        <BrowserRouter>
        <Navbar/>
        <Route path = "/" element = {<ItemListContainer/>}/> 
        <Route path = "/category/:idCategory" element = {<ItemListContainer/>}/> 
        <Route path = "/item/:idItem" element = {<ItemDetailContainer/>}/> 
        <Route path = "/cart" element = {<Cart/>}/> 
        <Route path = "/checkout" element = {<Checkout/>}/> 
          <h6>Gamex 2022</h6>
        </BrowserRouter>
        </CartContextComponent>

    );
}

export default App;