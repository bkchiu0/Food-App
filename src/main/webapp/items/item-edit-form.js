import itemService from "./item-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM

const ItemFormEditor = () => {
    // set history and id params
    const history = useHistory()
    const {id} = useParams()
    // set component state
    const [item, setItem] = useState({})
    // create function to find item by id
    const findItemById = (id) =>
        itemService.findItemById(id)
            .then(item => setItem(item))
    // on delete, go back
    const deleteItem = (id) =>
        itemService.deleteItem(id)
            .then(() => history.goBack())
    // create item function
    const createItem = (item) =>
        itemService.createItem(item)
            .then(() => history.goBack())
    // update item function
    const updateItem = (id, newItem) =>
        itemService.updateItem(id, newItem)
            .then(() => history.goBack())
    // on component load or update fetch item and update state
    useEffect(() => {
        if(id != "new"){
            findItemById(id)
        }
    }, [])
    return (
        <div>
            <h2>Item Editor</h2>
            <label>Id</label>
            <input readOnly value={item.id} className="form-control"/>
            <label>Order ID</label>
            <input
                value={item.orderId}
                onChange={(e) =>
                    setItem(item =>
                        ({...item, orderId: e.target.value}))}
                className="form-control"
            />
            <label>Food ID</label>
            <input
                value={item.foodId}
                onChange={(e) =>
                    setItem(item =>
                        ({...item, foodId: e.target.value}))}
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
                onClick={() => deleteItem(item.id)}
                className="btn btn-danger"
            >
                Delete
            </button>
            <button
                onClick={() => updateItem(item.id, item)}
                className="btn btn-primary"
            >
                Save
            </button>
            <button
                onClick={() => createItem(item)}
                className="btn btn-success"
            >
                Create
            </button>
        </div>
    )
}

export default ItemFormEditor