import { IconButton, InputAdornment, Paper, Typography, Button, TextField } from "@material-ui/core";
import { RotateLeft, Search as SearchIcon } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";  
import { useInput } from "../../Hooks/useInput";
import { searchcourse } from "../../Redux/Actions/course.actions";

const styles = {
  itemContainer: {
    margin: "50px auto",
    padding: 20,
    textAlign: "center",
    width: "50%",
  },
};

function Search() {
  const API_URL =
    "https://rest-api.eduongo.com/course_catalogue/get_course_catalogue?domain=nerxhan.eduongo.com";
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <TextField
        type="search"
        variant="outlined"
        margin="normal"
        placeholder="Search for a course"
        onChange={handleChange}
        value={searchTerm}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
  );
}

export default Search;
