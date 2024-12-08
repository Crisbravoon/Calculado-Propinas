import { formatCurrency } from "../helpers";
import { MenuItems, OrderItem } from "../types";

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItems['id']) => void,
};

const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>
            <div className="space-y-3 mt-10">
                {order.length === 0
                    ? <span className="">Orden Vacia...</span>
                    : (
                        order.map((item) =>

                            <div
                                className="flex justify-between items-center border-t border-indigo-700 py-5 last-of-type:border-b"
                                key={item.id}>
                                <div>
                                    <p className="">
                                        {item.name} - {formatCurrency(item.price)}
                                    </p>
                                    <p className="font-black">
                                        Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                                    </p>
                                </div>
                                <button
                                    className="bg-red-600 hover:bg-red-700 h-8 w-8 rounded-full text-white font-black"
                                    onClick={() => removeItem(item.id)}>
                                    X
                                </button>
                            </div>
                        ))}
            </div>
        </div>
    )
}

export default OrderContents