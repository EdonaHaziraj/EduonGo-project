import { useSelector } from "react-redux";
import { CircularProgress, Card, Typography } from "@material-ui/core";
import ResultItem from "../ResultItem/ResultItem";

function SearchResult() {
  const search = useSelector((state) => state.search);

  return (
    <div style={{ textAlign: "center" }}>
      {search.isLoading ? (
        <CircularProgress />
      ) : search.isFound ? (

        search.courseData.map((course) => {
          return (
            <ResultItem key={course.course_id} isResult courseData={course} />
          );
        })
        
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default SearchResult;
