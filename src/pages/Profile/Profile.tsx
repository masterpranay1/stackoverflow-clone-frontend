import Sidebar from "../../components/Sidebar/Sidebar";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setToken } from "../../features/auth/authslice";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isSidebarOpen = useAppSelector((state) => state.nav.isSidebarOpen);
  const token = useAppSelector((state) => state.auth.token);
  const [username, setUsername] = useState("Username");

  const handleLogout = () => {
    dispatch(setToken(null));
    navigate("/login");
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      const fetchUser = async () => {
        const res = await fetch("https://stackoverflow-clone-backend-vrer.onrender.com/api/users/me", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const json = await res.json();

        setUsername(json.name);
      };

      fetchUser();
    }
  }, []);

  return (
    <div className="profile-page">
      {isSidebarOpen && <Sidebar />}
      <div className="profile">
        <header>
          <img
            className="profile__pic"
            src="https://picsum.photos/200"
            alt="profile"
          />
          <h2 className="profile__username">{username}</h2>
        </header>

        <section className="stats">
          <h3>Stats</h3>
          <div className="stats__container">
            <div className="stats__item">
              <p>0</p>
              <h4>Questions</h4>
            </div>

            <div className="stats__item">
              <p>0</p>
              <h4>Answers</h4>
            </div>

            <div className="stats__item">
              <p>0</p>
              <h4>Reputation</h4>
            </div>

            <div className="stats__item">
              <p>0</p>
              <h4>Views</h4>
            </div>
          </div>
        </section>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
