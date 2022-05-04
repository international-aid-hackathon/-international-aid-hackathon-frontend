import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { fetchEvents } from '../../redux/actions/eventActions'
import { Link } from 'react-router-dom'
import OrderCard from '../../components/OrderCard/OrderCard'
import { Wrapper } from './Dashboard-styles'

const Dashboard = () => {
    const orders = useSelector((state) => state.allOrders.orders.orders)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchEvents())
    }, [])


    return (
        <Wrapper>
            {orders?.map((order) => (
                <Link key={order._id} to={`/orders/${order._id}`}>
                    <div className="order-box">
                        <OrderCard order={order} />
                    </div>
                </Link>
            ))}
        </Wrapper>
    )
}
export default Dashboard
