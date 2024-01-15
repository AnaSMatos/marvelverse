import { useNavigate, useLocation } from "react-router-dom"
import { HeaderContainer } from "./styles"

export const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const showHeader = location.pathname !== '/signin'

    return(
        <HeaderContainer showHeader={showHeader}>
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/signin')}>Login</button>
            <button onClick={() => navigate('/characters')}>Characters</button>
            <button onClick={() => navigate('/creators')}>Creators</button>
            <button onClick={() => navigate('/comics')}>Comics</button>
        </HeaderContainer>
    )
}