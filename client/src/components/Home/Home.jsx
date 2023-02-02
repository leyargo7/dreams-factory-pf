import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, isRegister } from "../../redux/actions/actions";
import { Toaster, toast } from "react-hot-toast";
import Cards from "../Cards/Cards";
import CarouselComponent from "../Carousel/CarouselComponent";
import Searchbar from '../Searchbar/Searchbar'

import Pagination from "../Pagination/Pagination";

export default function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.copyProducts);
  const isRegisterComp = useSelector((state) => state.isRegister);

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
    if (window.localStorage.errorOrder) {
      toast.error('You must be logged in to access this page')
    }

    if (isRegisterComp) {
      toast.success('User created successfully')
    }
    <Toaster />

    setTimeout(() => {
      window.localStorage.removeItem('errorOrder')
      dispatch(isRegister(false))
    }, 2000);




  }, [dispatch]);


  console.log();
  return (
    <div>
      <CarouselComponent />

      <div>
        <Searchbar setCurrentPage={setCurrentPage} />
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
