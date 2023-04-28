import React from "react";
import "./Products.css";
import { useEffect, useState } from "react";


function products() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);

  return (
    <div>
      <h2 style={{ color: "white" }}>data </h2>
      
      {data.length > 0 ? (
        <div className="box">
          {data.map((product) => {
           
            return (
              <div className="productsiteams">
                <img
                  src={product.image}
                  alt="product_image"
                  width="200"
                  height="200"
                />
                <h3>{product.title}</h3>
                <p>$ {product.price}</p>
               
              </div>
            );
          })}
        </div>
      ) : (
        <h2 style={{color:'red',}}>No data to Display</h2>
      )}
    </div>
  );
}

export default products;
