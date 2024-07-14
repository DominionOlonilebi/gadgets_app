import React, { useEffect, useState } from "react";
import {
  getCartTotal,
  removeItem,
  updateQuantity,
} from "../../redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";

const Cart = () => {
  const increaseQty = (cartProdId, currentQty) => {
    //increase qty
    const newQty = currentQty + 1;
    dispatch(updateQuantity({ id: cartProdId, quantity: newQty }));
  };

  const decreaseQty = (cartProdId, currentQty) => {
    //decrease qty
    const newQty = Math.max(currentQty - 1, 1);
    dispatch(updateQuantity({ id: cartProdId, quantity: newQty }));
  };

  const dispatch = useDispatch();
  const {
    data: cartProds,
    totalAmounts,
    deliveryCharge,
  } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [useSelector((state) => state.cart)]);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  // useEffect(() => {
  //   if(cartProds.length) {
  //     increaseQty(cartProds[0].id, 0)
  //   }
  // }, [])

  const emptyCartMsg = (
    <h4 className="container text-center p-4">Your Cart is Empty</h4>
  );

  return (
    <>
      <div className="cart-page">
        <img src="./img/pic 1.png" alt="phone img" className="img-fluid" />
      </div>

      <section fluid className=" page-header py-3">
        <ol className="breadcrumb justify-content-center mb-0">
          <Link to="/" className="breadcrumb-item link">
            Home
          </Link>
          <li className="breadcrumb-item active text-danger">Cart</li>
        </ol>

        {cartProds.length === 0 ? (
          emptyCartMsg
        ) : (
          <section fluid className=" pb-5 cart-table">
            <div className="container py-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Products</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProds.map((cartProd) => (
                      <tr key={cartProd.id}>
                        <th scope="row">
                          <div className="d-flex align-items-center">
                            <img
                              src={cartProd.Img}
                              alt={cartProd.Img}
                              style={{ width: 100 }}
                            />
                          </div>
                        </th>
                        <td>
                          <p className="mb-0 mt-4 cart-page-name">
                            {cartProd.Name}
                          </p>
                        </td>
                        <td>
                          <p className="mb-0 mt-4 cart-page-price">
                            {cartProd.Price}
                          </p>
                        </td>
                        <td>
                          <div
                            className="input-group quantity mt-4 "
                            style={{ width: "100px" }}
                          >
                            <div className="input-group-btn">
                              <button
                                onClick={() =>
                                  decreaseQty(cartProd.id, cartProd.quantity)
                                }
                                className="btn btn-sm "
                              >
                                <FaMinus />
                              </button>
                            </div>
                            <span className="form-control form-control-sm text-center ">
                              {cartProd.quantity || 1}
                            </span>
                            <div className="input-group-btn">
                              <button
                                onClick={() =>
                                  increaseQty(cartProd.id, cartProd.quantity)
                                }
                                className="btn btn-sm  "
                              >
                                <FaPlus />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="mb-0 mt-4 cart-page-total">
                            ${cartProd.totalPrice}{" "}
                          </p>
                        </td>
                        <td>
                          <button
                            onClick={() => handleRemoveItem(cartProd.id)}
                            className="btn btn-md  mt-4"
                          >
                            <FaTrash className="trash" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="row g-4 justify-content-center checkout mt-5">
                <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                  <div className="bg-light rounded">
                    <div className="p-4">
                      <h4 className="text-center mb-4">
                        Cart <span className="fw-normal">Total</span>
                      </h4>
                      <div className="d-flex justify-content-between mb-4 border-bottom">
                        <h5 className="mb-0 me-4">Subtotal:</h5>
                        <p className="mb-0">$ {totalAmounts} </p>
                      </div>
                      <div className="d-flex justify-content-between ">
                        <h5 className="mb-0 me-4">Shipping:</h5>
                        <div>
                          <p className="mb-0"> $ {deliveryCharge} </p>
                        </div>
                      </div>
                    </div>
                    <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                      <h5 className="mb-0 ps-4 me-4">Total:</h5>
                      <p className="mb-0 pe-4">
                        $ {totalAmounts + deliveryCharge}{" "}
                      </p>
                    </div>
                    <button
                      className="btn checkout-btn px-4 py-2 mb-4 mx-3  text-center"
                      type="button"
                    >
                      <Link to="/checkout" className="proceed text-white">
                        Proceed Checkout
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default Cart;
