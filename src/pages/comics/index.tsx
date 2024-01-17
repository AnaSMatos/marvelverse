import { useGetComics } from "../../hooks/comics"
import { Container } from "../../components/container"
import { ItemCard } from "../../components/item-card"
import { useState, useRef, useCallback, RefCallback } from "react"
import { ItemsList } from "../../components/items-list/styled"
import { ScrollFooter } from "../../components/infinite-scroll-footer"
import { ErrorMessage } from "../../components/error-msg"
import { SearchInput } from "../../components/search-input"

export const Comics = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const {comics, isLoading, error, onSearchName, setPageNumber, hasMore} = useGetComics({searchQuery})

    const observer = useRef<IntersectionObserver | null>(null);

    const lastElementRef: RefCallback<HTMLDivElement | null> = useCallback(node => {
        if (!node || isLoading || error) return;

        if (observer.current) {
        observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
            setPageNumber(prevPage => prevPage + 1);
        }
        });

        observer.current.observe(node);
    }, [isLoading, error, hasMore]);

    const handleChange = (value: string) => {
        setSearchQuery(value);
    };  
    
    return(
        <Container>
            {error && <ErrorMessage />}
            <SearchInput onChangeValue={handleChange} placeholder="Nome do quadrinho" onSearch={onSearchName}/>
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