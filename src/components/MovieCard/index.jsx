import { Link } from "react-router-dom"
import { CardContainer, CoverContainer, CoverImage, DetailsLink, RemoveButton, Title } from "./styles"

export const MovieCard = ({id, title, cover, action}) => {
    return (
        <CardContainer>
            <CoverContainer>
                <CoverImage src={cover} alt={title} />

                <Title>{title}</Title>
                
                <Link to={`/movie/${id}`}><DetailsLink type="button">Ver mais</DetailsLink></Link>
            </CoverContainer>

            <RemoveButton type="button" onClick={action}>Remover</RemoveButton>
        </CardContainer>
    )
}