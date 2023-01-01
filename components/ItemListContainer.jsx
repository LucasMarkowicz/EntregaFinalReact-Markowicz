import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import { useState, useEffect } from "react";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from 'firebase/firestore';

export default function Categoria() {
  let { category } = useParams();
  let [data, setData] = useState([]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'apple');
    if (category) {
      const queryFilter = query(
        queryCollection,
        where('category', '==', category)
      )
      getDocs(queryFilter)
      .then((res) =>
        setData(
          res.docs.map(product => ({ id: product.id, ...product.data() }))
        )
      )
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      )
    }
  }, [category]);

  return (
    <div>
      <h2 className="text-center mt-5 mb-5">Apple Products</h2>
      <div className="container">
        <ItemList data={data}></ItemList>
      </div>
    </div>
  );
}
