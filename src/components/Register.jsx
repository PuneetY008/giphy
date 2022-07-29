import React, { useState } from "react";
import styled from "styled-components";
import useInputState from "../hooks/useInputState";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
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

const Register = ({ currentUser, setCurrentUser }) => {
  const [email, handleEmailChange, resetEmail] = useInputState("");
  const [password, handlePasswordChange, resetPassword] = useInputState("");
  const [fullName, handleFullNameChange, resetFullName] = useInputState("");

  onAuthStateChanged(auth, (curr) => {
    setCurrentUser(curr);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Container>
      <Input
        placeholder="Full Name"
        type="text"
        value={fullName}
        onChange={handleFullNameChange}
      ></Input>
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
      <Button onClick={register}>Sign Up</Button>
    </Container>
  );
};

export default Register;
