import React, { useEffect, useState } from "react";
import app from "./firebase-config";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // app.auth().onAuthStateChanged(setCurrentUser);
    app.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        user
          .updateProfile({
            displayName: "Jerry"
          })
          .then(function() {
            // Update successful.
            setCurrentUser(user);
          })
          .catch(function(error) {
            // An error happened.
            console.log("ERROR >>> ", error);
          });
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
