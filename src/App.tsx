
import { useReducer } from "react";

import TipPercentageForm from "./components/TipPercentageForm";

import { initialState, orderReducer } from "./reducers/order-reducer";
import OrderContents from "./components/OrderContents";
import OrderTotal from "./components/OrderTotal";
import MenuItems from "./components/MenuItems";
import { menuItems } from "./data/db"

function App() {

  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <>
      <header className="bg-indigo-700 py-5 px-4">
        <h1 className="text-center text-4xl font-medium text-white"> 💰 Calculadora de Propia y Consumo 💰</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-3xl font-black"> 🍽️ Menú </h2>
          <div className="space-y-3 mt-10">
            {
              menuItems.map(item => (
                <MenuItems key={item.id}
                  item={item}
                dispatch={dispatch}
                  />
              ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {state.order.length > 0 ? (
            <>
              <OrderContents
                order={state.order}
                dispatch={dispatch}
              />
              <TipPercentageForm
                dispatch={dispatch}
                tip={state.tip} />

              <OrderTotal
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
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
