import { Routes, Route } from "react-router-dom";
//import "./styles/main.scss";
//import "bootstrap";
import Home from "./pages/Home";
import Personajes from "./pages/Personajes";
import Episodios from "./pages/Episodios";
import Layout from "./layouts/Layout";
import "./App.css";


const App = () => {
  console.log(
    "%cBienvenido a la aplicación de " +
      "%cRick and Morty\n" +
      "%cDesarrollado en " +
      "%cReact" +
      "%c por " +
      "%Augusto" +
      " %c(github.com/KoHNheC)",
    "color: #fff; font-size: 1.25rem",
    "color: #a6eee6; font-size: 1.25rem; font-weight: bold;",
    "color: #fff; font-size: 1.1rem",
    "color: #61DBFB; font-size: 1.1rem; font-weight: bold;",
    "color: #fff; font-size: 1.1rem",
    "color: #fb6467; font-size: 1.1rem; font-weight: bold; font-style: italic;",
    "color: #fff; font-size: 0.75rem"
  );
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/personajes/p?/:pagina?" element={<Personajes />} />
        <Route path="/episodios/p?/:pagina?" element={<Episodios />} />
      </Route>
    </Routes>
  );
};

export default App;
