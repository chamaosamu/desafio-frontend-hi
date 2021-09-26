import QueryItem from "hooks/QueryItem"
import { DefaultValue, selector } from "recoil"
import addItemState from "hooks/storage/addItemState"
import IItem from "models/ItemModel"

const selectedUpdate = selector<IItem[]>({
  key: "@UPDATE_LIST_STATE",
  get: ({ get }) => get(addItemState),
  set: ({ set }, newValue) => {
    if (!(newValue instanceof DefaultValue))
      set(addItemState, (oldValue) => QueryItem(oldValue, newValue))
  }
})

export default selectedUpdate
