import { useGetCreators } from "../../hooks/creators"
import { Container } from "../../components/container"
import { ItemsList } from "../../components/items-list/styled"
import { Creator, Details, MoreButton } from "./styles"
import { ScrollFooter } from "../../components/infinite-scroll-footer"
import { useState, useRef, useCallback } from "react"

export const Creators = () => {
    const [pageNumber, setPageNumber] = useState(0)
    const {creators, isLoading} = useGetCreators({offset: pageNumber * 20})

    console.log(isLoading)
    
    const observer = useRef()

    const lastElementRef = useCallback(node => {
        if (isLoading) return
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
            <ItemsList>
                {creators?.map(creator => (
                    <Creator>
                        <img src={`${creator?.thumbnail?.path}.${creator?.thumbnail?.extension}`} alt="" />
                        <Details>
                            <h1>{creator.fullName}</h1>
                            <div>
                                <p>Comics: {creator.comics.items.length}</p>
                                <p>Events: {creator.events.items.length}</p>
                                <p>Series: {creator.series.items.length}</p>
                                <p>Stories: {creator.stories.items.length}</p>
                            </div>
                            <MoreButton>+ Saiba mais</MoreButton>
                        </Details>
                    </Creator>
                ))}
                <div ref={lastElementRef} />
            </ItemsList>
            <ScrollFooter isLoading={isLoading}/>
        </Container>
    )
}