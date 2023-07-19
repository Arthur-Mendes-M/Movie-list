import { useReducer } from "react"
import { movieInterface } from "../../contexts/interfaces/movieInterface"
import {Field, FieldInline, Form, OptionsContainer } from "./styles"

const initialInputValues = {
    title: "",
    date: "",
    cover: "",
    description: ""
}

const reducer = (state, {input, clearAll, form}) => {
    const id = input?.id
    const value = input?.value

    if(clearAll && form) {
        form[0].focus()
        return initialInputValues
    }

    switch (id) {
        case 'title':
            return {...state, title: value}

        case 'date':
            return {...state, date: value}
            
        case 'cover':
            return {...state, cover: value}

        case 'description':
            return {...state, description: value}

        default:
            throw new Error("Field not exist")
    }
}

export const MovieForm = ({actionOnSubmit, actionName = "Cadastrar", controledInputs = initialInputValues, children}) => {
    // const [inputValues, setInputValues] = useState(controledInputs)
    const [inputValues, dispacth] = useReducer(reducer, controledInputs)

    const submitMovie = (event) => {
        event.preventDefault()
        const action = actionOnSubmit.action

        if(action === 'create' || action === 'update') {
            let movie = {...movieInterface, id: Math.floor(Math.random() * 1000000)}
            const inputsList = [...event.target].filter(element => element.tagName.toLowerCase() !== "button")
            inputsList.forEach(input => movie[input.id] = input.value)

            actionOnSubmit.callback(movie)
        }

        dispacth({clearAll: true, form: event.target})
    }

    return (
        <Form onSubmit={submitMovie}>
            <div className="titles">
                {children}
            </div>

            <Field>
                <label htmlFor="title">Título</label>
                <input type="text" id="title" required autoFocus placeholder="Ex: Interstellar" value={inputValues?.title} onChange={(event) => dispacth({input: event.currentTarget})} />
            </Field>

            <Field>
                <label htmlFor="date">Data do lançamento</label>
                <input type="date" id="date" required value={inputValues?.date} onChange={(event) => dispacth({input: event.currentTarget})}/>
            </Field>

            <Field>
                <label htmlFor="cover">Cartaz</label>
                <input type="text" id="cover" required placeholder="https://image-link..." value={inputValues?.cover} onChange={(event) => dispacth({input: event.currentTarget})}/>
            </Field>

            <FieldInline>
                <label htmlFor="description">Descrição</label>
                <textarea id="description" rows="5" maxLength={380} required placeholder="Filme incrível" value={inputValues?.description} onChange={(event) => dispacth({input: event.currentTarget})}></textarea>
            </FieldInline>

            <OptionsContainer>
                <button type="reset" onClick={(event) => dispacth({clearAll: true, form: event.target.parentElement.parentElement})}>Limpar formuláiro</button>
                <button type="submit">{actionName} filme</button>
            </OptionsContainer>
        </Form>
    )
}