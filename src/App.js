import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Topmenu from "./components/Topmenu";
import Page1 from "./pages/Page1";
import products from "./pages/Products";
import { CartProvider } from "./contexts/Cart";
import CartResult from "./pages/CartResult";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Topmenu />

          <Switch>
            <Route path="/home/" exact component={Page1} />

            <Route path="/products/" exact component={products} />

            <Route path="/cart/" exact component={CartResult} />

            <Route path="/" />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}
