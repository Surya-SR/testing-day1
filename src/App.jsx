import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Medallion from "./page/medallion";
import { Provider } from "react-redux";
import { store } from "./store";
import Layout from "./page/Layout";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "./styles/style.scss";

function App() {
  return (
    <PrimeReactProvider value={{ ripple: true }}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Medallion />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </PrimeReactProvider>
  );
}

export default App;
