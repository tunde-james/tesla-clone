import React from "react"
import {
  Wrap,
  ItemText,
  ButtonGroup,
  LeftButton,
  RightButton,
  DownArrow,
  Buttons,
} from "./styles/section"

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgoundImg,
}) {
  return (
    <Wrap bgImage={backgoundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>

      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText ? <RightButton>{rightBtnText}</RightButton> : ""}
        </ButtonGroup>

        <DownArrow src="/images/down-arrow.svg" alt="" />
      </Buttons>
    </Wrap>
  )
}

export default Section
