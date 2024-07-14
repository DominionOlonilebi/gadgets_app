import React, { useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartTotal } from "../redux/CartSlice";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

const Navbars = () => {
  const dispatch = useDispatch();
  const { totalItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  });

  return (
    <section fluid className="shadow-sm py-1">
      <Navbar expand="lg" className="navbar">
        <Container className="navbars">
          <a href="/" className="navbar-brand">
            <h5 className="text-primary text-white">EG</h5>
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <div className="navbar-nav mx-auto">
              <Link to="/" className="nav-item nav-link mx-3">
                Home
              </Link>
              <Link to="/product" className="nav-item nav-link mx-3">
                Product
              </Link>
              <Link to="/cart" className="nav-item nav-link mx-3">
                Cart
                <span className="px-2 py-1 mx-2 bg-secondary rounded-circle text-white">
                  {totalItems}
                </span>
              </Link>
            </div>
            <div className="d-flex m-2 me-0">
              <button className="nav-btn border-0 text-white">
                <Link to="/product" className="nav-item nav-link mx-3">
                  Buy Now
                </Link>
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <div className='container px-0'>
            <nav className='navbar navbar-light bg-white navbar-expand-xl '>
                <a href="/" className='navbar-brand'>
                <h5 className='text-primary text-white'>EG</h5>
                </a>
                <button type='btn' className='navbar-toggler py-2 px-3'>
                    <span className=' text-primary'> <FaBars/> </span>
                </button>
                <div className='collapse navbar-collapse bg-white'>
                    <div className='navbar-nav mx-auto'>
                        <Link to="/" className='nav-item nav-link mx-3'>Home</Link>
                        <Link to="/product" className='nav-item nav-link mx-3'>Product</Link>
                        <Link to="/cart" className='nav-item nav-link mx-3'>Cart
                        <span className='position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center px-1 mx-1' style={{top: "25px", left: "42rem", height: "20px", minWidth: "10px"}}>
                            {totalItems}
                        </span>
                        </Link>
                    </div>
                    <div className='d-flex m-2 me-0'>
                        <button className='nav-btn border-0 text-white'>Buy Now</button>
                    </div>
                </div>
            </nav>
        </div> */}
    </section>
  );
};

export default Navbars;
