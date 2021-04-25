const { Link } = window.ReactRouterDOM;


const HomePage = () => (
    <div>
        <h2>Home Page</h2>
        <ul className="list-group">
            <li>
                <Link to="/users">
                    Users
                </Link>
            </li>
            <li>
                <Link to="/orders">
                    Orders
                </Link>
            </li>
            <li>
                <Link to="/items">
                    Items
                </Link>
            </li>
            <li>
                <Link to="/foods">
                    Foods
                </Link>
            </li>
            <li>
                <Link to="/nutrition-info">
                    Nutritional Information
                </Link>
            </li>
        </ul>
    </div>
);

export default HomePage;