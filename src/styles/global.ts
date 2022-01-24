import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Rubik', sans-serif;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button, input {
        font-family: 'Rubik', sans-serif;
    }
`;