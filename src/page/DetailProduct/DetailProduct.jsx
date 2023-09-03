import React from "react";
import Footer from "../../components/footer/footer";
import MenuComponent from "../../components/menu/menu";
import Product from "../../components/product/Product";
// Style
import DetailProductWrapper from "./DetailProduct.style";

const DetailProduct = () => {
  return (
    <DetailProductWrapper>
      <MenuComponent />
      <Product />
      <Footer />
    </DetailProductWrapper>
  );
};

export default DetailProduct;
