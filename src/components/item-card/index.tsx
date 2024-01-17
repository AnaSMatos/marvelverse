import { Card, Intro } from "./styled"

export const ItemCard = ({photo, title, description, type, id}) => {
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