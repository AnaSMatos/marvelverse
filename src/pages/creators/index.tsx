import { useGetCreators } from "../../hooks/creators"
export const Creators = () => {
    const {creators} = useGetCreators()
    console.log(creators)
    return(
        <>Creators</>
    )
}