import React from "react";
import ProductCards from "../components/ProductCards";

function Productos({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) {
  const searchParams = new URLSearchParams(window.location.search);
  let search = searchParams.get("item");

  return (
    <>
      <ProductCards
        FiltroProducto={search}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
    </>
  );
}

export default Productos;
