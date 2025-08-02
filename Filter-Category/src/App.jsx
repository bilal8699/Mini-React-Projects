import { use, useEffect, useState } from "react";
import "./App.css";
import Category from "./Category";
import axios from "axios";

function App() {
  const [finalCatg, setFinalCatg] = useState([]);
  const [productFinal, setProductFinal] = useState([]);
  const [catName, setCatName] = useState("");

  const getCategories = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => response.data)
      .then((finalRes) => {
        setFinalCatg(finalRes);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  };

  let getProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => response.data)
      .then((finalPro) => {
        setProductFinal(finalPro.products);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  useEffect(() => {
    if (catName !== "") {
      axios
        .get(`https://dummyjson.com/products/category/${catName}`)
        .then((response) => response.data)
        .then((finalPro) => {
          setProductFinal(finalPro.products);
        })
        .catch((err) => {
          console.error("Error fetching categories:", err);
        });
    }
  }, [catName]);

  let pitems = productFinal.map((value, index) => {
    return (
      <Card
        key={index}
        title={value.title}
        description={value.description}
        price={value.price}
        image={value.images[0]}
      />
    );
  });

  return (
    <>
      <h1 className="heading">Products</h1>
      <div className="filter">
        <div className="Category">
          <Category finalCatg={finalCatg} setCatName={setCatName} />
        </div>
        <div className="products">
          <p className="product-title">All Products</p>
          <div className="card-container">
            {productFinal.length >= 1 ? pitems : "No Products Found"}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function Card(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt="Product Image" />
      <h2 className="product-name">{props.title}</h2>
      <p className="product-description">{props.description}</p>
      <p className="product-price">${props.price}</p>
    </div>
  );
}
