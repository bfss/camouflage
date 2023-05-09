import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import PrivateRoutes from "./components/PrivateRoutes";
import Article from "./components/Article";
import EditArticle from "./components/EditArticle";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import theme from "./components/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<NotFound />} path="*"></Route>
          <Route element={<Article />} path="/article/:id" />
          <Route element={<Home />} path="/"></Route>
          <Route element={<PrivateRoutes />}>
            <Route element={<EditArticle />} path="/article/edit/:id?"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
