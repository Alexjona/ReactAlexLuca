import React from 'react' ;
import {Link } from "react-router-dom";
import CartWidget from './CartWidget' 

export default function Navbar(){
return (
<div>
<Link to="/">Home</Link>
<br />
<Link to="/category/Joysticks"> Joysticks</Link>
<br />
<Link to="/category/Cables"> Cables</Link>
<br />
<Link to="/category/Consolas"> Consolas</Link>
<br />
<Link to="/category/cart"> Cart</Link>
<br />
<Link to="/category/checkout"> Checkout</Link>
<br />
<CartWidget/>
<br />
</div>
);
}

