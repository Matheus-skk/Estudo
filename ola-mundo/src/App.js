import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/Sobremim";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path ='/sobremim' element={<SobreMim/>} />
      </Routes>
    </BrowserRouter>
  )
}

