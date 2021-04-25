import itemService from "./item-service"
const { useState, useEffect } = React

const { Link, useParams, useHistory } = window.ReactRouterDOM;

const ItemList = () => {
    // create history object
    const history = useHistory()
    // get order and food id if present
    const {fid, oid} = useParams()
    // initialize state
    const [items, setItems] = useState([])
    // define find all items function
    const findAllItems = () =>
        itemService.findAllItems()
            .then(items => setItems(items))
    // define find items by order function
    const findItemsByOrder = (id) =>
        itemService.findItemsByOrderId(id)
            .then(items => setItems(items))
    // define find items by food function
    const findItemsByFood = (id) =>
        itemService.findItemsByFoodId(id)
            .then(items => setItems(items))
    // load all items from the rest api on component load or update
    useEffect(() => {
        if (oid !== undefined) {
            findItemsByOrder(oid)
        } else if (fid !== undefined) {
            findItemsByFood(fid)
        } else {
            findAllItems()
        }
    }, [])
    return(
        <div>
            <h2>Item List</h2>
            <button
                onClick={() => history.push("/items/new")} 
                className="btn btn-primary"
            >
                Add Item
            </button>
            <ul className="list-group">
            {
               items.map(item =>
                  <li key={item.id}>
                      <Link to={`/items/${item.id}`}>
                        {item.orderId},
                        {item.foodId}
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

export default ItemList;