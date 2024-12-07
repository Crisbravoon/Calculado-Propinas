
import type { MenuItems } from "../types"

type MenuItemProps = {
  item: MenuItems,
  addItemList: (item: MenuItems) => void,
};

const MenuItems = ({ item, addItemList }: MenuItemProps) => {
  return (
    <button className=" 
    border-2 border-indigo-700 hover:bg-indigo-200 
    p-3 
    w-full 
    flex justify-between"
      onClick={() => addItemList(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}

export default MenuItems