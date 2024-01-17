import { Card, Intro } from "./styled"

type CardProps = {
    photo: string,
    title: string,
    description?: string,
    type: string,
    id?: number
}

export const ItemCard = ({photo, title, description = "", type, id} : CardProps) => {
    return(
        <Card comic={type=='comic'}>
            <img src={photo} alt={`Image representing ${title}`} />
            <Intro comic={type == 'comic'}>
                <h1>{title}</h1>
                <p>{description || ""}</p>
            </Intro>
        </Card>
    )
}