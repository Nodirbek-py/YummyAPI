import styled from "styled-components";

const Fon = styled.div`
    background: #222B45;
    width: 1440px;
    height: 72px;
    padding: 17px 0;
    margin-bottom: 15px;
`

const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Input = styled.input`
    width: 460px;
    height: 32px;
    background: #F8F8F8;
    border-radius: 10px;
    border: none;
    padding-left: 10px;
    font-family: Myriad Pro;
    outline: none;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.185em;
    
    &::placeholder {
        color: rgba(0, 0, 0, 0.3);
    }
`
const Button = styled.button`
    border: none; 
    background: none;
    font-family: Actor;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    margin-left: 10px;
`
const Anchor = styled.a`
    text-decoration: none;
    font-family: Actor;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    margin-right: 35px;
`
const ButtonLogin = styled(Button)`
    background: #2E4B9D;
    border-radius: 5px;
    width: 132px;
    height: 41px;
    font-weight: normal;
`

export {Fon, Nav, Input, Button, Anchor, ButtonLogin};