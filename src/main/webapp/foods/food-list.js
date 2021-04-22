import foodService from "./food-service"
const { useState, useEffect } = React

const { Link, useHistory } = window.ReactRouterDOM;

const FoodList = () => {
    // create history object
    const history = useHistory()
    // initialize state
    const [foods, setFoods] = useState([])
    // define find all foods function
    const findAllFoods = () =>
        foodService.findAllFoods()
            .then(foods => setFoods(foods))
    // load all foods from the rest api on component load or update
    useEffect(() => {
        findAllFoods()
    }, [])
    return(
        <div>
            <h2>Food List</h2>
            <button
                onClick={() => history.push("/foods/new")} 
                className="btn btn-primary"
            >
                Add Food
            </button>
            <ul className="list-group">
            {
               foods.map(food =>
                  <li key={food.id}>
                      <Link to={`/foods/${food.id}`}>
                        {food.name},
                        {food.description},
                        {food.price},
                        {food.foodType}
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

export default FoodList;