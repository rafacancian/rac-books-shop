import { Route, Routes } from "react-router-dom"
import PageTemplate from "../pages/PageTemplate"
import PaginaBase from "../pages/PaginaBase"
import Home from "../pages/Home"


const MyRoutes = () => {
    return (
    <Routes>
      <Route path='/' element={<PaginaBase />}>
      <Route path='/' element={<Home />} />
    </Route>
    </Routes>)
}

export default MyRoutes