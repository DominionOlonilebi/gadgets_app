import React from "react";
import { InputGroup } from "react-bootstrap";

const Explore = () => {
  return (
    <div>
      <div className="container explore pt-5  text-center">
        <div className="row pt-5 ">
          <div className="col">
            <h1 className="pt-3 ">
              Work, Relax, Explore
              <br /> and Thrive Better
            </h1>
            <p className="mb-5">
              Discover a balanced life with tools and tips for productivity,
              leisure, adventure and personal growth.
            </p>
          </div>
          <div className="form d-flex justify-content-center">
            <div className="col-md-5">
              <InputGroup>
                <input type="text" className="form-control mb-4" required />
                <span className="explore-span">
                  <button className="py-2 px-3 mx-2 border-0 explore-btn text-white">
                    Search
                  </button>
                </span>
              </InputGroup>
            </div>
          </div>
        </div>
        <div className="explore-img mt-5">
          <img src="./img/pic 1.png" alt="laptop image" className="img-fluid mb-5"/>
        </div>
      </div>
    </div>
  );
};

export default Explore;
