import React, { useState, useEffect } from "react";
import axios from "axios";
import ResultItem from "../ResultItem/ResultItem";
import { Typography } from "@material-ui/core";

function DataFetching() {
  const API_URL =
    "https://rest-api.eduongo.com/course_catalogue/get_course_catalogue?domain=nerxhan.eduongo.com";
  const [courseCategories, setCourseCategories] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res);
        setCourseCategories(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {courseCategories.map((courseCategory) => (
        <div>
          <div className="title-div">{courseCategory.name}</div>

          <hr />

          {courseCategory.courses.map((course) => {
            return (
              <ResultItem key={course.course_id} isResult courseData={course} />
            );
          })}
        </div>
      ))}
    </div>
  );
}
export default DataFetching;
