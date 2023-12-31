import bars from "../../assets/bars.svg";
import logo from "../../assets/logo.png";
import "./Navbar.css";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleSidebar, setActiveLink } from "../../features/navbar/navslice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const token = useAppSelector((state) => state.auth.token);

  const handleBarClick = () => {
    dispatch(toggleSidebar());
  };

  return (
    <nav>
      <img className="bars" src={bars} alt="bars" onClick={handleBarClick} />

      <section
        className="logo_container"
        onClick={() => {
          navigate("/");
          dispatch(setActiveLink("Home"));
        }}
      >
        <img src={logo} className="logo" />
      </section>

      <section className="links">
        <a href="#">About</a>
        <a href="#">Products</a>
        <a href="#">For Teams</a>
      </section>

      <section className="search_box">
        <input type="text" placeholder="Search" />
      </section>

      {!token && (
        <section className="button_wrapper">
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            <span>Log In</span>
          </button>

          <button
            onClick={() => {
              navigate("/register");
            }}
          >
            <span>Sign Up</span>
          </button>
        </section>
      )}

      {
        token && (
          <section className="navbar-profile" onClick={() => {
            navigate("/profile")
            dispatch(setActiveLink("Users"));
          }}>
            <img src="https://picsum.photos/200" alt="profile" />
          </section>
        )
      }
    </nav>
  );
};

export default Navbar;
