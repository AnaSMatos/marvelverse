import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.containerBackground};
    height: calc(100vh - 60px);
    margin-top: 60px;
    padding: 30px 30px 0 30px;
    box-sizing: border-box;
    overflow-y: scroll;
`