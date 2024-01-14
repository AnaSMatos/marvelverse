import { useGetComics } from "../../hooks/comics"

export const Comics = () => {
    const {comics} = useGetComics()
    console.log(comics)
    return(
        <>Comics</>
    )
}