import { Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage/SearchPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/search">
        <SearchPage />
      </Route>
    </Switch>
  );
}

export default Routes;
