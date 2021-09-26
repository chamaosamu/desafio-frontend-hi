import React from "react"
import Item from "../Item"
import { ListComponent } from "./styles"
import ItemModel from "models/ItemModel"

interface ListProp {
  data: ItemModel[]
  collapsed?: boolean
}

const List = ({ data, collapsed = true }: ListProp) => {
  return (
    <ListComponent aria-expanded={collapsed}>
      {data.map((item) => ( <Item key={item.id} item={item} /> ))}
    </ListComponent>
  )
}

export default List
