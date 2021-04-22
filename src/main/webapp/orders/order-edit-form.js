import orderService from "./order-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM

const OrderFormEditor = () => {
    // set history and id params
    const history = useHistory()
    const {id} = useParams()
    // set component state
    const [order, setOrder] = useState({})
    // create function to find order by id
    const findOrderById = (id) =>
        orderService.findOrderById(id)
            .then(order => setOrder(order))
    // on delete, go back
    const deleteOrder = (id) =>
        orderService.deleteOrder(id)
            .then(() => history.goBack())
    // create order function
    const createOrder = (order) =>
        orderService.createOrder(order)
            .then(() => history.goBack())
    // update order function
    const updateOrder = (id, newOrder) =>
        orderService.updateOrder(id, newOrder)
            .then(() => history.goBack())
    // on component load or update fetch order and update state
    useEffect(() => {
        if(id != "new"){
            findOrderById(id)
        }
    }, [])
    return (
        <div>
            <h2>Order Editor</h2>
            <label>Id</label>
            <input readOnly value={order.id} className="form-control"/>
            <label>Description</label>
            <input
                value={order.description}
                onChange={(e) =>
                    setOrder(order =>
                        ({...order, description: e.target.value}))}
                className="form-control"
            />
            <label>Placed Time</label>
            <input
                value={order.placed}
                onChange={(e) =>
                    setOrder(order =>
                        ({...order, placed: e.target.value}))}
                className="form-control"
            />
            <label>User ID</label>
            <input
                value={order.userId}
                onChange={(e) =>
                    setOrder(order =>
                        ({...order, userId: e.target.value}))}
                className="form-control"
            />
            <br/>
            <button
                onClick={() => history.goBack()}    
                className="btn btn-warning"
            >
                Cancel
            </button>
            <button
                onClick={() => deleteOrder(order.id)}
                className="btn btn-danger"
            >
                Delete
            </button>
            <button
                onClick={() => updateOrder(order.id, order)}
                className="btn btn-primary"
            >
                Save
            </button>
            <button
                onClick={() => createOrder(order)}
                className="btn btn-success"
            >
                Create
            </button>
        </div>
    )
}

export default OrderFormEditor