import { cookies } from "../../components/cookies-config";

type AuthParamsProps = {
  offset?: number,
  searchQuery?: string,
  titleStartsWith?: string,
  nameStartsWith?: string
}

export const getAuthParams = ({offset = 0, searchQuery = "", titleStartsWith = "", nameStartsWith = ""} : AuthParamsProps) => {
    const publicKey = cookies.get('publicKey')
    const hash = cookies.get('hash')

    const params = {
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

      if (nameStartsWith.trim() !== "") {
        params.nameStartsWith = nameStartsWith;
      }
    
    return{
        params
    }
}