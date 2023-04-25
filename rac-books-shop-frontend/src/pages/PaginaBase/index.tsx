import { Outlet } from "react-router-dom"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

const PaginaBase = () => {
    return (<main>
        <NavBar />
        <Outlet />
        <Footer />
    </main>)
}

export default PaginaBase