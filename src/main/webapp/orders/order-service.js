// URL for the order orm dao that will be listening to requests
const ORDERS_URL = "http://localhost:8080/api/order"

// Send a get request to the server for getting all orders
export const findAllOrders = () => 
  fetch(ORDERS_URL)
    .then(response => response.json())

// Send a get request to the server for getting orders by user id
export const findOrdersForUser = (id) => 
  fetch(`${ORDERS_URL}/user/${id}`)
    .then(response => response.json())

// Send a get request to the server to retrieve a order by id
export const findOrderById = (id) => 
  fetch(`${ORDERS_URL}/${id}`)
    .then(response => response.json())

// Send a delete request to delete order by id
export const deleteOrder = (id) => 
  fetch(
    `${ORDERS_URL}/${id}`,
    { method: "DELETE" }
  )

// Send a post request to create a order
export const createOrder = (order) =>
  fetch(
    ORDERS_URL,
    { 
      method: "POST",
      body: JSON.stringify(order),
      headers: {'content-type': 'application/json'}
    }
  )
  .then(response => response.json())

// Send a put request to update a order information
export const updateOrder = (id, order) =>
  fetch(
    `${ORDERS_URL}/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(order),
      headers: {'content-type': 'application/json'}
    }
  )
  .then(response => response.json())

// export all functions as the API to this service
export default {
  findAllOrders,
  findOrdersForUser,
  findOrderById,
  deleteOrder,
  createOrder,
  updateOrder
}
