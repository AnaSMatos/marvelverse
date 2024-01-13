import { useState } from 'react'
import {Container, SignInForm, KeyInput, SubmitButton} from './styles.js'
import md5 from 'md5-hash'
import { useNavigate } from 'react-router-dom'
import { cookies } from '../../components/cookies-config/index.js'

const SignIn = () => {
    const [signInForm, setSignInForm] = useState({
        publicKey: "",
        privateKey: "",
        hash: ""
    })

    const handleSubmit = () => {
        cookies.set('publicKey', signInForm.publicKey)
        cookies.set('privateKey', signInForm.publicKey)
        const hashCode = '1' + signInForm.privateKey + signInForm.publicKey
        cookies.set('hash', hashCode)
    }

    return(
        <Container>
            <SignInForm>
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