import React, { useState } from "react";
import styled from "styled-components";
import useInputState from "../hooks/useInputState";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Heading = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeadingText = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
`;
const HeadingFooter = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 15px;
`;
const Input = styled.input`
  background: #ffffff;
  border: 1px solid #cbdbea;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
`;
const Button = styled.button`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  background: #329c89;
  border-radius: 8px;
  padding: 6px;
  cursor: pointer;
`;

const Login = ({ currentUser, setCurrentUser }) => {
  const [email, handleEmailChange, resetEmail] = useInputState("");
  const [password, handlePasswordChange, resetPassword] = useInputState("");

  onAuthStateChanged(auth, (curr) => {
    setCurrentUser(curr);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Container>
      <Heading>
        <HeadingText>To Continue</HeadingText>
        <HeadingFooter>We need your Name & Email</HeadingFooter>
      </Heading>
      <Input
        placeholder="Email"
        type="text"
        value={email}
        onChange={handleEmailChange}
      ></Input>
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      ></Input>
      <Button onClick={login}>Log In</Button>
    </Container>
  );
};

export default Login;
