import { useGetCharacters } from "../../hooks/characters"
import { Container } from "../../components/container"
import { ItemCard } from "../../components/item-card"
import { ItemsList } from "../../components/items-list/styled"
import { useState, useRef, useCallback } from "react"
import { ScrollFooter } from "../../components/infinite-scroll-footer"
import { ErrorMessage } from "../../components/error-msg"

export const Characters = () => {
    const [pageNumber, setPageNumber] = useState(0)
    const {characters, isLoading, error} = useGetCharacters({offset: pageNumber * 20})

    const observer = useRef()

    const lastElementRef = useCallback(node => {
        if (isLoading || error) return
        if(observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
                setPageNumber(prevPage => prevPage + 1)
            }
        })
        
        if(node) observer.current.observe(node)
    }, [isLoading])

    return(
        <Container>
            {error && <ErrorMessage />}
            <ItemsList>
                {characters?.map((character, index) => (
                    <ItemCard
                        key={index}
                        title={character?.name}
                        photo={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
                        description={character?.description}
                        type='character'
                    />
                ))}
                <div ref={lastElementRef} />
            </ItemsList>
            <ScrollFooter isLoading={isLoading}/>
        </Container>
    )
}