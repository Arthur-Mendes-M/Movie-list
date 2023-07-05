import { styled } from "styled-components";
import { flexBox } from "../../GlobalStyles/variables/mixins";

export const CardContainer = styled.div`
    ${flexBox("column", null, undefined, null, 1)}
    min-height: 450px;

    flex: 1 1 300px;
`

export const CoverImage = styled.img`
    width: 100%;
    height: 100%;
`

export const CoverContainer = styled.div`
    position: relative;
    width: 100%;
    height: 350px;

    border-radius: 1rem;
    overflow: hidden;
`

export const Title = styled.h2`
    position: absolute;
    inset: 0 .8rem .8rem 0;
    height: fit-content;
    width: fit-content;

    padding: .5rem 1rem;

    background-color: #1f1f1f;

    border-radius: 0 0 .5rem 0;
`

export const DetailsLink = styled.button`
    position: absolute;
    bottom: .8rem;
    right: .8rem;
    height: fit-content;
    width: fit-content;

    padding: .5rem 1rem;

    background-color: #1f1f1f;

    &:hover {
        color: #0080ff;
        border-color: #0080ff;
    }
`

export const RemoveButton = styled.button`
    flex: unset;

    &:hover {
        color: #ed3511;
        border-color: #ed3511;
    }
`