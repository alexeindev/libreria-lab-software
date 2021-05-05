import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import {
  CartLink,
  RegisterLink,
  ButtonsContainer,
  Logo,
  NavContainer,
} from "./Navbar.styles";
import cartIcon from "../images/cart.png";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <NavContainer>
          <Link style={{ textDecoration: "none" }} to='/'>
            <Logo>Librería</Logo>
          </Link>
          <ButtonsContainer>
            <Link style={{ textDecoration: "none" }} to='/sing-up'>
              <RegisterLink>Registrarse</RegisterLink>
            </Link>
            <Button light>Iniciar Sesión</Button>
            <Link style={{ textDecoration: "none" }} to='/'>
              <CartLink>
                Mi carrito <img src={cartIcon} alt='shopping cart' />{" "}
              </CartLink>
            </Link>
          </ButtonsContainer>
        </NavContainer>
      </div>
    );
  }
}

export default Navbar;
