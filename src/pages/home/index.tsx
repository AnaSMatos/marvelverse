import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { cookies } from "../../components/cookies-config"
import { Container } from "../../components/container"
export const Home = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const storedPublicKey = cookies.get('publicKey') || '';
        const storedPrivateKey = cookies.get('privateKey') || '';
    
        if(storedPrivateKey && storedPublicKey){
            navigate('/characters')
        }else{
            navigate('/signin')
        }
      }, []);
    return(
        <Container>
        </Container>
    )
}