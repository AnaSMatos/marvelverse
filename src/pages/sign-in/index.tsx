import { useState } from 'react'
import {Container, SignInForm, KeyInput, SubmitButton} from './styles.js'
import md5 from 'md5'
import { cookies } from '../../components/cookies-config/index.js'
import login_img from './../../assets/login-wallpaper.jpeg'
import marvel_logo from './../../../public/marvel.svg'

const SignIn = () => {
    const [signInForm, setSignInForm] = useState({
        publicKey: "",
        privateKey: "",
        hash: ""
    })

    const handleSubmit = () => {
        cookies.set('publicKey', signInForm.publicKey)
        cookies.set('privateKey', signInForm.privateKey)
        const hashCode = `1${signInForm.privateKey}${signInForm.publicKey}`
        cookies.set('hash', md5(hashCode))
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
                    onChange={(e: { target: { value: string } }) => setSignInForm({...signInForm, publicKey: e.target.value})}                    
                    />
                <KeyInput 
                    type="text" 
                    placeholder="Private Key" 
                    value={signInForm.privateKey}
                    onChange={(e: { target: { value: string } }) => setSignInForm({...signInForm, privateKey: e.target.value})}  
                />
                <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>  
            </SignInForm>
        </Container>
    )
}

export default SignIn