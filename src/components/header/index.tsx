import { useNavigate, useLocation } from "react-router-dom"
import { HeaderContainer, PaginationButtons, ConfigButton, HeaderButton, ThemeSwitch } from "./styles"
import marvel_logo from "./../../assets/marvel.svg"

type HeaderProps = {
    changeTheme: (mode: string) => void,
    theme: string
}

export const Header = ({changeTheme, theme} : HeaderProps) => {
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
                    <ThemeSwitch>
                        <button 
                            className={theme === 'dark' ? 'selected' : ''}
                            onClick={() => changeTheme('dark')}
                        >    
                                <i className="fa-solid fa-moon"></i>
                        </button>
                        <button 
                            className={theme === 'light' ? 'selected' : ''}
                            onClick={() => changeTheme('light')}
                        >
                            <i className="fa-solid fa-sun"></i>
                        </button>
                    </ThemeSwitch>
                    <HeaderButton onClick={() => navigate('signin')}>
                        <i className="fa-solid fa-gear"></i>
                    </HeaderButton>
                </ConfigButton>
            </HeaderContainer>
        }
        </>
    )
}