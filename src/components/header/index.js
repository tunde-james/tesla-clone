import React, { useState } from "react"
import { useSelector } from "react-redux"
import { selectCars } from "../../features/car/carSlice"
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
  const cars = useSelector(selectCars)

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
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="https://www.tesla.com/models">
              {car}
            </a>
          ))}
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
