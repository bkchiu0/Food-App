// URL for the item orm dao that will be listening to requests
const ITEMS_URL = "http://localhost:8080/api/item"

// Send a get request to the server for getting all items
export const findAllItems = () => 
  fetch(ITEMS_URL)
    .then(response => response.json())

// Send a get request to the server to retrieve a item by id
export const findItemById = (id) => 
  fetch(`${ITEMS_URL}/${id}`)
    .then(response => response.json())

// Send a get request to the server to retrieve items by order id
export const findItemsByOrderId = (id) => 
  fetch(`${ITEMS_URL}/order/${id}`)
    .then(response => response.json())

// Send a get request to the server to retrieve items by food id
export const findItemsByFoodId = (id) => 
  fetch(`${ITEMS_URL}/food/${id}`)
    .then(response => response.json())

// Send a delete request to delete items by id
export const deleteItem = (id) => 
  fetch(
    `${ITEMS_URL}/${id}`,
    { method: "DELETE" }
  )

// Send a post request to create a item
export const createItem = (item) =>
  fetch(
    ITEMS_URL,
    { 
      method: "POST",
      body: JSON.stringify(item),
      headers: {'content-type': 'application/json'}
    }
  )
  .then(response => response.json())

// Send a put request to update a item information
export const updateItem = (id, item) =>
  fetch(
    `${ITEMS_URL}/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {'content-type': 'application/json'}
    }
  )
  .then(response => response.json())

// export all functions as the API to this service
export default {
  findAllItems,
  findItemById,
  findItemsByOrderId,
  findItemsByFoodId,
  deleteItem,
  createItem,
  updateItem
}
