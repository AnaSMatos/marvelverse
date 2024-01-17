import { useGetComics } from "../../hooks/comics"
import { Container } from "../../components/container"
import { ItemCard } from "../../components/item-card"
import { useState, useRef, useCallback, RefCallback } from "react"
import { ItemsList } from "../../components/items-list/styled"
import { ScrollFooter } from "../../components/infinite-scroll-footer"
import { ErrorMessage } from "../../components/error-msg"

export const Comics = () => {
    const [pageNumber, setPageNumber] = useState(0)
    const {comics, isLoading, error} = useGetComics({offset: pageNumber * 20})

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
                {comics.map((comic, index) => (
                    <ItemCard 
                        key={index}
                        title={comic.title}
                        photo={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
                        type='comic'
                    />
                ))}
                <div ref={lastElementRef} />
            </ItemsList>
            <ScrollFooter isLoading={isLoading}/>
        </Container>
    )
}