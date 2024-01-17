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
        <Card style={{width: type === 'comic' ? '190px' : '250px'}}>
            <img src={photo} alt={`Image representing ${title}`} />
            <Intro style={{height: type === 'comic' ? '190px' : '250px'}}>
                <h1>{title}</h1>
                <p>{description || ""}</p>
            </Intro>
        </Card>
    )
}