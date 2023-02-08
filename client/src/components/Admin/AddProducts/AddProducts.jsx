import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { postProduct } from "../../../redux/actions/actions";
import { useDispatch } from "react-redux";

import s from "./AddProducts.module.css";

const AddProducts = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.admin) {
      history.push("/");
    }
  }, [history]);

  const [category, setCategory] = useState("");
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    rating: "",
    brand: "",
    model: "",
    price: "",
    inStock: "",
    sidePanel: "",
    color: "",
    cabinetType: "",
    style: "",
    backlit: "",
    wireless: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    if(e.target.files){
      setProduct({
        ...product,
        image: e.target.files[0],
      });
    }
    // setProduct({
    //   ...product,
    //   image: e.target.files[0],
    // });
  }

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setProduct({
        ...product,
        category: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postProduct(product));
    alert("Product added");
    history.push("/admin");

    
  };

  return (
    <div>
      <h1>Add Product</h1>

      <form className={s.form} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">Product Name</label>
        <input
          type="text"
          placeholder="Product name"
          name="title"
          value={product.title}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="">Description</label>
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={product.description}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="">Category</label>
        <select name="category" onChange={(e) => handleCategory(e)}>
          <option value="">Select category</option>
          <option value="cases">cases</option>
          <option value="keyboards">keyboards</option>
          <option value="case_fan">case_fan</option>
          <option value="power_supply">power_supply</option>
          <option value="ram">ram</option>
          <option value="cpu_fan">cpu_fan</option>
          <option value="mouse">mouse</option>
          <option value="gpus">gpus</option>
          <option value="motherboard">motherboard</option>
          <option value="processors">processors</option>
          <option value="storages">storages</option>
        </select>

        <label htmlFor="">Rating</label>
        <input
          type="number"
          placeholder="Rating"
          name="rating"
          value={product.rating}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="">Brand</label>
        <input
          type="text"
          placeholder="Brand"
          name="brand"
          value={product.brand}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="">Model</label>
        <input
          type="text"
          placeholder="Model"
          name="model"
          value={product.model}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="">Image</label>
        <input type="file" placeholder="Image" name="image" onChange={e=>handleFileChange(e)}/>

        <label htmlFor="">Price</label>
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={product.price}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="">Count in stock</label>
        <input
          type="number"
          placeholder="Count in stock"
          name="inStock"
          value={product.inStock}
          onChange={(e) => handleChange(e)}
        />

        {category === "cases" && (
          <div className={s.renderCate}>
            <label htmlFor="">SidePanel</label>
            <input
              type="text"
              placeholder="sidePanel"
              name="sidePanel"
              value={product.sidePanel}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="">Color</label>
            <input
              type="text"
              placeholder="Color"
              name="color"
              value={product.color}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="">Cabinet Type</label>
            <input
              type="text"
              placeholder="Cabinet Type"
              name="cabinetType"
              value={product.cabinetType}
              onChange={(e) => handleChange(e)}
            />
          </div>
        )}
        {category === "keyboards" && (
          <div className={s.renderCate}>
            <label htmlFor="">Color</label>
            <input
              type="text"
              placeholder="Color"
              name="color"
              value={product.color}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="">Style</label>
            <input
              type="text"
              placeholder="Style"
              name="style"
              value={product.style}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="">Backlit</label>
            <input
              type="text"
              placeholder="Backlit"
              name="backlit"
              value={product.backlit}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="">Wireless</label>
            <input
              type="text"
              placeholder="Wireless"
              name="wireless"
              value={product.wireless}
              onChange={(e) => handleChange(e)}
            />
          </div>
        )}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AddProducts;