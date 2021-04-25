import { NUTRITION_URL } from "../nutrition/nutrition-info-service";

// URL for the food orm dao that will be listening to requests
const FOODS_URL = "http://localhost:8080/api/food"

// Send a get request to the server for getting all foods
export const findAllFoods = () => 
  fetch(FOODS_URL)
    .then(response => response.json())

// Send a get request to the server to retrieve a food by id
export const findFoodById = (id) => 
  fetch(`${FOODS_URL}/${id}`)
    .then(response => response.json())

// Send a delete request to delete foods by id
export const deleteFood = (id) => 
  fetch(
    `${FOODS_URL}/${id}`,
    { method: "DELETE" }
  )

// Send a post request to create a food
export const createFood = (food) =>
  fetch(
    FOODS_URL,
    { 
      method: "POST",
      body: JSON.stringify(food),
      headers: {'content-type': 'application/json'}
    }
  )
  .then(response => response.json())

// Send a put request to update a food information
export const updateFood = (id, food) =>
  fetch(
    `${FOODS_URL}/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(food),
      headers: {'content-type': 'application/json'}
    }
  )
  .then(response => response.json())

// Get the nutritional information for this food
export const getFoodNutritionInformation = (id) =>
  fetch(`${NUTRITION_URL}/food/${id}`)
    .then(response => response.json())

// export all functions as the API to this service
export default {
  findAllFoods,
  findFoodById,
  deleteFood,
  createFood,
  updateFood,
  getFoodNutritionInformation
}
