import { Outlet } from "react-router-dom"
import NavegationBar from "../../components/NavegationBar"
import Footer from "../../components/Footer"

const PaginaBase = () => {
    return (<main>
        <NavegationBar />
        <Outlet />
        <Footer />
    </main>)
}

export default PaginaBase