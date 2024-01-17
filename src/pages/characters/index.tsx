import { useGetCharacters } from "../../hooks/characters"
import { Container } from "../../components/container"
import { ItemCard } from "../../components/item-card"
import { ItemsList } from "../../components/items-list/styled"
import { useState, useRef, useCallback, RefCallback } from "react"
import { ScrollFooter } from "../../components/infinite-scroll-footer"
import { ErrorMessage } from "../../components/error-msg"
import { SearchInput } from "../../components/search-input"

export const Characters = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const {characters, isLoading, error, onSearchName, setPageNumber, hasMore} = useGetCharacters({searchQuery})

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
            <SearchInput onChangeValue={handleChange} placeholder="Nome do personagem" onSearch={onSearchName}/>
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