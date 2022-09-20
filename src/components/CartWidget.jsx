import React,{useContext,useEffect} from 'react';
import {cartContext} from "../CartContextComponent";

export default function CartWidget() {
    const {cart,total} = useContext(cartContext)

return (
    <div>🛒({total})</div>
  )
}
