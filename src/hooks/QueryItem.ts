import ItemModel from "models/ItemModel"

export default function updateSearchItem(
  listItem: ItemModel[],
  change: ItemModel[],
  checked?: boolean
): ItemModel[] {
  const itemListUpdate = listItem.map((item) => {
    let newItem = item
    if (item.id === change[0].id) {
      return {
        ...change[0], children: updateSearchItem( change[0].children, change, change[0].checked)
      }
    }
    if (item.children.length > 0) {
      return {
        ...item, children: updateSearchItem(item.children, change, checked), checked: typeof checked !== "undefined" ? checked 
        : typeof item.checked !== "undefined"? item.checked : false
      }
    }
    return {
      ...newItem, checked: typeof checked !== "undefined" ? checked : typeof item.checked !== "undefined" ? item.checked : false
    }
  })

  return itemListUpdate
}
