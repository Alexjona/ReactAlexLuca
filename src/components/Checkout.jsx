import React, { useContext, useState} from "react";
import { cartContext } from "../CartContextComponent";
import {addDoc,collection,getFirestore} from "firebase/firestore"

export default function Checkout(){
  const { totalToPay, cart,deleteAllFromCart }= useContext(cartContext);
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [orderId,serOrderId] = useState("");
  
  
  
  function validateForm(){
  const order ={
    buyer: {name, tel, email },
    totalToPay,
    cart,
  
  }

  const db= getFirestore();
  const orders = collection(db, "orders");
  addDoc(orders,order).then(({id}) =>{
    serOrderId(id);
    deleteAllFromCart();
  })

  
  console.log(order);
  return (
  <div>
  <h1>Terminar compra, ingrese datos</h1>
  <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
  <input type="tel" placeholder="tel" onChange={(e) => setTel(e.target.value)} />
  <input type="email" placeholder="name" onChange={(e) => setEmail(e.target.value)} />
  <button onclick={validateForm}>TERMINAR COMPRA FINALMENTE!</button>
  
  <p>Id de tu compra: {orderId}</p>
  </div>
  
  );
  
  };
}
