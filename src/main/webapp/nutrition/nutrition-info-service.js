// URL for the nutritional information orm dao that will be listening to requests
const NUTRITION_URL = "http://localhost:8080/api/nutrition"

// Send a get request to the server for getting all nutrition info
export const findAllNutritionInfo = () => 
  fetch(NUTRITION_URL)
    .then(response => response.json())

// Send a get request to the server to retrieve a nutrition info by id
export const findNutritionInfoById = (id) => 
  fetch(`${NUTRITION_URL}/${id}`)
    .then(response => response.json())

// Send a delete request to delete nutrition info by id
export const deleteNutritionInfo = (id) => 
  fetch(
    `${NUTRITION_URL}/${id}`,
    { method: "DELETE" }
  )

// Send a post request to create a nutrition info
export const createNutritionInfo = (info) =>
  fetch(
    NUTRITION_URL,
    { 
      method: "POST",
      body: JSON.stringify(info),
      headers: {'content-type': 'application/json'}
    }
  )
  .then(response => response.json())

// Send a put request to update a nutrition information
export const updateNutritionInfo = (id, info) =>
  fetch(
    `${NUTRITION_URL}/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(info),
      headers: {'content-type': 'application/json'}
    }
  )
  .then(response => response.json())

// export all functions as the API to this service
export default {
  findAllNutritionInfo,
  findNutritionInfoById,
  deleteNutritionInfo,
  createNutritionInfo,
  updateNutritionInfo
}
