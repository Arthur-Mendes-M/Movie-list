import { useContext, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { MovieListContext } from "../../contexts/MovieListContext"
import { ActionsContainer, DescriptionData, DetailsContainer, ImageCover, MovieDetailsContainer, PosterContainer, RemoveButton, TitleContainer } from "./styles"
import { PopupContainer } from "../../components/PopupContainer"
import { MovieForm } from "../../components/Form"

export const MoviePage = () => {
    const nav = useNavigate()
    const movieId = useParams().id
    const [movies, moviesDispatch] = useContext(MovieListContext)

    const [movie, setMovie] = useState(movies.filter(movie => movie.id == movieId)[0])

    const [formPopup, setFormPopup] = useState(false)

    return (
            <MovieDetailsContainer>
                <section>
                    <Link to="/" className="button"><button type="button">Voltar</button></Link>
                </section>

                <TitleContainer>
                    <h1 className="title">{movie.title}</h1>
                    <p className="subtitle">{movie.date}</p>
                </TitleContainer>

                <PosterContainer className="poster">
                    <ImageCover src={movie.cover} alt={movie.title} />   

                    <DetailsContainer>
                        <DescriptionData>
                            <h2>{movie.title}</h2>
                            <p>{movie.description ? movie.description : "Nenhuma descrição"}</p>
                        </DescriptionData>
                        
                        <ActionsContainer>
                            <button type="button" onClick={() => {
                                // alert("Funcionalidade em desenvolvimento")
                                // document.getElementById("root").rende
                                
                                setFormPopup(prev => !prev)
                            }}>
                                Atualizar
                            </button>

                            <RemoveButton onClick={() => {
                                nav('/')
                                moviesDispatch({type: 'removeMovie', id: movie.id})
                            }}>
                                Remover
                            </RemoveButton>
                        </ActionsContainer>
                    </DetailsContainer>

                    {
                        formPopup && (
                            <PopupContainer>
                                <button type="button" onClick={() => setFormPopup(prev => !prev)}>Close</button>
                                
                                <MovieForm 
                                    actionName="Atualizar" 
                                    controledInputs={{...movie}}
                                    actionOnSubmit={{
                                        action: 'update', 
                                        id: movie.id, 
                                        movie: movie, 
                                        callback: (updatedMovie) => {
                                            moviesDispatch({type: 'updateMovie', movie: updatedMovie})
                                            setMovie(updatedMovie)
                                            setFormPopup(false)
                                        }
                                    }}
                                >
                                    <h2>Preencha os campos a baixo</h2>
                                </MovieForm>
                            </PopupContainer>
                        )
                    }
                </PosterContainer>
            </MovieDetailsContainer>
    )
}