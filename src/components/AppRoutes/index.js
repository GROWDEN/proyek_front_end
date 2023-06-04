import { Routes, Route } from "react-router-dom";
import Homepage from "../../Pages/About";
import Cuaca from "../../Pages/Cuaca";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/cuaca" element={<Cuaca />}></Route>
      <Route path="/homepage" element={<Homepage />}></Route>
    </Routes>
  );
}

export default AppRoutes;
