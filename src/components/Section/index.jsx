import { Section } from "./styles"

export const ContentContainer = ({title, children}) => {

    return (
        <Section>
            {title ? (<h1 className="title">{title}</h1>) : null}
            
            {children}
        </Section>
    )
}