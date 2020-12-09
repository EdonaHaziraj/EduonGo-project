import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

const styles = {
  wrapper: {
    display: "flex",
    margin: "50px auto",
    padding: 20,
    width: "50%",
  },
};

const styles2 = {
  wrapper2: {
    display: "flex",
    margin: "50px auto",
    padding: 20,
    width: "100%",
    height: "100%",
  },
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ResultItem(props) {
  const dispatch = useDispatch();

  const {
    title,
    number_of_students,
    enrollment_type,
    course_name,
    image,
    description,
  } = props.courseData;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card style={styles.wrapper} onClick={handleClickOpen}>
        <CardMedia style={{ width: 200 }} image={image} title="test" />
        <div style={styles.left}>
          <CardContent>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="subtitle1">{course_name}</Typography>
            <Typography variant="subtitle1">{number_of_students}</Typography>
            <Typography variant="subtitle1">{enrollment_type}</Typography>
          </CardContent>
        </div>
      </Card>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Course Details
            </Typography>
          </Toolbar>
        </AppBar>
        <Card style={styles2.wrapper2}>
          <CardMedia
            style={{ width: 200, height: 200 }}
            image={image}
            title="test"
          />
          <div style={styles.left}>
            <CardContent>
              <Typography variant="subtitle1">{course_name}</Typography>
              <Divider></Divider>
              <Typography variant="subtitle1">{enrollment_type}</Typography>
              <Divider></Divider>
              <Typography
                variant="subtitle1"
                style={{ width: 1000, height: 120 }}
              >
                Course details <br></br> {description}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Dialog>
    </div>
  );
}
