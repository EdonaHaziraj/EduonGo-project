import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Routes from "./Components/Routes";
import Categories from "./Components/Categories/Categories";
import ResultItem from "./Components/ResultItem/ResultItem";

import { useSelector } from "react-redux";

function App() {
  const coursesCategories = useSelector((state) => state.coursesCategory);

  return (
    <div>
      <NavBar />

      <Categories />
      {coursesCategories.courseCategory ? (
        <div>
          <div className="title-div">
            {coursesCategories.courseCategory.name}
          </div>

          {coursesCategories.courseCategory.courses.map((course) => {
            return (
              <ResultItem key={course.course_id} isResult courseData={course} />
            );
          })}
        </div>
      ) : (
        ""
      )}

      <Routes />
    </div>
  );
}

export default App;
