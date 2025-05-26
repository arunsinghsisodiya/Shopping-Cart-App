import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="container">
      <h1 className="text-center" style={{ color: "red" }}>
        Shopping Cart Product APP :
      </h1>

      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
