import React, { useState, useEffect } from "react";
import axios from "axios";
import ResultItem from "../ResultItem/ResultItem";
import { Grid } from "@material-ui/core";

function DataFetching(props) {
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

  if (props.category.courseCategory) {
    const courseCategory = courseCategories.find(
      (courseCategory) =>
        courseCategory.course_category_id ===
        props.category.courseCategory.course_category_id
    );
    return (
      <div className="container">
        <div className="title-div">{courseCategory.name}</div>
        <hr />
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {courseCategory.courses.map((course) => {
            return (
              <Grid item xs={6} key={course.course_id}>
                <ResultItem
                  key={course.course_id}
                  isResult
                  courseData={course}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        {courseCategories.map((courseCategory) => (
          <div className="container">
            <div className="title-div">{courseCategory.name}</div>
            <hr />
            <Grid
              container
              spacing={3}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              {courseCategory.courses.map((course) => {
                return (
                  <Grid item xs={6} key={course.course_id}>
                    <ResultItem
                      key={course.course_id}
                      isResult
                      courseData={course}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        ))}
      </div>
    );
  }
}
export default DataFetching;
