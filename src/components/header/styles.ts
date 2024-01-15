import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 40px;
    position: absolute;
    display: ${({showHeader}) => showHeader ? 'flex' : 'none'};
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    background-color: #0b1016;
`
