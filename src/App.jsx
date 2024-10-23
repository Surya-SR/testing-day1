import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Counter from './components/Counter';
// import Input from './components/Input';
import Medallion from "./page/medallion";
import Layout from './page/Layout';
// import DemoPrimeTest from './components/DemoPrimeTest';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "./styles/style.scss";

function App() {
  return ( 
    <PrimeReactProvider value={{
      ripple: true}}>
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Layout/>} >
           <Route index element={<Medallion/>} ></Route>
           </Route>
         </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;
