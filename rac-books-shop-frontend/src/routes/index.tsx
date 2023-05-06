import { Route, Routes } from "react-router-dom"
import PaginaBase from "../pages/PaginaBase"
import Home from "../pages/Home"
import Account from "../pages/Account"
import Orders from "../pages/Orders"

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Home />} />
        <Route path="/admin/account" element={<Account />}>
          <Route path="orders" element={<Orders />} />
        </Route>
      </Route>
    </Routes>)
}

export default MyRoutes