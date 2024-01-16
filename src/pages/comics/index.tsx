import { useGetComics } from "../../hooks/comics"
import { Container } from "../../components/container"
import { ItemCard } from "../../components/character-card"

export const Comics = () => {
    const {comics} = useGetComics()
    console.log(comics)
    
    return(
        <Container>
            {comics.map((comic, index) => (
                <ItemCard 
                    key={index}
                    title={comic.title}
                    photo={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
                    type='comic'
                />
            ))}
        </Container>
    )
}