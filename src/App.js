import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import PrivateRoutes from "./components/PrivateRoutes";
import Alipay from "./components/Alipay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<NotFound />} path="*"></Route>
        <Route element={<Alipay />} path="alipay"></Route>
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
