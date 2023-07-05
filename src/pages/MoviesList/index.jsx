import { useContext, useState } from "react"
import { MovieListContext } from "../../contexts/MovieListContext"
import { MovieForm } from "../../components/Form"
import { ContentContainer } from "../../components/Section"
import { Field, FieldInline} from "../../components/Form/styles"
import { MovieCard } from "../../components/MovieCard"
import { RowCardList } from "./styles"

export const MoviesListPage = () => {
    const [moviesList, addMovieToList, removeMoveOfList] = useContext(MovieListContext)
    const reversedMoviesList = moviesList.slice().reverse()
    const [filtered, setFiltered] = useState(false)
    const currentMoviesList = filtered ? reversedMoviesList : moviesList

    return (
        <main>
            <h1 className="title">Catálogo de filmes</h1>

            <ContentContainer title="Cadastro">
                <MovieForm actionOnSubmit={addMovieToList}>
                    <Field>
                        <label htmlFor="title">Título</label>
                        <input type="text" id="title" required autoFocus placeholder="Ex: Interstellar"/>
                    </Field>

                    <Field>
                        <label htmlFor="date">Data do lançamento</label>
                        <input type="date" id="date" required />
                    </Field>

                    <Field>
                        <label htmlFor="cover">Cartaz</label>
                        <input type="text" id="cover" required placeholder="https://image-link..." />
                    </Field>

                    <FieldInline>
                        <label htmlFor="description">Descrição</label>
                        <textarea id="description" rows="5" maxLength={380} required placeholder="Filme incrível"></textarea>
                    </FieldInline>
                </MovieForm>
            </ContentContainer>

            <ContentContainer title="Lista de filmes cadastrados">
                <button type="button" onClick={() => setFiltered(prev => !prev)}>
                    visualizar do mais {
                        filtered ? "antigo para o mais novo" : "novo para o mais antigo"
                    }
                </button>
                
                <RowCardList>
                    {   
                        currentMoviesList.length > 0 ?
                            currentMoviesList.map((movie, index) => 
                                <MovieCard 
                                    key={index} 
                                    id={movie.id} 
                                    title={movie.title} 
                                    cover={movie.cover} 
                                    action={() => removeMoveOfList(movie.id)}
                                />
                            )
                        : <p className="defaultMessage">🤔 Ainda não existe nenhum filme catalogado. Teste cadastrar um no furmuláiro a cima.</p>
                    }
                </RowCardList>
            </ContentContainer>
        </main>
    )
}