import styled from "styled-components"
import checked from "styles/assets/checked.svg"
import minus from "styles/assets/minus.svg"

type ItComponentProps = {
  collapsed?: boolean
  level: number
  total?: number
  sum: number
}

export const ItemComponent = styled.li<ItComponentProps>`
  list-style: none;
  padding: 1px;
  background: #caf0f8;
  border-radius: 6px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  
  > div {
    display: flex;
    align-items: normal;

    &:hover {
      box-shadow: 0 0 0 3px #90e0ef;
      border-radius: 6px;
    }

    label {
      flex: 1;
      align-items: center;
      padding: 18px;
      min-width: 0px;
      display: flex;
      cursor: pointer;

      ${(props) =>
        `
        padding-left: ${(props.level + 1) * 26}px;
      `}

      &:before {
        content: "";
        width: 18px;
        height: 18px;
        display: block;
        border: solid 1.5px #457b9d;
        border-radius: 2px;
        margin-right: 13px;
        ${({ sum, total = 0, theme }) =>
          sum > 0 &&
          sum !== total &&
          `
          background: var(--primary) url(${minus}) no-repeat center center;
          background-size: 10px 10px;
        `}
      }
    }

    input {
      position: absolute;
      opacity: 0;
    }

    input:checked + label:before {
      ${({ sum, total = 0, theme }) =>
        sum < total
          ? `
          background: var(--primary) url(${minus}) no-repeat center center;
          background-size: 10px 10px;
        `
          : `
          background: var(--primary) url(${checked}) no-repeat center center;
          background-size: 10px 10px;
        `}
    }

    button {
      width: 50px;
      background: none;
      border: none;
      appearance: none;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      &:hover {
        color: var(--primary);
      }

      svg {
        transition: all 0.2s ease-in-out;
        ${({ collapsed = false }) =>
          collapsed ? `transform: rotate(-180deg);` : `transform: rotate(0deg);`}
      }
    }
  }
`
