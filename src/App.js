import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import PrivateRoutes from "./components/PrivateRoutes";
import Alipay from "./components/Alipay";
import Article from "./components/Article";
import EditArticle from './components/EditArticle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<NotFound />} path="*"></Route>
        <Route element={<Alipay />} path="alipay"></Route>
        <Route  element={<Article />} path="/article/:id" />
        <Route element={<Home />} path="/"></Route>
        <Route element={<PrivateRoutes />}>
          <Route element={<EditArticle />} path="/edit"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
