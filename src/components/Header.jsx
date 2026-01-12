import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarSample from "./NavbarSample";

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        {/* <header className="">
          <h1>My App</h1>
        </header> */}
        <NavbarSample/>
      </div>
    </>
  );
};
export default Header;
