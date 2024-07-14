import React, { useEffect } from "react";
import {
  Breadcrumb,
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartTotal } from "../redux/CartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const {
    data: cartProds,
    totalAmounts,
    deliveryCharge,
  } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [useSelector((state) => state.cart)]);

  return (
    <div>
      <div className="cart-page">
        <img src="./img/pic 1.png" alt="phone image" className="img-fluid" />
      </div>
      <section fluid className="message-container pt-5 pb-4">
        <Container>
          <Row className="d-flex flex-row justify-content-center">
            <div className="col-lg-9 col-md-12 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="col-md-8 text-start">
                    <Breadcrumb className="breadcrumbs">
                      <Breadcrumb.Item>
                        {" "}
                        <Link to="/" className="link">
                          Home
                        </Link>{" "}
                      </Breadcrumb.Item>
                      <Breadcrumb.Item>
                        <Link to="/product" className="link">
                          Phones
                        </Link>
                      </Breadcrumb.Item>
                      <Breadcrumb.Item>
                        <Link to="/product" className="link">
                          iPhone 14 PRO Max
                        </Link>
                      </Breadcrumb.Item>
                      <Breadcrumb.Item>
                        <Link to="/cart" className="link">
                          Shopping Cart
                        </Link>
                      </Breadcrumb.Item>
                      <Breadcrumb.Item active className=" text-danger">
                        Billing Details
                      </Breadcrumb.Item>
                    </Breadcrumb>
                  </div>
                </div>
              </div>
              <Form>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <label className="form-label">FirstName</label>
                    <InputGroup>
                      <input
                        type="text"
                        className="form-control mb-3"
                        required
                      />
                    </InputGroup>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">LastName</label>
                    <InputGroup>
                      <input
                        type="email"
                        className="form-control mb-3"
                        required
                      />
                    </InputGroup>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <label className="form-label">Country/Region</label>
                    <InputGroup>
                      <input
                        type="text"
                        className="form-control mb-3"
                        required
                      />
                    </InputGroup>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Street Address</label>
                    <InputGroup>
                      <input
                        type="email"
                        className="form-control mb-3"
                        required
                      />
                    </InputGroup>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-12">
                    <label className="form-label">State</label>
                    <InputGroup>
                      <input
                        type="text"
                        className="form-control mb-3"
                        required
                      />
                    </InputGroup>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Postal code(optional)</label>
                    <InputGroup>
                      <input
                        type="email"
                        className="form-control mb-3"
                        required
                      />
                    </InputGroup>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-12">
                    <label className="form-label">Phone Number</label>
                    <InputGroup>
                      <input
                        type="text"
                        className="form-control mb-3"
                        required
                      />
                    </InputGroup>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email Address</label>
                    <InputGroup>
                      <input
                        type="email"
                        className="form-control mb-3"
                        required
                      />
                    </InputGroup>
                  </div>
                </div>
                <div>
                  <label className="form-label">Other Notes(optional)</label>
                  <InputGroup>
                    <textarea
                      type="text"
                      className="form-control mb-3 message border-0"
                    ></textarea>
                  </InputGroup>
                </div>

                <div className="row g-4 justify-content-center place-order mt-5">
                  <div className="col-sm-8 col-md-12">
                    <div className="">
                      <div className="p-4">
                        <h5 className="summary mb-4">Order Summary</h5>
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
                        <h5 className="mb-0 ps-4 me-4 fw-bold">Total:</h5>
                        <p className="mb-0 pe-4">
                          $ {totalAmounts + deliveryCharge}{" "}
                        </p>
                      </div>
                      <div className="mx-4 check">
                        <h5 className="summary mb-3">Debit/Credit Card</h5>
                        <input type="radio" className="mb-3 mt-2" />
                        <span className="mx-2">Bank</span>
                        <br />
                        <input
                          type="radio"
                          checked
                          className="radio-btn mb-4"
                        />
                        <span className="mx-2">Cash on Delivery</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="form-control submit-button mt-4 mb-5 border-0"
                >
                  <Link to="/confirm" className="order">
                    Place Order
                  </Link>
                </Button>
              </Form>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Checkout;
