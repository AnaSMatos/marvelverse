import { useGetCreators } from "../../hooks/creators"
import { Container } from "../../components/container"
import { ItemsList } from "../../components/items-list/styled"
import { Creator, Details, MoreButton } from "./styles"
import { ScrollFooter } from "../../components/infinite-scroll-footer"
import { useState, useRef, useCallback, RefCallback } from "react"
import { ErrorMessage } from "../../components/error-msg"

export const Creators = () => {
    const [pageNumber, setPageNumber] = useState(0)
    const {creators, isLoading, error} = useGetCreators({offset: pageNumber * 20})
    
    const observer = useRef<IntersectionObserver | null>(null);

    const lastElementRef: RefCallback<HTMLDivElement | null> = useCallback(node => {
        if (!node || isLoading || error) return;

        if (observer.current) {
        observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            setPageNumber(prevPage => prevPage + 1);
        }
        });

        observer.current.observe(node);
    }, [isLoading, error]);
    
    return(
        <Container>
            {error && <ErrorMessage />}
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