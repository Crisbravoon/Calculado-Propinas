
import { useState } from "react"

import type { MenuItems, OrderItem } from "../types"

export const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([]);

    const addItemList = (item: MenuItems) => {

        const existingItem = order.find((orderItem) => orderItem.id === item.id);

        if (existingItem) {

            //Validamos que no se repitan y solo aumente la cantidad
            const updateOrder = order.map((orderItem) =>
                orderItem.id === item.id
                    ? { ...orderItem, quantity: orderItem.quantity + 1 }
                    : orderItem
            );

            //Guardamos
            setOrder(updateOrder);

        } else {

            //Si no existe que lo agregue
            const newOrder = { ...item, quantity: 1 }
            setOrder([...order, newOrder]);
        }
    };

    return {
        order,
        addItemList,
    }
};