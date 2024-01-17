import { cookies } from "../../components/cookies-config";

type AuthParamsProps = {
  offset?: number,
  searchQuery?: string,
  titleStartsWith?: string
}

type paramsType = {
  ts: number,
  apikey: string,
  hash: string,
  offset: number,
  nameStartsWith?: string,
  titleStartsWith?: string
}

export const getAuthParams = ({offset = 0, searchQuery = "", titleStartsWith = ""} : AuthParamsProps) => {
    const publicKey = cookies.get('publicKey')
    const hash = cookies.get('hash')

    const params:paramsType = {
        ts: 1,
        apikey: publicKey,
        hash,
        offset,
      };
    
      if (searchQuery.trim() !== "") {
        params.nameStartsWith = searchQuery;
      }

      if (titleStartsWith.trim() !== "") {
        params.titleStartsWith = titleStartsWith;
      }
    
    return{
        params
    }
}