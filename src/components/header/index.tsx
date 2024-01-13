import { useNavigate } from "react-router-dom"
import { HeaderContainer } from "./styles"

export const Header = () => {
    const navigate = useNavigate()
    return(
        <HeaderContainer>
            <button onClick={() => navigate('/signin')}>Login</button>
            <button onClick={() => navigate('/characters')}>Characters</button>
            <button onClick={() => navigate('/creators')}>Creators</button>
            <button onClick={() => navigate('/comics')}>Comics</button>
        </HeaderContainer>
    )
}