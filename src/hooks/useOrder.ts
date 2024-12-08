
import { useState } from "react"

import type { MenuItems, OrderItem } from "../types"

export const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

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

    const removeItem = (id: MenuItems['id']) => {
        //Filtramos los items que no coincidan con el id que queremos eliminar y los guardamos en el estado
        const removeItem = order.filter((orderItem) => orderItem.id !== id);
        setOrder(removeItem);
    };

    const placeOrder = () => {
        //Reiniciamos el consumo
        setOrder([]);
        setTip(0);
    };

    return {
        order,
        tip,
        setTip,
        addItemList,
        removeItem,
        placeOrder
    }
};