import itemService from "./item-service"
const { useState, useEffect } = React

const { Link, useHistory } = window.ReactRouterDOM;

const ItemList = () => {
    // create history object
    const history = useHistory()
    // initialize state
    const [items, setItems] = useState([])
    // define find all items function
    const findAllItems = () =>
        itemService.findAllItems()
            .then(items => setItems(items))
    // load all items from the rest api on component load or update
    useEffect(() => {
        findAllItems()
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
        </div>
    )
}

export default ItemList;