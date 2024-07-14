import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import {
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div id="footer">
      <Container fluid className="footer_container pt-5 pb-3">
        <Container>
          <Row className="pt-3 ">
            <div className="col-md-5 col-12 text-center mb-5">
              <div className="row">
                <div className="col-md-5"></div>
                <div className="col-md-2">
                  <h5 className="brand justify-content-center text-center text-white mb-2">
                    EG
                  </h5>
                </div>
                <div className="col-md-5"></div>
              </div>
              <h5 className="brand-name mb-3">
                Everything <span className="footer-gadget">Gadgets</span>{" "}
              </h5>
              <div>
                <FaEnvelope className="social-media mx-2" />
                <FaFacebook className="social-media mx-2" />
                <FaInstagram className="social-medias mx-2" />
                <FaLinkedin className="social-media mx-2" />
              </div>
            </div>
            <div className="col-md-4 col-12 mb-3">
              <h5 className="mb-4">Contact</h5>
              <p>
                <FaLocationDot /> &nbsp; 5, Awolowo Road, Ikoyi, Lagos Nigeria.
              </p>
              <p>
                <FaPhone /> &nbsp; +234 805 612 5571
                <br /> &nbsp; &nbsp; &nbsp; +234 912 759 0356
              </p>
            </div>
            <div className="col-md-3 col-12 mb-3">
              <h5 className="mb-4">Company</h5>

              <p className="mx-2">About-Us </p>
              <p className="mx-2">Product</p>
              <p className="mx-2">Join Us</p>
            </div>
          </Row>
        </Container>
        <hr />
        <h6 className="text text-center">
          &copy; 2024 Everything Gadgets. All Rights Reserved
        </h6>
      </Container>
    </div>
  );
};

export default Footer;
