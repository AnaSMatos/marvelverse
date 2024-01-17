import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Container, SignInForm, KeyInput, SubmitButton} from './styles.js'
import md5 from 'md5'
import { cookies } from '../../components/cookies-config/index.js'
import login_img from './../../assets/login-wallpaper.jpeg'
import marvel_logo from './../../assets/marvel.svg'

const SignIn = () => {
    const navigate = useNavigate()
    const [signInForm, setSignInForm] = useState({
        publicKey: "",
        privateKey: "",
        hash: ""
    })

    useEffect(() => {
        const storedPublicKey = cookies.get('publicKey') || '';
        const storedPrivateKey = cookies.get('privateKey') || '';
    
        setSignInForm({
          publicKey: storedPublicKey,
          privateKey: storedPrivateKey,
          hash: '',
        });
      }, []);

    const handleSubmit = () => {
        cookies.set('publicKey', signInForm.publicKey)
        cookies.set('privateKey', signInForm.privateKey)
        const hashCode = `1${signInForm.privateKey}${signInForm.publicKey}`
        cookies.set('hash', md5(hashCode))
        navigate('/characters')
    }


    return(
        <Container>
            <img src={login_img} alt=""/>
            <SignInForm>
                <img src={marvel_logo} alt="" />
                <KeyInput 
                    type="text" 
                    placeholder="Public Key" 
                    value={signInForm.publicKey}
                    onChange={(e) => setSignInForm({...signInForm, publicKey: e.target.value})}                    
                    />
                <KeyInput 
                    type="text" 
                    placeholder="Private Key" 
                    value={signInForm.privateKey}
                    onChange={(e) => setSignInForm({...signInForm, privateKey: e.target.value})}  
                />
                <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>  
            </SignInForm>
        </Container>
    )
}

export default SignIn