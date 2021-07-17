import React from "react"
import { Section } from ".."
import { Container } from "./styles/home"

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgoundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgoundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgoundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgoundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgoundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />

      <Section
        title="Solar for New Roofs"
        description="Solar Roof Cost Less Than a New Roof Plus Soalr Panels"
        backgoundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />

      <Section
        title="Accessories"
        description=""
        backgoundImg="accessories.jpg"
        leftBtnText="Shop now"
        // rightBtnText="Learn more"
      />
    </Container>
  )
}

export default Home
