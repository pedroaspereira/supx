const initState = {
    orders: [
        {id: '1', title: 'compra de valvulas', items: 'valvulas 12'},
        {id: '2', title: 'compra de bombas', items: 'bombas 13'},
        {id: '3', title: 'compra de parafuso', items: 'parafusos 14'}
    ]
}

const orderReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_ORDER':
            console.log('created order', action.order)
            return state
        case 'CREATE_ORDER_ERROR':
            console.log('create order error', action.err)
            return state
        default:
            return state
    }
}

export default orderReducer