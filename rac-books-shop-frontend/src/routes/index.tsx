import { Route, Routes } from "react-router-dom"
import PageTemplate from "../pages/PageTemplate"


const MyRoutes = () => {
    return (
    <Routes>
      <Route path='/' element={<PageTemplate />}>
      </Route>
    </Routes>)
}

export default MyRoutes