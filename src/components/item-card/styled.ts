import styled from "styled-components";

export const Card = styled.div`
    width: 250px;
    height: 300px;
    box-shadow: 5px 5px 15px #193a66;
    overflow: hidden;
    border-radius: 3px;
    position: relative;
    img{
        height: 300px;
        transition: 0.5s;
    }
    &:hover{
        cursor: pointer;
        div{
            height: 300px;
        }
        p{
            display: block;
        }
        img{
            transform: scale(1.1) rotate(-3deg);
        }
    }
    &.comic{
        width: 190px;
    }
`

export const Intro = styled.div`
    height: 70px;
    width: 100%;
    padding: 6px;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    background: rgba(27,27,27, 0.5);
    color: white;
    transition: all 0.5s;
    h1{
        margin: 10px;
        font-size: 25px;
        font-family: 'Bangers';
    }
    p{
        font-size: 15px;
        margin: 20px;
        display: none;
    }
    &.comic{
        height: 140px;
    }
`