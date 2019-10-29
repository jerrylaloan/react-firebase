import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
      {/* <div>home</div> */}
    </AuthProvider>
  );
}

export default App;
