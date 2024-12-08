
import { useMemo } from "react";

import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";

type OrderTotalProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
};

const OrderTotal = ({ order, tip, placeOrder }: OrderTotalProps) => {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order]);
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order]);

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>
                <p>Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                <p>Total a pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>
            <button
                className="bg-indigo-700 disabled:bg-indigo-200 w-full p-3 uppercase text-white  mt-10"
                disabled={totalAmount === 0 ? true : false}
                onClick={placeOrder}
            >
                Guardar Orden
            </button>
        </>
    )
}

export default OrderTotal