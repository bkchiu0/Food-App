import UserList from "./users/user-list";
import UserFormEditor from "./users/user-edit-form";
import HomePage from "./home";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path="/users" exact={true}>
                    <UserList/>
                </Route>
                <Route path="/users/:id" exact={true}>
                    <UserFormEditor/>
                </Route>
                <Route path="/" exact={true}>
                    <HomePage/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
