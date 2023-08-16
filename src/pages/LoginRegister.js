import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import BackgroundImage from './background1.svg'; // Make sure to replace this path with the correct path to your image file.

const fadeIn = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`;

const fadeOut = keyframes`
    0% {opacity: 1;}
    100% {opacity: 0;}
`;
const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Poppins:300');
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background: url(${BackgroundImage}) no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;


const LoginPage = styled.div`
    width: 400px;
    padding: 8% 0 0;
    margin: auto;
`;

const Form = styled.form`
    position: relative;
    z-index: 1;
    text-align: center;
    position: absolute;
    top: 40%; // Change this line
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,.5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border-radius: 10px;

    opacity: ${props => props.isVisible ? 1 : 0};
    animation: ${props => props.isVisible ? fadeIn : fadeOut} 0.5s linear;
    transition: visibility 0.5s linear;
    visibility: ${props => props.isVisible ? "visible" : "hidden"};
`;
const Input = styled.input`
    width: 100%;
    padding: 10px 0;
    font-size: 13px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
`;

const Button = styled.a`
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #289bb8;
    font-size: 16px;
    text-decoration: none;
    overflow: hidden;
    transition: .5s;
    margin-top: 15px;
    letter-spacing: 2px
`;

const Message = styled.p`
    margin: 15px 0 0;
    color: white;
    font-size: 12px;
`;

const RegisterButton = styled(Button)`
    &:hover {
        background: #289bb8;
        color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 5px #289bb8,
                    0 0 25px #289bb8,
                    0 0 50px #289bb8,
                    0 0 100px #289bb8;
    }
`;


function LoginRegisterPage() {
    const [isLoginFormActive, setLoginFormActive] = useState(true);

    // Login Form State
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Register Form State
    const [fullName, setFullName] = useState('');
    const [registerUsername, setRegisterUsername] = useState('');
    const [email, setEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Implement login logic here
    }

    const handleRegister = (e) => {
        e.preventDefault();
        // Implement register logic here
    }

    return (
        <LoginPage>
            <GlobalStyles />
            <Form onSubmit={handleRegister} isVisible={!isLoginFormActive}>
                <h2 style={{ color: 'white' }}>Register</h2>
                <Input type="text" placeholder="Full Name *" onChange={(e) => setFullName(e.target.value)} required />
                <Input type="text" placeholder="Username *" onChange={(e) => setRegisterUsername(e.target.value)} required />
                <Input type="email" placeholder="Email *" onChange={(e) => setEmail(e.target.value)} required />
                <Input type="password" placeholder="Password *" onChange={(e) => setRegisterPassword(e.target.value)} required />
                <RegisterButton href="#" onClick={handleRegister}>
                    Register
                </RegisterButton>
                <Message>Already registered? <a href="#" onClick={() => setLoginFormActive(true)}>Sign In</a></Message>
            </Form>
            <Form onSubmit={handleLogin} isVisible={isLoginFormActive}>
                <h2 style={{ color: 'white' }}>Login</h2>
                <Input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
                <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <RegisterButton href="#" onClick={handleLogin}>
                    Login
                </RegisterButton>
                <Message>Not registered? <a href="#" onClick={() => setLoginFormActive(false)}>Create an account</a></Message>
            </Form>
        </LoginPage>
    );
}

export default LoginRegisterPage;
