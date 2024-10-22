import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import Input from './components/Input';
import Medallion from "./page/medallion";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "./styles/style.scss";
import Layout from './page/Layout';
import DemoPrimeTest from './components/DemoPrimeTest';

function App() {
  return ( 
    <PrimeReactProvider value={{
      ripple: true}}>
        <Counter></Counter>
        <Input></Input>
        <DemoPrimeTest></DemoPrimeTest>
      {/* <BrowserRouter>
         <Routes>
           <Route path='/' element={<Layout/>} >
           <Route index element={<Medallion/>} ></Route>
           </Route>
         </Routes>
      </BrowserRouter> */}
    </PrimeReactProvider>
  );
}

export default App;
