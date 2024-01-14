import { useGetCharacters } from "../../hooks/characters"

export const Characters = () => {
    const {characters} = useGetCharacters()
    
    console.log(characters)

    return(
        <>Characters</>
    )
}