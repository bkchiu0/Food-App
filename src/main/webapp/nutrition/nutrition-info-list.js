import nutritionInfoService from "./nutrition-info-service"
const { useState, useEffect } = React

const { Link, useHistory } = window.ReactRouterDOM;

const NutritionalInformationList = () => {
    // create history object
    const history = useHistory()
    // initialize state
    const [infoList, setInfoList] = useState([])
    // define find all info function
    const findAllInfo = () =>
        nutritionInfoService.findAllNutritionInfo()
            .then(list => setInfoList(list))
    // load all info from the rest api on component load or update
    useEffect(() => {
        findAllInfo()
    }, [])
    return(
        <div>
            <h2>Nutritional Information List</h2>
            <button
                onClick={() => history.push("/nutrition-info/new")} 
                className="btn btn-primary"
            >
                Add Nutritional Information
            </button>
            <ul className="list-group">
            {
               infoList.map(info =>
                  <li key={info.id}>
                      <Link to={`/nutrition-info/${info.id}`}>
                        {info.id},
                        {info.foodId}
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

export default NutritionalInformationList;