import React from "react";
import Item from "./Item.jsx";

export default function ItemList({ data = [] }) {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {data.map((product) => (
          <Item key={product.id} info={product} />
        ))}
      </div>
    </div>
  );
}
