import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Menu() {
  const cartDetails = useSelector((state) => state.mycartDetails.value);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm bg-dark navbar-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cart">
                Cart : {cartDetails.length}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
