import { styled } from "styled-components";
import { flexBox } from "../../GlobalStyles/variables/mixins";

export const Form = styled.form`
    ${flexBox("row", null, "space-between", "wrap", 1)}
    width: 100%;
    align-self: center;
` 

export const Field = styled.div`
    ${flexBox("column", "flex-start", null, null, 0.5)}
    flex: 1 1 250px;

    font-style: italic;
`

export const FieldInline = styled(Field)`
    flex: none;
`

export const OptionsContainer = styled.div`
    ${flexBox(null, null, null, null, 0.5)}
`