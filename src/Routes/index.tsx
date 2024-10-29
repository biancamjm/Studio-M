import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../Pages/Home";
// import { Sobre } from "../Pages/Sobre";
// import { Servicos } from "../Pages/Servicos";
// import { Galeria } from "../Pages/Galeria";
// import Test from "../Components/Modal/ModalNovaPublicacao";
// import { Contatos } from "../Components/Contatos";
// import Perfil from "../Components/Perfil";


const Routers = () => {
    return (
        <Routes>
            { <Route path="home" element={<Home />} />
            /*<Route path="sobre" element={<Sobre />} />
            <Route path="servicos" element={<Servicos />} />
            <Route path="galeria" element={<Galeria />} />
            <Route path="contatos" element={<Contatos />} />
            <Route index element={<Perfil />} /> */}
            <Route path="*" element={<Navigate to="/Home" />} /> 
        </Routes>
    );
};

export default Routers;