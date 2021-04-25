import userService from "./user-service"

const {useState, useEffect} = React
const {Link, useParams, useHistory} = window.ReactRouterDOM

const UserFormEditor = () => {
    // set history and id params
    const history = useHistory()
    const {id} = useParams()
    // set component state
    const [user, setUser] = useState({})
    // create function to find user by id
    const findUserById = (id) =>
        userService.findUserById(id)
            .then(user => setUser(user))
    // on delete, go back
    const deleteUser = (id) =>
        userService.deleteUser(id)
            .then(() => history.goBack())
    // create user function
    const createUser = (user) =>
        userService.createUser(user)
            .then(() => history.goBack())
    // update user function
    const updateUser = (id, newUser) =>
        userService.updateUser(id, newUser)
            .then(() => history.goBack())
    // on component load or update fetch user and update state
    useEffect(() => {
        if(id != "new"){
            findUserById(id)
        }
    }, [])
    return (
        <div>
            <h2>User Editor</h2>
            <label>Id</label>
            <input readOnly value={user.id} className="form-control"/>
            <label>First Name</label>
            <input
                value={user.firstName}
                onChange={(e) =>
                    setUser(user =>
                        ({...user, firstName: e.target.value}))}
                className="form-control"
            />
            <label>Last Name</label>
            <input
                value={user.lastName}
                onChange={(e) =>
                    setUser(user =>
                        ({...user, lastName: e.target.value}))}
                className="form-control"
            />
            <label>Username</label>
            <input
                value={user.username}
                onChange={(e) =>
                    setUser(user =>
                        ({...user, username: e.target.value}))}
                className="form-control"
            />
            <label>Password</label>
            <input
                value={user.password}
                onChange={(e) =>
                    setUser(user =>
                        ({...user, password: e.target.value}))}
                className="form-control"
            />
            <label>Email</label>
            <input
                value={user.email}
                onChange={(e) =>
                    setUser(user =>
                        ({...user, email: e.target.value}))}
                className="form-control"
            />
            <label>Date Of Birth</label>
            <input
                value={user.dateOfBirth}
                onChange={(e) =>
                    setUser(user =>
                        ({...user, dateOfBirth: e.target.value}))}
                className="form-control"
            />
            {
                id !== "new" &&
                (<Link to={`/orders/user/${user.id}`}>
                    User's Orders
                </Link>)
            }
            <br/>
            <button
                onClick={() => history.goBack()}    
                className="btn btn-warning"
            >
                Cancel
            </button>
            <button
                onClick={() => deleteUser(user.id)}
                className="btn btn-danger"
            >
                Delete
            </button>
            <button
                onClick={() => updateUser(user.id, user)}
                className="btn btn-primary"
            >
                Save
            </button>
            <button
                onClick={() => createUser(user)}
                className="btn btn-success"
            >
                Create
            </button>
        </div>
    )
}

export default UserFormEditor