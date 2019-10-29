import React, { useContext } from "react";
import app from "../firebase-config";
import { AuthContext } from "../Auth";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  const { displayName, email } = currentUser || {
    displayName: "empty-display-name",
    email: "empty-email"
  };
  return (
    <div>
      <h1>Home</h1>
      <div>
        Hello , {displayName} - {email}
      </div>
      <button onClick={() => app.auth().signOut()}>Sign Out</button>
    </div>
  );
};

export default Home;
