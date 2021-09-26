import styled from "styled-components"

export const ListComponent = styled.ul`
  padding: 1px;
  margin-left: 28px;
  max-height: 0px;
  overflow: hidden;
  transition: all 0.2s linear;
  visibility: hidden;

  &[aria-expanded="true"] {
    max-height: none;
    visibility: visible;
    overflow-y: auto;
  }
`
