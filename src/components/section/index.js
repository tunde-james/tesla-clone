import React from "react"
import {
  Wrap,
  ItemText,
  ButtonGroup,
  LeftButton,
  RightButton,
} from "./styles/section"

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>Custom Order</LeftButton>
        <RightButton>Existing Inventory</RightButton>
      </ButtonGroup>
    </Wrap>
  )
}

export default Section
