import Sidebar from "../../components/Sidebar/Sidebar";
import { useAppSelector } from "../../app/hooks";

import "./Tagspage.css";

const Questions = () => {
  const isSidebarOpen = useAppSelector((state) => state.nav.isSidebarOpen);

  const tags = [
    "javascript",
    "react",
    "nodejs",
  ]

  return (
    <div className="questions_wrapper">
      {isSidebarOpen && <Sidebar />}
      <div className="main">
        <header>
          <h2>All Questions</h2>
        </header>

        <div className="tags-page">
          <h2>Tags</h2>
          <ul className="tag-list">
            {tags.map((tag, index) => {
              return (
                <li key={index} className="tag">
                  {tag}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Questions;
