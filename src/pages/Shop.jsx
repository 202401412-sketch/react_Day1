import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initialProducts } from '../data/productsData';
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  selectCartItems,
  selectTotalItemsCount,
  selectTotalPrice,
} from '../redux/slices/cartSlice';
import { useTheme } from '../context/ThemeContext';

export function Shop() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalItemsCount = useSelector(selectTotalItemsCount);
  const totalPrice = useSelector(selectTotalPrice);
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <div className="shop-page py-4">
      {/* Header Banner */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5">🛒 Redux Shopping Cart Catalog</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '650px' }}>
          Assignment 4 &bull; Powered by Redux Toolkit store and slices for dynamic state management across components.
        </p>
      </div>

      <div className="row g-4">
        {/* Product Catalog Grid (8 columns on lg) */}
        <div className="col-lg-8">
          <h3 className="fw-bold mb-4 d-flex align-items-center gap-2">
            <span>📦</span> Available Products
          </h3>
          <div className="row g-4">
            {initialProducts.map((product) => (
              <div key={product.id} className="col-12 col-md-6">
                <div
                  className={`card h-100 shadow-sm border-0 rounded-4 overflow-hidden ${
                    isDark ? 'bg-secondary bg-opacity-25 text-white' : 'bg-white text-dark'
                  }`}
                >
                  <div className="card-body d-flex flex-column justify-content-between p-4">
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="display-5">{product.image}</span>
                        <span className="badge bg-primary px-2 py-1 fs-6">{product.badge}</span>
                      </div>
                      <span className="text-muted small text-uppercase fw-bold">{product.category}</span>
                      <h4 className="fw-bold mt-1 mb-2">{product.name}</h4>
                      <p className="small text-muted mb-3">{product.description}</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25">
                      <span className="fs-4 fw-bold text-success">${product.price.toFixed(2)}</span>
                      <button
                        onClick={() => dispatch(addToCart(product))}
                        className="btn btn-primary btn-sm fw-semibold rounded-pill px-3 shadow-sm"
                      >
                        + Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shopping Cart Drawer / Summary Sidebar (4 columns on lg) */}
        <div className="col-lg-4">
          <div
            className={`card shadow-lg border-0 rounded-4 sticky-top ${
              isDark ? 'bg-dark text-white border border-secondary' : 'bg-white text-dark'
            }`}
            style={{ top: '90px' }}
          >
            <div className="card-header bg-primary text-white py-3 px-4 rounded-top-4 d-flex justify-content-between align-items-center">
              <h5 className="mb-0 fw-bold">🛒 Your Shopping Cart</h5>
              <span className="badge bg-light text-primary fw-bold rounded-pill">
                {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'}
              </span>
            </div>

            <div className="card-body p-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-4">
                  <div className="display-4 text-muted mb-2">🛍️</div>
                  <p className="text-muted fw-semibold mb-0">Your cart is currently empty.</p>
                  <small className="text-muted">Add items from the catalog to see them here.</small>
                </div>
              ) : (
                <>
                  <div className="cart-items-list mb-4" style={{ maxHeight: '350px', overflowY: 'auto' }}>
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-3 mb-3 bg-body-tertiary rounded-3 border">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <div>
                            <h6 className="fw-bold mb-0 text-dark">{item.name}</h6>
                            <small className="text-muted">${item.price.toFixed(2)} each</small>
                          </div>
                          <button
                            onClick={() => dispatch(removeFromCart(item.id))}
                            className="btn btn-sm btn-outline-danger border-0 p-1"
                            title="Remove item"
                          >
                            🗑️
                          </button>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mt-2">
                          <div className="btn-group btn-group-sm" role="group">
                            <button
                              onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                              className="btn btn-outline-secondary"
                            >
                              -
                            </button>
                            <span className="btn btn-outline-secondary disabled fw-bold px-3">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                              className="btn btn-outline-secondary"
                            >
                              +
                            </button>
                          </div>
                          <span className="fw-bold text-success">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <hr className="my-3" />

                  {/* Cart Total & Action Buttons */}
                  <div className="d-flex justify-content-between align-items-center mb-3 fs-5 fw-bold">
                    <span>Total Amount:</span>
                    <span className="text-success">${totalPrice.toFixed(2)}</span>
                  </div>

                  <div className="d-grid gap-2">
                    <button className="btn btn-success btn-lg fw-semibold shadow-sm">
                      Proceed to Checkout &rarr;
                    </button>
                    <button
                      onClick={() => dispatch(clearCart())}
                      className="btn btn-outline-danger btn-sm fw-semibold"
                    >
                      Clear Entire Cart
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
