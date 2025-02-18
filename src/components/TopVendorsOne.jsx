import React from 'react'
import { Link } from 'react-router-dom'

const TopVendorsOne = () => {
    return (
        <section className="top-vendors py-80">
            <div className="container container-lg">
                <div className="section-heading">
                    <div className="flex-between flex-wrap gap-8">
                        <h5 className="mb-0">Weekly Top Vendors</h5>
                        <Link
                            to="/shop"
                            className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                        >
                            All Vendors
                        </Link>
                    </div>
                </div>
                <div className="row gy-4 vendor-card-wrapper">
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <div className="vendor-card text-center px-16 pb-24">
                            <div className="">
                                <img
                                    src="assets/images/temp/amazone.jpg"
                                    // src="assets/images/thumbs/vendor-logo1.png"
                                    alt=""
                                    className="vendor-card__logo m-12 rounded-circle"
                                />
                                <h6 className="title mt-32">Amazon</h6>
                                {/* <span className="text-heading text-sm d-block">
                                    Delivery by 6:15am
                                </span> */}
                                <Link
                                    // to="/shop"
                                    to="#"
                                    className="btn btn-main-two rounded-pill py-6 px-16 text-12 mt-8"
                                >
                                    10% - 20% off Snack &amp; Candy
                                </Link>
                            </div>
                            <div className="vendor-card__list mt-22 flex-center flex-wrap gap-8">
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/amazon1.png" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/amazon2.png" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/amazon3.png" alt="" />
                                    {/* <img src="assets/images/thumbs/vendor-img3.png" alt="" /> */}
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/amazon4.png" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/amazon5.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <div className="vendor-card text-center px-16 pb-24">
                            <div className="">
                                <img
                                    // src="assets/images/thumbs/vendor-logo2.png"
                                    src="assets/images/temp/fc.jpg"
                                    alt=""
                                    className="vendor-card__logo m-12 rounded-circle"
                                />
                                <h6 className="title mt-32">Flipkart</h6>
                                {/* <span className="text-heading text-sm d-block">
                                    Delivery by 6:15am
                                </span> */}
                                <Link
                                    // to="/shop"
                                    to="#"
                                    className="btn btn-main-two rounded-pill py-6 px-16 text-12 mt-8"
                                >
                                    30-40% off on Selected Products
                                </Link>
                            </div>
                            <div className="vendor-card__list mt-22 flex-center flex-wrap gap-8">
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/flipkart5.png" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/flipkart2.png" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    {/* <img src="assets/images/thumbs/vendor-img3.png" alt="" /> */}
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/filpkart3.png" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/amazon4.png" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/flipkart1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <div className="vendor-card text-center px-16 pb-24">
                            <div className="">
                                <img
                                    // src="assets/images/thumbs/vendor-logo3.png"
                                    src="assets/images/temp/myntra.jpg"
                                    alt=""
                                    className="vendor-card__logo m-12 rounded-circle"
                                />
                                <h6 className="title mt-32">Myntra</h6>
                                {/* <span className="text-heading text-sm d-block">
                                    Delivery by 6:15am
                                </span> */}
                                <Link
                                    // to="/shop"
                                    to="#"
                                    className="btn btn-main-two rounded-pill py-6 px-16 text-12 mt-8"
                                >
                                    20% Off on Beauty Products
                                </Link>
                            </div>
                            <div className="vendor-card__list mt-22 flex-center flex-wrap gap-8">
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/myntra1.jpg" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/myntra2.jpg" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    {/* <img src="assets/images/thumbs/vendor-img3.png" alt="" /> */}
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/myntra3.jpg" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/myntra4.jpg" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/mytra5.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <div className="vendor-card text-center px-16 pb-24">
                            <div className="">
                                <img
                                    src="assets/images/temp/lakme.png"
                                    alt=""
                                    className="vendor-card__logo m-12 rounded-circle"
                                />
                                <h6 className="title mt-32">Lakme</h6>
                                <span className="text-heading text-sm d-block">
                                    Delivery by 6:15am
                                </span>
                                <Link
                                    to="/shop"
                                    className="btn btn-main-two rounded-pill py-6 px-16 text-12 mt-8"
                                >
                                    $5 off Snack &amp; Candy
                                </Link>
                            </div>
                            <div className="vendor-card__list mt-22 flex-center flex-wrap gap-8">
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/lakme1.jpg" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/lakme2.jpg" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/lakme3.jpg" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/myntra2.jpg" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/lakme4.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <div className="vendor-card text-center px-16 pb-24">
                            <div className="">
                                <img
                                    src="assets/images/temp/mmt.png"
                                    alt=""
                                    className="vendor-card__logo m-12 rounded-circle"
                                />
                                <h6 className="title mt-32">Make My Trip</h6>
                                {/* <span className="text-heading text-sm d-block">
                                    Delivery by 6:15am
                                </span> */}
                                <Link
                                    // to="/shop"
                                    to="#"
                                    className="btn btn-main-two rounded-pill py-6 px-16 text-12 mt-8"
                                >
                                    Attend amazing events and shows
                                </Link>
                            </div>
                            <div className="vendor-card__list mt-22 flex-center flex-wrap gap-8">
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/mmt1.png" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/mmt2.png" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/mmt3.png" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/mmt1.png" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/mmt2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <div className="vendor-card text-center px-16 pb-24">
                            <div className="">
                                <img
                                    src="assets/images/temp/bms.png"
                                    alt=""
                                    className="vendor-card__logo m-12 rounded-circle mb-18"
                                />
                                <h6 className="title mt-32">Book My Show</h6>
                                {/* <span className="text-heading text-sm d-block">
                                    Delivery by 6:15am
                                </span> */}
                                <Link
                                    // to="/shop"
                                    tp="#"
                                    className="btn btn-main-two rounded-pill py-6 px-16 text-12 mt-8"
                                >
                                    200 Off on first ticket
                                </Link>
                            </div>
                            <div className="vendor-card__list mt-22 flex-center flex-wrap gap-8">
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/bms1.jpg" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/bms2.jpg" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/bms3.jpg" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/bms4.jpg" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/bms5.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <div className="vendor-card text-center px-16 pb-24">
                            <div className="">
                                <img
                                    src="assets/images/temp/nykaa.png"
                                    alt=""
                                    className="vendor-card__logo m-12 rounded-circle"
                                />
                                <h6 className="title mt-32">Nykaa</h6>
                                {/* <span className="text-heading text-sm d-block">
                                    Delivery by 6:15am
                                </span> */}
                                <Link
                                    // to="/shop"
                                    to="#"
                                    className="btn btn-main-two rounded-pill py-6 px-16 text-12 mt-8"
                                >
                                    10% off on Beauty Products
                                </Link>
                            </div>
                            <div className="vendor-card__list mt-22 flex-center flex-wrap gap-8">
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/nykaa1.jpg" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img sclassName="rounded-circle img-fluid" src="assets/images/temp/nykaa2.jpg" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/nykaa3.jpg" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/nykaa4.jpg" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/nykaa5.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <div className="vendor-card text-center px-16 pb-24">
                            <div className="">
                                <img
                                    src="assets/images/temp/amul.jpg"
                                    alt=""
                                    className="vendor-card__logo m-12 rounded-circle"
                                />
                                <h6 className="title mt-32">Amul</h6>
                                {/* <span className="text-heading text-sm d-block">
                                    Delivery by 6:15am
                                </span> */}
                                <Link
                                    // to="/shop"
                                    to="#"
                                    className="btn btn-main-two rounded-pill py-6 px-16 text-12 mt-8"
                                >
                                    20% off on Milk Products
                                </Link>
                            </div>
                            <div className="vendor-card__list mt-22 flex-center flex-wrap gap-8">
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/amul1.jpg" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/amul2.jpg" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/amul3.jpg" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/amul4.jpg" alt="" />
                                </div>
                                <div className="vendor-card__item bg-white rounded-circle flex-center">
                                    <img className="rounded-circle img-fluid" src="assets/images/temp/amul5.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default TopVendorsOne