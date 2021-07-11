import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/Cart";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Trang chủ</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/home/">giới thiệu</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/products/">Products</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <CartContext>
                  {({ cartItems }) => (
                    <Link to="/cart/">Cart {cartItems.length}</Link>
                  )}
                </CartContext>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
