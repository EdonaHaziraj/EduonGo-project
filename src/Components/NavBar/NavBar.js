import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";

const styles = {
  grow: {
    flexGrow: 0,
  },
};

function NavBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography>EduonGo</Typography>
          <div style={styles.grow} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
