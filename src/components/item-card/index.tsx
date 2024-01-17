import { Card, Intro } from "./styled"

type CardProps = {
    photo: string,
    title: string,
    description?: string,
    type: string
}

export const ItemCard = ({photo, title, description = "", type} : CardProps) => {
    return(
        <Card className={type == 'comic' ? 'comic' : ''}>
            <img src={photo} alt={`Image representing ${title}`} />
            <Intro className={type == 'comic' ? 'comic' : ''}>
                <h1>{title}</h1>
                <p>{description || ""}</p>
            </Intro>
        </Card>
    )
}