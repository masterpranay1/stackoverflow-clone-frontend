import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside>
      <a href="#" className="active">Home</a>

      <p>PUBLIC</p>

      <div className="sidebar_links">
        <a href="#">Questions</a>
        <a href="#">Tags</a>
        <a href="#">Users</a>
      </div>
    </aside>
  );
};

export default Sidebar;
