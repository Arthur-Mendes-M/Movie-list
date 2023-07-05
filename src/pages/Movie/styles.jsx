import { styled } from "styled-components";
import { flexBox } from "../../GlobalStyles/variables/mixins";

export const MovieDetailsContainer = styled.main`
    gap: 1rem;
`

export const TitleContainer = styled.section`
    align-items: flex-start;

    .title {
        margin: 0;
    }

    .subTitle {
        font-style: italic;
    }
`

export const PosterContainer = styled.section`
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: unset;
    gap: 2rem;
`

export const ImageCover = styled.img`
    height: 400px;
    
    border: 10px groove #0080ff;
    box-shadow: 0 10px 50px 5px #000000;
    
    flex: 1 1 200px;
    max-width: 300px;
`

export const DetailsContainer = styled.div`
    ${flexBox("column", null, "space-between", null, 1)}
    width: unset;
    flex: 10 1 300px;
`

export const DescriptionData = styled.div`
    ${flexBox("column", null, null, null, 1.5)}

    h2 {
        width: fit-content;
        justify-self: flex-end;
    }

    p {
        text-align: justify;
    }
`

export const ActionsContainer = styled.div`
    ${flexBox(null, null, null, null, 0.5)}
`

export const RemoveButton = styled.button`
    flex: 1 1 auto;

    &:hover {
        color: #ed3511;
        border-color: #ed3511;
    }
`