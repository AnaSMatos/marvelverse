import { cookies } from "../../components/cookies-config";
import { ApiProps } from "../../model/api-hook-type";

export const getAuthParams = ({offset = 0} : ApiProps) => {
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