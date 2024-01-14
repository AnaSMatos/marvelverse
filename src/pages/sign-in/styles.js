import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    img{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;
    }
`

export const SignInForm = styled.div`
    width: 450px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 50px 20px;
    box-sizing: border-box;
    position: absolute;
    z-index: 1;
    left: 70px;
    top: 25%;
    backdrop-filter: sepia(100%);
    img{
        width: 200px;
        position: relative;
    }
`

export const KeyInput = styled.input`
    height: 45px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
`

export const SubmitButton = styled.button`
    height: 45px;
    width: 100%;
`