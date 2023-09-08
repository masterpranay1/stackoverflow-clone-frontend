import Sidebar from "../../components/Sidebar/Sidebar";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage_wrapper">
      <Sidebar />
      <div className="main">
        <h1>Homepage</h1>
      </div>
    </div>
  );
};

export default Homepage;
