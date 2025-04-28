import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CouponCodePopup from './CouponCodePopup';
import DiscountCodePopup from './DiscountCodePopUp';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [showCodePopup, setShowCodePopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get('type') || 'discount'; // Default to discount if not specified

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // If we have product data from navigation state, use it
        if (location.state?.product) {
          const productData = location.state.product;
          setProduct({
            ...productData,
            productsName: productData.products?.join(", ") || "",
          });
          setProductImages(productData.images || []);
          setMainImage(productData.images?.[0] || "");
          setIsLoading(false);
          return;
        }
        
        // Otherwise fetch from API based on type
        const endpoint = type === 'coupon' 
          ? `/api/discounts/products/coupon/${id}`
          : `/api/discounts/products/discount/${id}`;
          
        const response = await axios.get(endpoint);
        const productData = response.data;
        
        setProduct({
          ...productData,
          productsName: productData.products?.join(", ") || "",
        });
        setProductImages(productData.images || []);
        setMainImage(productData.images?.[0] || "");
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product details. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id, type, location.state]);

  const openCodePopup = () => {
    setShowCodePopup(true);
  };

  const closeCodePopup = () => {
    setShowCodePopup(false);
  };

  // Calculate days remaining until end date
  const getDaysRemaining = (endDate) => {
    if (!endDate) return null;
    
    const end = new Date(endDate);
    const today = new Date();
    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  };

  // Format the end date message
  const formatEndDate = (endDate) => {
    const daysRemaining = getDaysRemaining(endDate);
    
    if (daysRemaining === null) return null;
    
    if (daysRemaining < 0) return "Expired";
    if (daysRemaining === 0) return "Ends today";
    if (daysRemaining === 1) return "Ends tomorrow";
    
    return `Ends in ${daysRemaining} days`;
  };

  if (isLoading) {
    return (
      <div className="container py-80 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-80 text-center">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
        <button 
          className="btn btn-primary mt-3"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      {showCodePopup && (
        type === 'coupon' ? (
          <CouponCodePopup 
            onClose={closeCodePopup}
            productId={product._id}
            product={product}
            setProduct={setProduct}
          />
        ) : (
          <DiscountCodePopup 
            onClose={closeCodePopup}
            productId={product._id}
            product={product}
            setProduct={setProduct}
          />
        )
      )}
      
      <section className="product-details py-80">
        <div className="container container-lg">
          <div className="row gy-4">
            <div className="col-lg-9">
              <div className="row gy-4">
                <div className="col-xl-6">
                  <div className="product-details__gallery">
                    {productImages.length > 0 ? (
                      <div className="product-details__main-image mb-16">
                        <img 
                          src={mainImage} 
                          alt={product.name || "Product"} 
                          className="w-100 rounded-16"
                        />
                      </div>
                    ) : (
                      <div className="product-details__main-image mb-16 bg-light rounded-16 d-flex align-items-center justify-content-center" style={{ height: "300px" }}>
                        <i className="ph ph-image text-muted" style={{ fontSize: "3rem" }}></i>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="product-details__content">
                    <div className="mb-24">
                      <h1 className="text-xl fw-bold mb-8">{product.name}</h1>
                      <div className="flex-align gap-8">
                        <span className="text-main-600 text-md d-flex">
                          <i className="ph-fill ph-storefront" />
                        </span>
                        <span className="text-gray-900 text-xs">
                          {product.company || "Unknown Company"}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-24">
                      <div className="mt-32 flex-align flex-wrap gap-32">
                        <div className="flex-align gap-8">
                          <h4 className="mb-0">{product.discountPercentage || product.discount}% Off</h4>
                        </div>
                      </div>
                      <h7>On the Original Price</h7>
                      <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                    </div>
                    
                    <div className="mb-24">
                      <h6 className="text-md mb-16">Description</h6>
                      <p className="text-gray-700">{product.description}</p>
                    </div>
                    
                    {product.endDate && (
                      <div className="mb-24">
                        <div className="mt-32 flex-align gap-12 mb-16">
                          <span className="w-32 h-32 bg-white flex-center rounded-circle text-main-600 box-shadow-xl">
                            <i className="ph-fill ph-clock" />
                          </span>
                          <h6 className="text-md mb-0 fw-bold text-gray-900">
                            {formatEndDate(product.endDate)}
                          </h6>
                        </div>
                      </div>
                    )}
                    
                    {product.remainingCoupons !== undefined && (
                      <div className="mb-24">
                        <div className="mt-32 flex-align gap-12 mb-16">
                          <span className="w-32 h-32 bg-white flex-center rounded-circle text-main-600 box-shadow-xl">
                            <i className="ph-fill ph-lightning" />
                          </span>
                          <h6 className="text-md mb-0 fw-bold text-gray-900">
                            Almost {type === 'coupon' ? 'Coupons' : 'Discounts'} Are Gone
                          </h6>
                        </div>
                        <div
                          className="progress w-100 bg-gray-100 rounded-pill h-8"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow={(product.remainingCoupons / product.totalCoupons) * 100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-main-two-600 rounded-pill"
                            style={{ width: product.remainingCoupons / product.totalCoupons * 100 + "%" }}
                          />
                        </div>
                        <span className="text-sm text-gray-700 mt-8">
                          Available only: {product.remainingCoupons}
                        </span>
                      </div>
                    )}
                    
                    <div className="flex-between gap-16 flex-wrap">
                      <div className="flex-align flex-wrap gap-16">
                        <div className="flex-between gap-16 flex-wrap">
                          <div className="flex-align flex-wrap gap-16">
                            <div
                              className="btn btn-main rounded-pill flex-align d-inline-flex gap-8 px-48"
                              onClick={openCodePopup}
                            >
                              <i className="ph ph-shopping-cart" /> Redeem Now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-details__sidebar border border-gray-100 rounded-16 overflow-hidden">
                <div className="p-24">
                  <div className="flex-between bg-main-600 rounded-pill p-8">
                    <div className="flex-align gap-8">
                      <span className="w-44 h-44 bg-white rounded-circle flex-center text-2xl">
                        <i className="ph ph-storefront" />
                      </span>
                      <span className="text-white">{product.company || "Company"}</span>
                    </div>
                  </div>
                </div>
                <div className="p-24 bg-color-one d-flex align-items-start gap-24 border-bottom border-gray-100">
                  <span className="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                    <i className="ph-fill ph-truck" />
                  </span>
                  <div className="">
                    <h6 className="text-sm mb-8">Fast Delivery</h6>
                    <p className="text-gray-700">
                      Lightning-fast shipping, guaranteed.
                    </p>
                  </div>
                </div>
                <div className="p-24 bg-color-one d-flex align-items-start gap-24 border-bottom border-gray-100">
                  <span className="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                    <i className="ph-fill ph-arrow-u-up-left" />
                  </span>
                  <div className="">
                    <h6 className="text-sm mb-8">Free 90-day returns</h6>
                    <p className="text-gray-700">Shop risk-free with easy returns.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails; 