import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 60px;
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    background-color: #0c1521;
    gap: 2px;
    padding: 0 25px;
    img{
        height: 60px;
    }
`

export const PaginationButtons = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
`

export const ConfigButton = styled(PaginationButtons)`
    justify-content: end;
    font-size: 23px;
`

export const HeaderButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    position: relative;
    &::before{
        content: "";
        background-color: #fff;
        position: absolute;
        bottom: 10px;
        left: 0;
        height: 3px;
        width: 0;
        transition: 0.2s ease-in-out;
    }
    &:hover::before{
        content: "";
        background-color: #fff;
        position: absolute;
        bottom: 10px;
        left: 0;
        height: 3px;
        width: 100%;
    }
`
