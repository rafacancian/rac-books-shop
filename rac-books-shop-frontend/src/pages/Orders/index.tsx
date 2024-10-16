import axios from "axios"
import Button from '@mui/material/Button';
import { useEffect, useState } from "react"
import "./Orders.css"
import { IOrder } from "../../interfaces/IOrder"
import { http } from "../../api/axios/http";

const Orders = () => {

    const formatCurrencyBRL = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })
    const [orders, setOrders] = useState<IOrder[]>([])

    useEffect(() => {
        console.log("admin/account/ordes")
        http.get<IOrder[]>("/admin/account/orders")
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
                    <Button variant="contained" size="large" key={order.id}>Details</Button>
                </div>
            ))}

        </section>
    )
}

export default Orders