import { createGlobalStyle } from "styled-components";
import { flexBox } from "./variables/mixins";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: #f1f1f1;

        transition: all .20s linear;

        font-family: 'Courier New', Courier, monospace;
    }

    body {
        background-color: #1f1f1f;
        width: 100%;
        min-height: 100vh;
    }

    #root {
        ${flexBox()}
        width: 100%;
        min-height: 100%;

        padding: 1rem 2rem;
    }

    input, textarea, button {
        width: 100%;
        border: none;
        background: none;

        border: 1.5px solid #f1f1f1;
        border-radius: 0.5rem;

        padding: 0.5rem 1rem;

        &::placeholder {
            font-style: italic;
        }
    }

    input {
        &[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(1);
        }
    }

    textarea {
        resize: none;
    }

    a.button:has(button) {
        width: 100%;
    }

    .defaultMessage {
        min-height: 50px;
        padding: 1rem 0;
        font-style: italic;
        opacity: .6;
    }

    button {
        cursor: pointer;
        flex: 1 3 auto;

        &[type=submit] {
            border-color: #0080ff;
            color: #0080ff;

            flex: 1 1 auto;

            &:hover {
                color: #f1f1f1;
                background-color: #0080ff;
            }
        }
    }

    main {
        ${flexBox("column")}
        width: 100%;

        .title {
            font-size: 3rem;
            margin-bottom: 2rem;
        }
    }

    section, div, img {
        width: 100%;
    }

    img {
        object-fit: cover;
    }

    section {
        ${flexBox("column")}
        max-width: 650px;

        .title {
            align-self: flex-start;
        }
    }
`