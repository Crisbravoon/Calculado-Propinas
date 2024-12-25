
import { MenuItem, OrderItem } from "../types";

export type OrderActions =

    { type: 'add-item', payload: { item: MenuItem } } |
    { type: 'delete-item', payload: { id: MenuItem['id'] } } |
    { type: 'place-order' } |
    { type: 'add-tip', payload: { value: number } }


export type OrderState = {
    order: OrderItem[],
    tip: number
};

export const initialState: OrderState = {
    order: [],
    tip: 0
};

export const orderReducer = (state: OrderState = initialState, action: OrderActions) => {

    switch (action.type) {
        case 'add-item': {

            const existingItem = state.order.find((orderItem) => orderItem.id === action.payload.item.id);

            let order: OrderItem[] = [];

            if (existingItem) {
                // Validamos que no se repitan y solo aumente la cantidad
                order = state.order.map((orderItem) =>
                    orderItem.id === action.payload.item.id
                        ? { ...orderItem, quantity: orderItem.quantity + 1 }
                        : orderItem
                );
            } 
            else {
                // Si no existe que lo agregue
                const newOrder: OrderItem = { ...action.payload.item, quantity: 1 };
                order = [...state.order, newOrder];
            }

            return {
                ...state,
                order,
            };
        };

        case 'delete-item': {
        
            const removeItem = state.order.filter((orderItem) => orderItem.id !== action.payload.id);
            return {
                ...state,
                order: removeItem,
            }
        };

        case 'place-order': {
            // Limpia la orden al finalizar
            return {
                ...state,
                order: [],
                tip: 0,
            };
        };

        case 'add-tip': {
            const tip = action.payload.value;
            return {
                ...state,
                tip
            };
        };

        default:
            // Manejo del caso por defecto
            return state;
    }
};