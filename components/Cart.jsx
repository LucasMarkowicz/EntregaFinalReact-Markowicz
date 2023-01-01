import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';
import ItemCart from "./ItemCart.jsx"
import { getFirestore, addDoc, collection} from 'firebase/firestore'


export default function Cart() {

  const {cart, totalPrice} = useCartContext();

  const order = {
    buyer: {
      name: 'Lucas',
      email: 'luckpelle1@gmail.com',
      phone: '123456789',
      address: 'Calle 123'
    },
    items: cart.map(apple => ({ id: apple.id, name: apple.name, price: apple.price, quantity: apple.quantity})),
    total: totalPrice()
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(({ id }) => console.log("Su id de compra es" + id))
  }

  if (cart.length === 0) {
    return(
      <div className="text-left mt-3">
        <p>Your cart is empty</p>
        <button className="btn btn-primary"><Link to='/'> Continue shopping
        </Link></button>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-center mt-5 mb-5">Your Cart</h2>
      <div>
        
        {cart.map(product => <ItemCart key={product.id} product={product} /> )}
        <h5 className="container">
          Total buy: ${totalPrice()}
        </h5>
        <div className="container"><button className="buyNowButton btn btn-primary" onClick={handleClick}>Buy now</button></div>
      </div>
    </div>
  );
}