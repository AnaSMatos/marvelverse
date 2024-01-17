import { useNavigate, useLocation } from "react-router-dom"
import { HeaderContainer, PaginationButtons, ConfigButton, HeaderButton } from "./styles"
import marvel_logo from "./../../assets/marvel.svg"

export const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const showHeader = (location.pathname !== '/signin')

    return(
        <>
        {showHeader &&
            <HeaderContainer>
                <PaginationButtons>
                    <HeaderButton onClick={() => navigate('/characters')}>Personagens</HeaderButton>
                    <HeaderButton onClick={() => navigate('/creators')}>Criadores</HeaderButton>
                    <HeaderButton onClick={() => navigate('/comics')}>Quadrinhos</HeaderButton>
                </PaginationButtons>
                <img src={marvel_logo} alt="" />
                <ConfigButton>
                    <HeaderButton onClick={() => navigate('signin')}>
                        <i className="fa-solid fa-gear"></i>
                    </HeaderButton>
                </ConfigButton>
            </HeaderContainer>
        }
        </>
    )
}