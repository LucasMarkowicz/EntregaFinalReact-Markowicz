import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";
import { getFirestore, doc, getDoc} from 'firebase/firestore'

export default function ItemDetailContainer() {
    let { id } = useParams()
    const [data, setData] = useState({});


    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'apple', id);
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))
    }, [id])

return (

    <div>
         <ItemDetail data={data}></ItemDetail>
    </div>
 )
}

