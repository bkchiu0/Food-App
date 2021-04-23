import UserList from "./users/user-list";
import UserFormEditor from "./users/user-edit-form";
import OrderList from "./orders/order-list";
import OrderFormEditor from "./orders/order-edit-form";
import FoodList from "./foods/food-list";
import FoodFormEditor from "./foods/food-edit-form";
import ItemList from "./items/item-list";
import ItemFormEditor from "./items/item-edit-form";
import NutritionInfoList from "./nutrition/nutrition-info-list";
import NutritionInfoFormEditor from "./nutrition/nutrition-info-edit-form";
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
                <Route path="/orders" exact={true}>
                    <OrderList/>
                </Route>
                <Route path="/orders/:id" exact={true}>
                    <OrderFormEditor/>
                </Route>
                <Route path="/foods" exact={true}>
                    <FoodList/>
                </Route>
                <Route path="/foods/:id" exact={true}>
                    <FoodFormEditor/>
                </Route>
                <Route path="/items" exact={true}>
                    <ItemList/>
                </Route>
                <Route path="/items/:id" exact={true}>
                    <ItemFormEditor/>
                </Route>
                <Route path="/nutrition-info" exact={true}>
                    <NutritionInfoList/>
                </Route>
                <Route path="/nutrition-info/:id" exact={true}>
                    <NutritionInfoFormEditor/>
                </Route>
                <Route path="/" exact={true}>
                    <HomePage/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
