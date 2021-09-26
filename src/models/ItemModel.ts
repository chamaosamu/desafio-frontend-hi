type TypeItem = {
  id: string
  name: string
  level: number
  children: ItemModel[]
  checked?: boolean
}

export default interface ItemModel extends TypeItem {}
