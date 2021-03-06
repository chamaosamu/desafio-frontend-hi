import { createGlobalStyle } from "styled-components"
import normalize from "styled-normalize"
import { ITheme } from "./Themes/Theme"

type GlobalStyleProps = {
  theme: ITheme
}

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
    --primary: ${({ theme }: GlobalStyleProps) => theme.palette.primary.main};
    --primary-contrast: ${({ theme }: GlobalStyleProps) =>
      theme.palette.primary.contrastText};
    --color-text: #333;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: var(--color-text);
    background-color: #bde0fe;
  }

  a {
    color: var(--color-text);
    text-decoration: none;

    &:hover{
      color: var(--primary);
    }
  }

  ::-webkit-scrollbar {
    width: 4px;
  }
  
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
  }
  
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px var(--primary); 
  }
`
