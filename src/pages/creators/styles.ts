import styled from "styled-components"

export const Creator = styled.div`
    position: relative;
    height: 100px;
    display: flex;
    color: white;
    border-radius: 8px;
    overflow: hidden;
    font-family: 'Bangers';
    box-shadow: 5px 5px 15px #193a66;
    background-color: #193a664d;
    img{
        width: 80px;
    }
`

export const Details = styled.div`
    width: 400px;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    h1{
        font-size: 30px;
        margin-bottom: 7px;
    }
    div{
        display: flex;
        gap: 10px;
        font-size: 18px;
    }
`

export const MoreButton = styled.button`
    position: absolute;
    bottom: 12px;
    right: 12px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: none;
    border: none;
    &:hover{
        text-decoration: underline;
    }
`