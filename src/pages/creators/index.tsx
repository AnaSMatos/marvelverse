import { useGetCreators } from "../../hooks/creators"
import { Container } from "../../components/container"

export const Creators = () => {
    const {creators} = useGetCreators()
    console.log(creators)
    
    return(
        <Container>
            
        </Container>
    )
}