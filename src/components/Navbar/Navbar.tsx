import bars from '../../assets/bars.svg';
import logo from '../../assets/logo.png';
import './Navbar.css';

import { useAppDispatch } from "../../app/hooks";
import { toggleSidebar } from "../../features/navbar/navslice";

const Navbar = () => {

  const dispatch = useAppDispatch();

  const handleBarClick = () => {
    dispatch(toggleSidebar());
  }

  return (
    <nav>
      <img className="bars" src={bars} alt="bars" onClick={handleBarClick}/>

      <section className="logo_container">
        <img src={logo} className="logo"/>
      </section>

      <section className="links">
        <a href="#">About</a>
        <a href="#">Products</a>
        <a href="#">For Teams</a>
      </section>

      <section className="search_box">
        <input type="text" placeholder="Search"/>
      </section>

      <section className="button_wrapper">
        <button>
          <span>Log In</span>
        </button>

        <button>
          <span>Sign Up</span>
        </button>
      </section>
    </nav>
  )
}

export default Navbar;
