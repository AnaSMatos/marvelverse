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
    backdrop-filter: sepia(60%);
    img{
        width: 200px;
        position: relative;
    }
`

export const KeyInput = styled.input`
    height: 60px;
    padding: 5px 20px;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    width: 100%;
    &:focus{
        outline: 2px solid black;
    }
`

export const SubmitButton = styled.button`
    height: 50px;
    width: 100%;
    background: rgb(74,0,0);
    background: linear-gradient(90deg, rgba(74,0,0,1) 0%, rgba(176,1,1,1) 50%, rgba(74,0,0,1) 100%);
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
`