import "./Sidebar.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setActiveLink } from "../../features/navbar/navslice";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const active = useAppSelector((state) => state.nav.activeLink);

  const handleLinkClick = (e: any) => {
    e.preventDefault();
    const link = e.target.text;
    dispatch(setActiveLink(link));

    switch (link) {
      case 'Home':
        navigate('/');
        break;
      case 'Questions':
        navigate('/questions');
        break;
      case 'Tags':
        navigate('/tags');
        break;
      case 'Users':
        navigate('/profile');
        break;
      default:
        navigate('/');
        break;
    }
  }

  return (
    <aside>
      <a href="#" className={active == 'Home' ? 'active' : ''} onClick={handleLinkClick}>Home</a>

      <p>PUBLIC</p>

      <div className="sidebar_links">
        <a href="#" className={active == 'Questions' ? 'active' : ''} onClick={handleLinkClick}>Questions</a>
        <a href="#" className={active == 'Tags' ? 'active' : ''} onClick={handleLinkClick}>Tags</a>
        <a href="#" className={active == 'Users' ? 'active' : ''} onClick={handleLinkClick}>Users</a>
      </div>
    </aside>
  );
};

export default Sidebar;
