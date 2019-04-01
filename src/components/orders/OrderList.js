import React from 'react'
import OrderSummary from './OrderSummary'
import { Link } from 'react-router-dom'

const OrderList = ({orders}) =>{
    return (
        <div className="project-list section">
            { orders && orders.map(order => {
                return(
                    <Link to={'/order/' + order.id}>
                    <OrderSummary order={order} key={order.id} />
                    </Link>
                )
            })}        
        </div>
    )
}

export default OrderList