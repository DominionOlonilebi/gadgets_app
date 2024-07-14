import React, { useState } from "react";
import { FaBarsProgress, FaCartShopping } from "react-icons/fa6";
import { Badge, Breadcrumb, Pagination } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../redux/CartSlice.jsx";
import Detail from "../data/datas.jsx";

const Prod = () => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    let totalPrice = qty * product.Price;

    delete product.Title;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };
    console.log(tempProduct);
    dispatch(addToCart(tempProduct));
    navigate("/cart");
  };

  const [menuItems, setMenuItems] = useState(Detail);
  const filterItems = (Category) => {
    const newItems = Detail.filter((data) => data.Category === Category);
    setMenuItems(newItems);

    // all product
    if (Category === "all") {
      setMenuItems(Detail);
    }
  };

  return (
    <div className="prod-div">
      <div className="container py-5">
        <div className="text-center">
          <div className="row g-4">
            <div className="col-md-4 text-start">
              <Breadcrumb className="breadcrumbs">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active className=" text-danger">
                  Phones
                </Breadcrumb.Item>
              </Breadcrumb>
              <h4>Categories</h4>
            </div>
            <div className="col-md-4 icons"></div>
            <div className="col-md-4 icons">
              <FaCartShopping />
              <FaBarsProgress className="mx-3" />
            </div>
            <div className="col-md-12">
              <ul className="nav nav-pills d-inline-flex text-center mb-5">
                <li className="nav-item">
                  <a
                    className="d-flex m-2  items rounded-sm"
                    onClick={() => filterItems("all")}
                  >
                    All
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex m-2  items rounded-sm"
                    onClick={() => filterItems("Apple")}
                  >
                    Apple
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex m-2  items rounded-sm"
                    onClick={() => filterItems("Samsung")}
                  >
                    Samsung
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex m-2  items rounded-sm"
                    onClick={() => filterItems("Xiaomi")}
                  >
                    Xiaomi
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex m-2  items rounded-sm"
                    onClick={() => filterItems("Tecno")}
                  >
                    Tecno
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex m-2  items rounded-sm"
                    onClick={() => filterItems("Itel")}
                  >
                    Itel
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex m-2  items rounded-sm"
                    onClick={() => filterItems("OnePlus")}
                  >
                    OnePlus
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex m-2  items rounded-sm"
                    onClick={() => filterItems("Google(Pixel)")}
                  >
                    Google(Pixel)
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex m-2  items rounded-sm"
                    onClick={() => filterItems("Sony")}
                  >
                    Sony
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex m-2  items rounded-sm"
                    onClick={() => filterItems("LG")}
                  >
                    LG
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex m-2  items rounded-sm"
                    onClick={() => filterItems("Lenovo")}
                  >
                    Lenovo
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex m-2  items rounded-sm"
                    onClick={() => filterItems("Huawei")}
                  >
                    Huawei
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* product mapping */}
        <div>
          <div className="tab-pane fade show p-0 active">
            <div className="row g-4">
              <div className="col-md-12 prod-container">
                <div className="row g-4 d-flex justify-content-center my-prod">
                  {menuItems.map((phone) => (
                    <div className="col-lg-5 col-md-6 col-12 box" key={phone.id}>
                      <div className="card pb-3 border-0 mb-3">
                        <h6>
                          <Badge
                            bg="secondary"
                            className="mt-3 mx-3 px-2 py-1 detail-category"
                          >
                            {phone.Category}
                          </Badge>
                        </h6>
                        <div className="product-img img-fluid">
                          <img
                            src={phone.Img}
                            alt="product image"
                            className="img-fluid w-100 rounded-sm"
                          />
                        </div>
                        <div className="detail ">
                          <div className="detailed ">
                            <h6 className="text-center name pt-3 mb-3 fw-bold">
                              {phone.Name}{" "}
                            </h6>
                            <div className="details px-4">
                              <h6 className="">${phone.Price} </h6>
                              <div className="d-flex justify-content-end icon mb-3">
                                {" "}
                                {phone.Title} {phone.Title} {phone.Title}{" "}
                                {phone.Title} {phone.Title}
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end px-4">
                            <button
                              onClick={() => handleAddToCart(phone)}
                              className=" detail-btn py-2 px-3 border-0 text-white"
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Pagination className="d-flex justify-content-center pagination">
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>

                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Item>{5}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item>{12}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                  <div className="col-lg-10 col-md-12 col-12">
                    <button className="form-control prod-buttons border-0">
                      <Link to="/product" className="link">
                        View All
                      </Link>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prod;
