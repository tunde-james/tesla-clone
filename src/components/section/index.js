import React from "react"
import Fade from "react-reveal/Fade"
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
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText ? <RightButton>{rightBtnText}</RightButton> : ""}
          </ButtonGroup>
        </Fade>

        <DownArrow src="/images/down-arrow.svg" alt="" />
      </Buttons>
    </Wrap>
  )
}

export default Section
