import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Search from "./Components/Search/Search";
import Categories from "./Components/Categories/Categories";
import DataFetching from "./Components/HomeResults/HomeResults";

import { useSelector } from "react-redux";

function App() {
  const courseCategory = useSelector((state) => state.coursesCategory);

  return (
    <div>
      <NavBar />
      <Search />  
      <Categories />
      <DataFetching category={courseCategory}/>
    </div>
  );
}

export default App;
