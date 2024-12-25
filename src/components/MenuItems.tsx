
import { Dispatch } from "react";

import { OrderActions } from "../reducers/order-reducer";
import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem,
  dispatch: Dispatch<OrderActions>
};

const MenuItems = ({ item, dispatch }: MenuItemProps) => {
  return (
    <button className=" 
      border-2 border-indigo-700 hover:bg-indigo-200 
      p-3 
      w-full 
      flex justify-between"
      onClick={() => dispatch({ type: 'add-item', payload: { item } })}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}

export default MenuItems