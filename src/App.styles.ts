import styled, { createGlobalStyle } from "styled-components";
import BGImage from './images/bg.jpg'


export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
        font-size: 20px;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        color: #fff;
    }

    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }

    button {
        cursor: pointer;
        background: transparent;
        color: white;
        border: 2px solid white;
        border-radius: 5px;
        margin: 10px 0;
        padding: 5px 20px;
    }
    
    button:hover {
        background: white;
        color: black;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        font-weight: 400;
        text-align: center;
        margin: 20px;
    }

    .start, .next {
        cursor: pointer;
        background: transparent;
        color: white;
        border: 2px solid white;
        border-radius: 10px;
        height: 40px;
        width: 140px;
        margin: 20px 0;
        padding: 5px 20px;
        box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.25);
    }

    .start {
        max-width: 200px;
    }

    .start:hover, .next:hover {
        background: white;
        color: black;
    }

    .number {
        color: white;
        font-size: 1.5rem;
        margin: 0;
    }

    .question {
        color: white;
        font-size: 1.5rem;
        margin: 0;
    }

    .answers {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`