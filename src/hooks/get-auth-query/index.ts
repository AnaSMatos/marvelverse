import { cookies } from "../../components/cookies-config";

export const getAuthQuery = () => {
    const publicKey = cookies.get('publicKey')
    const privateKey = cookies.get('privateKey')
    const hash = cookies.get('hash')

    console.log(publicKey)
    console.log(privateKey)
    console.log(hash)

    const query = `ts=1&apikey=${publicKey}&hash=${hash}`
    
    return{
        authQuery: query
    }
}