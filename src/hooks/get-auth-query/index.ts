import { cookies } from "../../components/cookies-config";

export const getAuthParams = () => {
    const publicKey = cookies.get('publicKey')
    const hash = cookies.get('hash')
    
    return{
        params: {
            ts: 1,
            apikey: publicKey,
            hash
        }
    }
}