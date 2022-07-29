import React, { useState } from "react";
import styled from "styled-components";
import GrouptodoImg from "../images/GrouptodoImg.png";
import Login from "../components/Login";
import Register from "../components/Register";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftImgDiv = styled.div`
  width: 50%;
  height: 50%;
  background-image: url(${GrouptodoImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const Right = styled.div`
  flex: 1;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightDiv = styled.div`
  width: 50%;
  height: 60%;

  background: #ffffff;
  border: 2px solid rgba(26, 59, 88, 0.24);
  border-radius: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightDivInside = styled.div`
  width: 80%;
  height: 85%;
  display: flex;
  flex-direction: column;
`;
const LinksContainer = styled.div``;
const LoginLink = styled.span`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  padding: 15px 5px 7px 0px;
  margin: 0px 15px 5px 0px;
  letter-spacing: 0;
  cursor: pointer;
  color: ${(props) =>
    props.isLoggingIn ? "#1A3B58" : "rgba(26, 59, 88, 0.33)"};
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    border: 2px solid #1a3b58;
    border-radius: 5px;
    width: 20%;
    background-color: #1a3b58;
    margin-left: 3px;
    display: ${(props) => (props.isLoggingIn ? "block" : "none")};
  }
`;
const RegisterLink = styled.span`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  padding: 15px 5px 7px 0px;
  margin: 0px 15px 5px 0px;
  letter-spacing: 0;
  cursor: pointer;
  color: ${(props) =>
    props.isLoggingIn ? "rgba(26, 59, 88, 0.33)" : "#1A3B58"};
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    border: 2px solid #1a3b58;
    border-radius: 5px;
    width: 15%;
    background-color: #1a3b58;
    margin-left: 3px;
    display: ${(props) => (props.isLoggingIn ? "none" : "block")};
  }
`;

const ComponentContainer = styled.div`
  width: 80%;
  height: 100%;
  align-self: center;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 2px solid rgba(64, 145, 223, 0.12); ;
`;

const RegisterLogin = (props) => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const { currentUser, setCurrentUser } = props;

  return (
    <Container>
      <Wrapper>
        <Left>
          <LeftImgDiv></LeftImgDiv>
        </Left>
        <Right>
          <RightDiv>
            <RightDivInside>
              <LinksContainer>
                <LoginLink
                  onClick={() =>
                    isLoggingIn ? setIsLoggingIn(false) : setIsLoggingIn(true)
                  }
                  isLoggingIn={isLoggingIn}
                >
                  Log In
                </LoginLink>
                <RegisterLink
                  onClick={() =>
                    isLoggingIn ? setIsLoggingIn(false) : setIsLoggingIn(true)
                  }
                  isLoggingIn={isLoggingIn}
                >
                  Sign Up
                </RegisterLink>
              </LinksContainer>
              <ComponentContainer>
                {isLoggingIn ? (
                  <Login
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                ) : (
                  <Register
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                )}
              </ComponentContainer>
            </RightDivInside>
          </RightDiv>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default RegisterLogin;
