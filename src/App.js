import "./App.css";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import SearchPage from "./components/Search/SearchPage";
import FavoritesPage from "./components/Favorites/FavoritesPage";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <nav className="navigation">
          <NavLink className="link" activeClassName="active-link" to="/Login">
            Login
          </NavLink>
          <NavLink className="link" activeClassName="active-link" to="/Search">
            Search
          </NavLink>
          <NavLink
            className="link"
            activeClassName="active-link"
            to="/Favorites"
          >
            Favorites
          </NavLink>
          {/* Links for login/search/favorites 
          use a class for an active link */}
        </nav>
        <main>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/favorites" component={FavoritesPage} />
            <Route path="*">
              <Redirect to="/search" />
            </Route>
          </Switch>
        </main>
        <footer className="bottom">gif giver</footer>
      </>
    </Router>
  );
}

export default App;
