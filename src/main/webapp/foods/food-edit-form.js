import foodService from "./food-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM

const FoodFormEditor = () => {
    // set history and id params
    const history = useHistory()
    const {id} = useParams()
    // set component state
    const [food, setFood] = useState({})
    // create function to find food by id
    const findFoodById = (id) =>
        foodService.findFoodById(id)
            .then(food => setFood(food))
    // on delete, go back
    const deleteFood = (id) =>
        foodService.deleteFood(id)
            .then(() => history.goBack())
    // create food function
    const createFood = (food) =>
        foodService.createFood(food)
            .then(() => history.goBack())
    // update food function
    const updateFood = (id, newFood) =>
        foodService.updateFood(id, newFood)
            .then(() => history.goBack())
    // on component load or update fetch food and update state
    useEffect(() => {
        if(id != "new"){
            findFoodById(id)
        }
    }, [])
    return (
        <div>
            <h2>Food Editor</h2>
            <label>Id</label>
            <input readOnly value={food.id} className="form-control"/>
            <label>Name</label>
            <input
                value={food.name}
                onChange={(e) =>
                    setFood(food =>
                        ({...food, name: e.target.value}))}
                className="form-control"
            />
            <label>Description</label>
            <input
                value={food.description}
                onChange={(e) =>
                    setFood(food =>
                        ({...food, description: e.target.value}))}
                className="form-control"
            />
            <label>Price</label>
            <input
                value={food.price}
                onChange={(e) =>
                    setFood(food =>
                        ({...food, price: e.target.value}))}
                className="form-control"
            />
            <label>Type</label>
            <input
                value={food.foodType}
                onChange={(e) =>
                    setFood(food =>
                        ({...food, foodType: e.target.value}))}
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
                onClick={() => deleteFood(food.id)}
                className="btn btn-danger"
            >
                Delete
            </button>
            <button
                onClick={() => updateFood(food.id, food)}
                className="btn btn-primary"
            >
                Save
            </button>
            <button
                onClick={() => createFood(food)}
                className="btn btn-success"
            >
                Create
            </button>
        </div>
    )
}

export default FoodFormEditor