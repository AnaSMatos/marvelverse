import { cookies } from "../../components/cookies-config";

export const getAuthParams = ({offset=0}) => {
    const publicKey = cookies.get('publicKey')
    const hash = cookies.get('hash')
    
    return{
        params: {
            ts: 1,
            apikey: publicKey,
            hash,
            offset
        }
    }
}