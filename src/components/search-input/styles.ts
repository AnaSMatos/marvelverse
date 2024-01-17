import styled  from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    input{
        height: 40px;
        width: 50%;
        background-color: ${props => props.theme.inputBackground};
        padding: 0 10px;
        border: none;
        outline: none;
        border-radius: 10px 0px 0px 10px;
    }
    button{
        height: 40px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        cursor: pointer;
        border-radius: 0px 10px 10px 0px;
    }
`