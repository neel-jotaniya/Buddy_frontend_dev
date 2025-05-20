import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import HomePageOne from "./pages/HomePageOne";
import HomePageTwo from "./pages/HomePageTwo";
import HomePageThree from "./pages/HomePageThree";
import ShopPage from "./pages/ShopPage";
import ProductDetailsPageOne from "./pages/ProductDetailsPageOne";
import ProductDetailsPageTwo from "./pages/ProductDetailsPageTwo";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AccountPage from "./pages/AccountPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ContactPage from "./pages/ContactPage";
import PhosphorIconInit from "./helper/PhosphorIconInit";
import VendorPage from "./pages/VendorPage";
import VendorDetailsPage from "./pages/VendorDetailsPage";
import VendorTwoPage from "./pages/VendorTwoPage";
import VendorTwoDetailsPage from "./pages/VendorTwoDetailsPage";
import BecomeSellerPage from "./pages/BecomeSellerPage";
import WishlistPage from "./pages/WishlistPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DiscountCodePopup from "./components/DiscountCodePopUp";
import ProductDetailsPagethree from "./pages/ProductDetailsPageThree";
import PaymentMain from "./pages/PaymentMain";
import ProductDetails from "./components/ProductDetails";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import useAuthStore from "./store/authStore";
import Preloader from "./helper/Preloader";
// import './App.css';

function App() {
  const { initializeAuth } = useAuthStore();
  const isLoading = useAuthStore((state) => state.isLoading);

  React.useEffect(() => {
    initializeAuth();
  }, []);

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  React.useEffect(() => {

  }, [isAuthenticated]);


  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <PhosphorIconInit />

      { isLoading === true  ? <Preloader message="Loading..." isLoading={isLoading}/> :
        <Routes>
        <Route exact path='/' element={<HomePageOne />} />
        <Route exact path='/index-two' element={<HomePageTwo />} />
        <Route exact path='/index-three' element={<HomePageThree />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/shop' element={<ShopPage />} />
        <Route exact path='/test' element={<DiscountCodePopup />} />
        <Route
          exact
          path='/product-details'
          element={<ProductDetailsPageOne />}
        />
        <Route
          exact
          path='/product-details-two'
          element={<ProductDetailsPageTwo />}
        />
        <Route
          exact
          path='/product-details-coupon'
          element={<ProductDetailsPagethree />}
        />
        <Route
          exact
          path='/product-details/:id'
          element={<ProductDetailsPage />}
        />
        <Route exact path='/cart' element={<CartPage />} />
        <Route exact path='/checkout' element={<CheckoutPage />} />
        <Route exact path='/become-seller' element={<BecomeSellerPage />} />
        <Route exact path='/wishlist' element={<WishlistPage />} />
        <Route exact path='/account' element={<AccountPage />} />
        <Route exact path='/blog' element={<BlogPage />} />
        <Route exact path='/blog-details' element={<BlogDetailsPage />} />
        <Route exact path='/contact' element={<ContactPage />} />
        <Route exact path='/vendor' element={<VendorPage />} />
        <Route exact path='/vendor-details' element={<VendorDetailsPage />} />
        <Route exact path='/vendor-two' element={<VendorTwoPage />} />
        <Route exact path='/pay' element={<PaymentMain />} />
        <Route
          exact
          path='/vendor-two-details'
          element={<VendorTwoDetailsPage />}
        />
      </Routes>}
    </BrowserRouter>
  );
}

export default App;
