import userService from "./user-service"
const { useState, useEffect } = React

const { Link, useHistory } = window.ReactRouterDOM;

const UserList = () => {
    // create history object
    const history = useHistory()
    // initialize state
    const [users, setUsers] = useState([])
    // define find all users function
    const findAllUsers = () =>
        userService.findAllUsers()
            .then(users => setUsers(users))
    // load all users from the rest api on component load or update
    useEffect(() => {
        findAllUsers()
    }, [])
    return(
        <div>
            <h2>User List</h2>
            <button
                onClick={() => history.push("/users/new")} 
                className="btn btn-primary"
            >
                Add User
            </button>
            <ul className="list-group">
            {
               users.map(user =>
                  <li key={user.id}>
                      <Link to={`/users/${user.id}`}>
                        {user.firstName},
                        {user.lastName},
                        {user.username}
                      </Link>
                  </li>)
            }
            </ul>
        </div>
    )
}

export default UserList;