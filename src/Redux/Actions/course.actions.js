import axios from "axios";
const API_URL =
  "https://rest-api.eduongo.com/course_catalogue/get_course_catalogue?domain=nerxhan.eduongo.com";

function beginSearch() {
  return {
    type: "BEGIN_SEARCH",
  };
}
function beginCategorySearch() {
  return {
    type: "BEGIN_CATEGORY_SEARCH",
  };
}

function setcourseData(courseData) {
  return {
    type: "courses_FOUND",
    payload: courseData,
  };
}
function setCategoryCourseData(categoryData) {
  return {
    type: "courses_category_FOUND",
    payload: categoryData,
  };
}

function setNotFound() {
  return {
    type: "course_NOT_FOUND",
  };
}

export function clearSearch() {
  return {
    type: "CLEAR_SEARCH",
  };
}

export function searchcourse(title) {
  return async (dispatch) => {
    dispatch(beginSearch());
    try {
      const response = await axios.get(API_URL);

      const foundCourses = [];

      response.data.forEach((category) => {
        category.courses.forEach((course) => {
          if (
            course.course_name
              .toLocaleLowerCase()
              .indexOf(title.toLocaleLowerCase()) >= 0
          ) {
            foundCourses.push(course);
          }
        });
      });

      if (foundCourses.length > 0) {
        dispatch(setcourseData(foundCourses));
      } else {
        dispatch(setNotFound());
      }
    } catch (e) {}
  };
}

export function loadCoursesByCategory(categoryTitle) {
  return async (dispatch) => {
    dispatch(beginCategorySearch());
    try {
      const response = await axios.get(API_URL);

      const foundCategory = response.data.filter((category) => {
        return (
          category.name
            .toLocaleLowerCase()
            .indexOf(categoryTitle.toLocaleLowerCase()) >= 0
        );
      });

      dispatch(
        setCategoryCourseData(
          foundCategory.length > 0 ? foundCategory[0] : null
        )
      );
    } catch (e) {}
  };
}
