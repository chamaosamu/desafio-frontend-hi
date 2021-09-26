import React from "react"
import { Info, Content} from "./styles"

type ContainerHomeProps = {
  children?: React.ReactChild | React.ReactChild[]
}

const ContainerHome = ({ children }: ContainerHomeProps) => {
  return (
    <>
      <Info>
        <h2>Desafio Front-End - Hi Platform</h2>
      </Info>
      <Content>{children}</Content>
    </>
  )
}

export default ContainerHome
