import styled from "styled-components"

export const Container = styled.header`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.25em;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 700;
    text-transform: uppercase;
    padding: 0 0.625em;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 0.625em;
  }
`

export const HamburgerMenu = styled.a`
  cursor: pointer;
`

export const HamburgerNav = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 1.25em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in-out;
  overflow-y: scroll;

  li {
    padding: 0.9375em 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 700;
    }
  }
`

export const CloseHamburgerNav = styled.span`
  display: flex;
  align-self: flex-end;
  font-weight: 400;
  font-size: 1.4rem;
  cursor: pointer;
`
