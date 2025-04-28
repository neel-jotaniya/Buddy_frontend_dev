import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SearchComponent.css';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState({ discounts: { items: [], total: 0 }, coupons: { items: [], total: 0 } });
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Debounce search to avoid too many API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) {
        performSearch();
      } else {
        setSearchResults({ discounts: { items: [], total: 0 }, coupons: { items: [], total: 0 } });
        setShowResults(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const performSearch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/search', {
        params: {
          productName: searchQuery,
          page: 1,
          limit: 10
        }
      });
      setSearchResults(response.data);
      setShowResults(true);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch();
    }
  };

  const getDaysRemaining = (endDate) => {
    if (!endDate) return null;
    const end = new Date(endDate);
    const today = new Date();
    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const formatEndDate = (endDate) => {
    const daysRemaining = getDaysRemaining(endDate);
    if (daysRemaining === null) return null;
    if (daysRemaining < 0) return "Expired";
    if (daysRemaining === 0) return "Ends today";
    if (daysRemaining === 1) return "Ends tomorrow";
    return `Ends in ${daysRemaining} days`;
  };

  return (
    <div className="search-container" ref={searchRef}
      style={{ width: "100%", margin:'auto'}}
    >
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Search for discounts and coupons..."
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => searchQuery.trim() && setShowResults(true)}
          />
          <button type="submit" className="search-button">
            <i className="ph ph-magnifying-glass" />
          </button>
        </div>
      </form>

      {showResults && (searchResults.discounts.items.length > 0 || searchResults.coupons.items.length > 0) && (
        <div className="search-results">
          {isLoading ? (
            <div className="search-loading">Loading...</div>
          ) : (
            <>
              {searchResults.discounts.items.length > 0 && (
                <div className="search-section">
                  <div className="search-section-title-container">
                    <h3 className="search-section-title" style={{ fontWeight: "bold", color: "black" }}>Discounts ({searchResults.discounts.total})</h3>
                      <button className="close-button" style={{marginTop:"10px"}} onClick={() => setShowResults(false)}>
                      <i className="ph ph-x icon-hover"/>
                    </button>
                  </div>
                  <hr style={{border:"3px solid"}}/>
                  <ul className="search-list">
                    {searchResults.discounts.items.map((discount) => (
                      <li key={discount.id} className="search-item">
                        <Link to={`/product-details`} state={{ product: discount }} className="search-item-link">
                          <div className="search-item-content">
                            {/* <div className="text-sm">{discount.name}</div> */}
                            <div className="search-item-title text-bold">{discount.products.join(', ')}</div>
                            <div className="search-item-description">{discount.description.length > 40 ? discount.description.substring(0, 40) + '...' : discount.description}</div>
                            <div className="search-item-discount">{discount.discount}% OFF</div>
                            {discount.endDate && (
                              <div className="search-item-end-date">
                                {formatEndDate(discount.endDate)}
                              </div>
                            )}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {searchResults.coupons.items.length > 0 && (
                <div className="search-section">
                  <h3 className="search-section-title" style={{fontWeight:"bold", color:"black"}}>Coupons ({searchResults.coupons.total})</h3>
                  <hr style={{ border: "3px solid" }} />
                  <ul className="search-list">
                    {searchResults.coupons.items.map((coupon) => (
                      <li key={coupon.id} className="search-item">

                        <Link
                          to="/product-details-coupon"
                          // key={index}
                          state={{ product: coupon }}
                          className="search-item-link"
                        >
                          <div className="search-item-content">
                            <div className="search-item-title">{coupon.products.join(', ')}</div>
                            <div className="search-item-description">{coupon.description.length > 40 ? coupon.description.substring(0, 40) + '...' : coupon.description}</div>
                            <div className="search-item-discount">{coupon.discount}% OFF</div>
                            {coupon.endDate && (
                              <div className="search-item-end-date">
                                <span style={{ color: new Date(coupon.endDate) - new Date() <= 200 * 24 * 60 * 60 * 1000 ? 'red' : 'inherit' }}>
                                  {formatEndDate(coupon.endDate)}
                                </span>

                              </div>
                            )}
                          </div>
                        </Link>


                        {/* <Link to={`/product-details-coupon?id=${coupon.id}`}
                        className="search-item-link">
                          <div className="search-item-content">
                            <div className="search-item-title">{coupon.products.join(', ')}</div>
                            <div className="search-item-description">{coupon.description}</div>
                            <div className="search-item-discount">{coupon.discount}% OFF</div>
                            {coupon.endDate && (
                              <div className="search-item-end-date">
                                {formatEndDate(coupon.endDate)}
                              </div>
                            )}
                          </div>
                        </Link> */}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent; 