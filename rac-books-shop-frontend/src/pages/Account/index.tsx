import { Link, Outlet } from "react-router-dom"

import './Account.css'

const Account = () => {
    return (<>
        <h1 className="AreaLogada__titulo">My Account</h1>
        <section className="AreaLogada">
            <div className="menu">
                <ul className="navegacao">
                    <li>
                        <Link to="/admin/account/orders">Orders</Link>
                    </li>
                    <li>
                        <Link to="/shopping-cart">Shopping Cart</Link>
                    </li>
                    <li>
                        <Link to="/admin/account/personaldata">Personal data</Link>
                    </li>
                </ul>
            </div>
            <div className="conteudo">
                <Outlet />
            </div>
        </section>
    </>)
}

export default Account;