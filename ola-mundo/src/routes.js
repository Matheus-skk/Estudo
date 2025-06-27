import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/Sobremim";
import Menu from "./components/menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";

export default function AppRoutes() {
  return(
    <BrowserRouter>
    
    <Menu/>

      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>} />
          <Route path ='sobremim' element={<SobreMim/>} />
        </Route>
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
      <Rodape/>
    </BrowserRouter>
  )
}

