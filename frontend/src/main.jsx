import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import App from "./App";
import "./globals.css";
import { Provider } from 'react-redux'
import store from "./store/store";
//ROUTES
// import Menu from "./pages/menu/Menu";
// import Order from "./pages/order/Order";
// import Wallet from "./pages/wallet/Wallet";
// import Gifts from "./pages/gifts/Gifts";
// import More from "./pages/more/More";

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path='/' element={<App />}>
//             <Route index={true} path='/' element={<Menu />} />
//             <Route path="/menu" element={<Menu />} />
//             <Route path="/order" element={<Order />} />
//             <Route path="/wallet" element={<Wallet />} />
//             <Route path="/gifts" element={<Gifts />} />
//             <Route path="/more" element={<More />} />
//         </Route>
//     )
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <RouterProvider router={router} />
//     </React.StrictMode>
// );
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
