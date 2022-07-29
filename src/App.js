import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import RegisterLogin from "./pages/RegisterLogin";
import Home from "./pages/Home";

function App() {
  const [currentUser, setCurrentUser] = useState(
    sessionStorage.getItem("currentUser")
  );

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routeProps) =>
          currentUser ? (
            <Home currentUser={currentUser} setCurrentUser={setCurrentUser} />
          ) : (
            <RegisterLogin
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )
        }
      ></Route>
    </Switch>
  );
}

export default App;
