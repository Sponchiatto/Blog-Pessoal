import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
