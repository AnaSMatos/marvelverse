import { useGetCharacters } from "../../hooks/characters"
import { Container } from "../../components/container"
import { ItemCard } from "../../components/character-card"
import { useState, useRef, useCallback, useEffect } from "react"

export const Characters = () => {
    const [pageNumber, setPageNumber] = useState(0)
    const {characters, isLoading} = useGetCharacters({offset: pageNumber * 20})

    const observer = useRef()
    const lastElementRef = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
                setPageNumber(pageNumber + 1)
            }
        })
        if(node) observer.current.observe(node)
    }, [])

    return(
        <Container>
            {characters?.map((character, index) => (
                <ItemCard
                    key={index}
                    title={character?.name}
                    photo={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
                    description={character?.description}
                    type='character'
                />
            ))}
            {!isLoading &&
            <div ref={lastElementRef} > aa  aa aa aa aa</div>}
        </Container>
    )
}