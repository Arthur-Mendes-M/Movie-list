import { movieInterface } from "../../contexts/interfaces/movieInterface"
import {Form, OptionsContainer } from "./styles"

export const MovieForm = ({actionOnSubmit, children}) => {

    const submitMovie = (event) => {
        event.preventDefault()

        let movie = {...movieInterface, id: Math.floor(Math.random() * 1000000)}
        const inputsList = [...event.target].filter(element => element.tagName.toLowerCase() !== "button")
        inputsList.forEach(input => movie[input.id] = input.value)

        actionOnSubmit(movie)

        event.target.reset()
        event.target[0].focus()
    }

    return (
        <Form onSubmit={submitMovie}>
            {children}

            <OptionsContainer>
                <button type="reset">Limpar formuláiro</button>
                <button type="submit">Cadastrar filme</button>
            </OptionsContainer>
        </Form>
    )
}