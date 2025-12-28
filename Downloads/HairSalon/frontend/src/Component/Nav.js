import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userReducer } from "../redux/userSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin, role } = useSelector(state => state.user);

  const logout = () => {
    localStorage.removeItem("userData");
    dispatch(userReducer({ token: "", isLogin: false, role: "" }));
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Hair Salon</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">

          {/* always visible */}
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>

          {/* when NOT logged in */}
          {!isLogin && (
            <>
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/register">Signup</Link></li>
            </>
          )}
          {isLogin && role === "client" && (
            <li className="nav-item">
              <Link className="nav-link" to="/mybookings">My Bookings</Link>
            </li>
          )}


          {/* when logged in */}
          {isLogin && (
            <>
              {role === "admin" && (
                <li className="nav-item"><Link className="nav-link" to="/admin">Dashboard</Link></li>
              )}
              {role === "client" && (
                <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
              )}
              <li className="nav-item"><button className="btn btn-danger ml-3" onClick={logout}>Logout</button></li>
            </>
          )}

        </ul>
      </div>
    </nav>
  );
}
