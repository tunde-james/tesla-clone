import React, { useState } from "react"
import {
  Container,
  Menu,
  RightMenu,
  HamburgerMenu,
  HamburgerNav,
  CloseHamburgerNav,
} from "./styles/header"

function Header() {
  const { burgerStatus, setBurgerStatus } = useState(false)

  const changeBurgerStatus = () => {
    setBurgerStatus(!burgerStatus)
    const bodySelect = document.querySelector("body")
    bodySelect.classList.toggle("hideScroll")
  }

  return (
    <Container>
      <a href="https://www.tesla.com/">
        <img src="/images/logo.svg" alt="Tesla logo" />
      </a>
      <Menu>
        <a href="https://www.tesla.com/models">Model S</a>
        <a href="https://www.tesla.com/model3">Model 3</a>
        <a href="https://www.tesla.com/modelx">Model X</a>
        <a href="https://www.tesla.com/modely">Model Y</a>
      </Menu>

      <RightMenu>
        <a href="https://shop.tesla.com/">Shop</a>
        <a href="https://www.tesla.com/teslaaccount">Account</a>
        <HamburgerMenu show={burgerStatus} onClick={changeBurgerStatus}>
          Menu
        </HamburgerMenu>
      </RightMenu>

      <HamburgerNav>
        <CloseHamburgerNav onClick={changeBurgerStatus}>x</CloseHamburgerNav>

        <li>
          <a href="https://www.tesla.com/inventory/new/m3">
            Existing Inventory
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/inventory/used/m3">Used Inventory</a>
        </li>
        <li>
          <a href="https://www.tesla.com/tradein">Trade-In</a>
        </li>
        <li>
          <a href="https://www.tesla.com/drive">Test Drive</a>
        </li>
        <li>
          <a href="https://www.tesla.com/cybertruck">Cybertruck</a>
        </li>
        <li>
          <a href="https://www.tesla.com/roadster">Roadster</a>
        </li>
        <li>
          <a href="https://www.tesla.com/semi">Semi</a>
        </li>
        <li>
          <a href="https://www.tesla.com/charging">Charging</a>
        </li>
      </HamburgerNav>
    </Container>
  )
}

export default Header
