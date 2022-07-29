import React, { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";

const Home = (props) => {
  const { currentUser, setCurrentUser } = props;

  onAuthStateChanged(auth, (curr) => {
    setCurrentUser(curr);
  });

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
