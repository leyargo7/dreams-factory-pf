import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/actions";
import Cards from "../Cards/Cards";
import CategorySelector from "../CategorySelector/CategorySelector";
import Pagination from "../Pagination/Pagination";

export default function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.all);
  // Para paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setPoductPerPage] = useState(15);
  const indexLastProduct = currentPage * productPerPage;
  const indexFirstPoduct = indexLastProduct - productPerPage;
  const currentProducts = allProducts.slice(indexFirstPoduct, indexLastProduct);
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Pagination
          currentPage={currentPage}
          productPerPage={productPerPage}
          allProduct={allProducts.length}
          pagination={pagination}
        />
      </div>

      <Cards currentProducts={currentProducts} />

      <div>
        <Pagination
          currentPage={currentPage}
          productPerPage={productPerPage}
          allProduct={allProducts.length}
          pagination={pagination}
        />
      </div>
    </div>
  );
}
