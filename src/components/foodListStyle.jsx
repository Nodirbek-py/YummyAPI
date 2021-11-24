import styled from "styled-components";

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
`

const Div = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 20px;
    background: #fff;
    border: 0.75px solid #CACACA;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    img {
        margin-right: 10px;
        width: 171px;
        height: 171px;
        border-radius: 7px;
    }

    h3 {
        font-family: 'Niramit', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 23px;
        color: #D01010;
    }
` 

export {Grid, Div};