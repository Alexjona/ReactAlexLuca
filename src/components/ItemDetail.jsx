import React from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({product}) {
    return (
        <div>
            <h1>id: {product.id}</h1>
            <p>name: {product.name}</p>
            <img style={{ height: "400px" }} src={product.img} alt={product.name}>
            </img>
            <p>price: {product.price}</p>
            <p>stock: {product.stock}</p>
            <ItemCount product={product}/>
        </div>
    )
}