import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import ProductDetails from "../components/ProductDetails";
import NewArrivalTwo from "../components/NewArrivalTwo";
import ShippingOne from "../components/ShippingOne";
import NewsletterOne from "../components/NewsletterOne";
import FooterOne from "../components/FooterOne";
import BottomFooter from "../components/BottomFooter";
import BreadcrumbTwo from './../components/BreadcrumbTwo';
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";

const ProductDetailsPage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* ColorInit */}
      <ColorInit color={false} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* HeaderOne */}
      <HeaderOne />

      {/* Breadcrumb */}
      <BreadcrumbTwo title={"Product Details"} />

      {/* ProductDetails */}
      <ProductDetails />

      {/* NewArrivalTwo */}
      <NewArrivalTwo />

      {/* ShippingOne */}
      <ShippingOne />

      {/* NewsletterOne */}
      <NewsletterOne />

      {/* FooterTwo */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default ProductDetailsPage; 