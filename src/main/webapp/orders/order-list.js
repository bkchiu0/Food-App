import orderService from "./order-service"
const { useState, useEffect } = React

const { Link, useHistory } = window.ReactRouterDOM;

const OrderList = () => {
    // create history object
    const history = useHistory()
    // initialize state
    const [orders, setOrders] = useState([])
    // define find all orders function
    const findAllOrders = () =>
        orderService.findAllOrders()
            .then(orders => setOrders(orders))
    // load all orders from the rest api on component load or update
    useEffect(() => {
        findAllOrders()
    }, [])
    return(
        <div>
            <h2>Order List</h2>
            <button
                onClick={() => history.push("/orders/new")} 
                className="btn btn-primary"
            >
                Add Order
            </button>
            <ul className="list-group">
            {
               orders.map(order =>
                  <li key={order.id}>
                      <Link to={`/orders/${order.id}`}>
                        {order.description},
                        {order.placed},
                        {order.userId}
                      </Link>
                  </li>)
            }
            </ul>
            <button
                onClick={() => history.goBack()} 
                className="btn btn-secondary"
            >
                Back
            </button>
        </div>
    )
}

export default OrderList;