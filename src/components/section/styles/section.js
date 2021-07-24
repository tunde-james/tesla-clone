import styled from "styled-components"

export const Wrap = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  /* z-index: -1; */
`

export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 1.875em;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  /* padding: 1.2em 4em; */
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 0.75rem;
  cursor: pointer;
  margin-left: 0.5em;
  margin-top: 1.875em;
`

export const RightButton = styled(LeftButton)`
  background-color: #fff;
  opacity: 0.65;
  font-size: 0.65em;
  color: #000;
  margin-top: 1.875em;
`

export const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
