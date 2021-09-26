import React, { useState, useEffect } from "react";
import { ReactComponent as Over } from "styles/assets/over.svg";
import { useSetRecoilState } from "recoil";
import { ItemComponent } from "./styles";
import List from "../List/";
import ItemModel from "../../models/ItemModel";
import updateState from "../../hooks/storage/selectedUpdate";

interface ItemsProp {
  item: ItemModel
}

const ItemIndex = ({ item }: ItemsProp) => {
  const { id, name, children, level } = item
  const [collapsed, setCollapsed] = useState(false)
  const [sum, setSum] = useState(0)
  const RefreshState = useSetRecoilState(updateState)
  const checked = (item.checked === undefined ? false : item.checked) || sum > 0
  const onRefresh = () => { RefreshState([{ ...item, checked: !checked }]) }

  useEffect(() => {
    setSum(item.children.filter((child) => child.checked).length)
  }, [item.children])

  return (
    <ItemComponent level={level} sum={sum} total={children.length} collapsed={collapsed} aria-checked={checked} aria-expanded={collapsed} data-count={sum} data-level={level} data-total={children.length} data-testid={`item-${id}`}>
      <div>
        <input name="item" id={`item-${id}`} type="checkbox" checked={checked} onChange={onRefresh}/>
          <label htmlFor={`item-${id}`}>{name}</label>
            {children.length > 0 && (
              <button onClick={() => setCollapsed(!collapsed)} type="button">
                <Over fill={"#457b9d"} width={25} height={25} />
              </button>
            )}
      </div>
      {children.length > 0 && (
        <List data={children} collapsed={collapsed} />
      )}
    </ItemComponent>
  )
}

export default React.memo(ItemIndex)