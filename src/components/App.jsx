import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import { useEffect } from "react";
import { getUserAuth, getArticlesAPI } from "../action"; // Import getArticlesAPI
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    props.getUserAuth(); // Check user authentication
    props.getArticlesAPI(); // Fetch articles on app load
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/feed">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
  getArticlesAPI: () => dispatch(getArticlesAPI()), // Dispatch getArticlesAPI
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
