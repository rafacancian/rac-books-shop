import axios from "axios"
import { AbBotao } from "ds-alurabooks"
import { useEffect, useState } from "react"

import "./Orders.css"
import { IOrder } from "../../interfaces/IOrder"


const Orders = () => {

    const formatCurrencyBRL = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })
    const [orders, setOrders] = useState<IOrder[]>([])

    useEffect(() => {
        console.log("admin/account/ordes")
        axios.get<IOrder[]>("http://localhost:8000/admin/account/orders")
            .then(res => setOrders(res.data))
            .catch(error => console.log("Get orders error: " + error))
    }, [])

    return (
        <section className="orders">
            <h1>My orders</h1>
            {orders.map(order => (
                <div className="order" key={order.id}>
                    <ul>
                        <li>Order: <strong>{order.id}</strong></li>
                        <li>Order Date: <strong>{new Date(order.orderDate).toLocaleDateString()}</strong></li>
                        <li>Total value: <strong>{formatCurrencyBRL.format(order.total)}</strong></li>
                        <li>Delivery Date: <strong>{new Date(order.deliveryDate).toLocaleDateString()}</strong></li>
                    </ul>
                    <AbBotao texto="Details" />
                </div>
            ))}

        </section>
    )
}

export default Orders