import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarSample from "./NavbarSample";

const Header = () => {
  return (
    <>
      <div className="container-fluid mt-0">
        <NavbarSample />
      </div>
    </>
  );
};
export default Header;
