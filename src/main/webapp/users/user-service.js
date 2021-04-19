// URL for the user orm dao that will be listening to requests
const USERS_URL = "http://localhost:8080/api/users"

// Send a get request to the server for getting all users
export const findAllUsers = () => 
  fetch(USERS_URL)
    .then(response => response.json())

// Send a get request to the server to retrieve a user by id
export const findUserById = (id) => 
  fetch(`${USERS_URL}/${id}`)
    .then(response => response.json())

// Send a delete request to delete user by id
export const deleteUser = (id) => 
  fetch(
    `${USERS_URL}/${id}`,
    { method: "DELETE" }
  )

// Send a post request to create a user
export const createUser = (user) =>
  fetch(
    USERS_URL,
    { 
      method: "POST",
      body: JSON.stringify(user),
      headers: {'content-type': 'application/json'}
    }
  )
  .then(response => response.json())

// Send a put request to update a user information
export const updateUser = (id, user) =>
  fetch(
    `${USERS_URL}/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {'content-type': 'application/json'}
    }
  )
  .then(response => response.json())

// export all functions as the API to this service
export default {
  findAllUsers,
  findUserById,
  deleteUser,
  createUser,
  updateUser
}
