import { styled } from "styled-components";
import { flexBox } from "../../GlobalStyles/variables/mixins";

export const Styled_AbsoluteContainer = styled.div`
    position: absolute;
    inset: 0;
    margin: auto;

    height: fit-content;
    max-height: 80%;
    width: 60%;
    max-width: inherit;

    padding: 2rem;

    overflow: auto;

    ${flexBox("column", undefined, "flex-start", undefined, 1)}

    background-color: #1f1f1f;
    border-radius: 1rem;
    border: 2px solid #f1f1f1;
`