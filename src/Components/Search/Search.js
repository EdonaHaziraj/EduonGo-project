import { Grid, Paper, Typography, Button, TextField } from "@material-ui/core";
import { RotateLeft, Search as SearchIcon } from "@material-ui/icons";
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
  const [courseInput, handlecourseInput, resetcourseInput] = useInput("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchcourse(courseInput));
  };

  return (
    <Paper style={styles.itemContainer} elevation={2}>
      <Grid>
        <TextField
          value={courseInput}
          onChange={handlecourseInput}
          fullWidth
          label="Enter course name to search"
        />
      </Grid>
      <Button onClick={handleSearch} color="primary" variant="contained">
        <SearchIcon />
        <Typography>Search...</Typography>
      </Button>
      <Button onClick={resetcourseInput} color="primary" variant="contained">
        <RotateLeft />
        <Typography>Reset</Typography>
      </Button>
    </Paper>
  );
}

export default Search;
