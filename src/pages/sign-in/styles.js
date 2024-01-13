import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SignInForm = styled.div`
    width: 400px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(1,1,1,0.3);
`

export const KeyInput = styled.input`
    height: 30px;
    padding: 5px;
    border: none;
    border-radius: 5px;
`

export const SubmitButton = styled.button`
    height: 45px;

`