import nutritionInfoService from "./nutrition-info-service";

const {useState, useEffect} = React
const {Link, useParams, useHistory} = window.ReactRouterDOM

const NutritionalInformationFormEditor = () => {
    // set history and id params
    const history = useHistory()
    const {id} = useParams()
    // set component state
    const [nutritionalInformation, setnutritionalInformation] = useState({})
    // create function to find nutritional information by id
    const findInfoById = (id) =>
        nutritionInfoService.findNutritionInfoById(id)
            .then(info => setnutritionalInformation(info))
    // on delete, go back
    const deleteInfo = (id) =>
        nutritionInfoService.deleteNutritionInfo(id)
            .then(() => history.goBack())
    // create nutritional information function
    const createInfo = (info) =>
        nutritionInfoService.createNutritionInfo(info)
            .then(() => history.goBack())
    // update nutritional information function
    const updateInfo = (id, newInfo) =>
        nutritionInfoService.updateNutritionInfo(id, newInfo)
            .then(() => history.goBack())
    // on component load or update fetch nutritional information and update state
    useEffect(() => {
        if(id != "new"){
            findInfoById(id)
        }
    }, [])
    return (
        <div>
            <h2>Nutritional Information Editor</h2>
            <label>Id</label>
            <input readOnly value={nutritionalInformation.id} className="form-control"/>
            <label>Calories</label>
            <input
                value={nutritionalInformation.calories}
                onChange={(e) =>
                    setnutritionalInformation(nutritionalInformation =>
                        ({...nutritionalInformation, calories: e.target.value}))}
                className="form-control"
            />
            <label>Total Fat (grams)</label>
            <input
                value={nutritionalInformation.totalFatG}
                onChange={(e) =>
                    setnutritionalInformation(nutritionalInformation =>
                        ({...nutritionalInformation, totalFatG: e.target.value}))}
                className="form-control"
            />
            <label>Cholesterol (milligrams)</label>
            <input
                value={nutritionalInformation.cholesterolMg}
                onChange={(e) =>
                    setnutritionalInformation(nutritionalInformation =>
                        ({...nutritionalInformation, cholesterolMg: e.target.value}))}
                className="form-control"
            />
            <label>Sodium (milligrams)</label>
            <input
                value={nutritionalInformation.sodiumMg}
                onChange={(e) =>
                    setnutritionalInformation(nutritionalInformation =>
                        ({...nutritionalInformation, sodiumMg: e.target.value}))}
                className="form-control"
            />
            <label>Carbohydrates (grams)</label>
            <input
                value={nutritionalInformation.carbohydratesG}
                onChange={(e) =>
                    setnutritionalInformation(nutritionalInformation =>
                        ({...nutritionalInformation, carbohydratesG: e.target.value}))}
                className="form-control"
            />
            <label>Protein (grams)</label>
            <input
                value={nutritionalInformation.proteinG}
                onChange={(e) =>
                    setnutritionalInformation(nutritionalInformation =>
                        ({...nutritionalInformation, proteinG: e.target.value}))}
                className="form-control"
            />
            <label>
                {
                    id === "new" ?
                    "Food ID"
                    :
                    <Link to={`/foods/${nutritionalInformation.foodId}`}>
                        Food ID
                    </Link>
                }
            </label>
            <input
                value={nutritionalInformation.foodId}
                onChange={(e) =>
                    setnutritionalInformation(nutritionalInformation =>
                        ({...nutritionalInformation, foodId: e.target.value}))}
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
                onClick={() => deleteInfo(nutritionalInformation.id)}
                className="btn btn-danger"
            >
                Delete
            </button>
            <button
                onClick={() => updateInfo(nutritionalInformation.id, nutritionalInformation)}
                className="btn btn-primary"
            >
                Save
            </button>
            <button
                onClick={() => createInfo(nutritionalInformation)}
                className="btn btn-success"
            >
                Create
            </button>
        </div>
    )
}

export default NutritionalInformationFormEditor;