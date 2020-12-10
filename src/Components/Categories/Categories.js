import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Typography, IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { loadCoursesByCategory } from "../../Redux/Actions/course.actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const name = event.target.name;
    dispatch(loadCoursesByCategory(event.target.value));
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className="categories-div">
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Category</InputLabel>
        <Select
          native
          onChange={handleChange}
          inputProps={{
            name: "",
            id: "",
          }}
        >
          <option value={"ALL"} selected>ALL</option>
          <option value={"OUR COURSES"}>OUR COURSES</option>
          <option value={"LOCKED"}>LOCKED</option>
          <option value={"PAID"}>PAID</option>
          <option value={"SUBSCRIPTION"}>SUBSCRIPTION</option>
        </Select>
      </FormControl>
    </div>
  );
}
