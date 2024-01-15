import { useState, useEffect } from "react";
import { getAuthParams } from "../get-auth-query";
import { API_ROUTES } from "../api-routes";
import axios from "axios";

export const useGetCharacters = () => {
    const [characters, setCharacters] = useState([])
    const {params} = getAuthParams()
    
    const fetchCharacters = () => {
        const promise = axios.get(API_ROUTES.CHARACTERS, {params})
        promise
        .then((res) => {
            setCharacters(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchCharacters()
    }, [])

    return{
        characters
    }

}