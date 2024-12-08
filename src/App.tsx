
import OrderContents from "./components/OrderContents";
import MenuItems from "./components/MenuItems";
import { useOrder } from "./hooks/useOrder";
import { menuItems } from "./data/db"
import OrderTotal from "./components/OrderTotal";
import TipPercentageForm from "./components/TipPercentageForm";

function App() {

  const { order, addItemList, removeItem, tip, setTip, placeOrder } = useOrder();

  return (
    <>
      <header className="bg-indigo-300 py-5 px-4">
        <h1 className="text-center text-4xl font-black">Calculadora de Propia y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-3xl font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            {
              menuItems.map(item => (
                <MenuItems key={item.id}
                  item={item}
                  addItemList={addItemList}
                />
              ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContents
                order={order}
                removeItem={removeItem}
              />
              <TipPercentageForm
                setTip={setTip}
                tip={tip} />

              <OrderTotal
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />

            </>
          ) : (
            <h2 className="text-xl font-black text-center">Seleccione del menú para agregarlo a su orden.</h2>
          )}

        </div>
      </main>
    </>
  )
}

export default App
