import { useState, useEffect } from "react";
import { getAuthParams } from "../get-auth-query";
import { API_ROUTES } from "../api-routes";
import axios from "axios";

export const useGetCharacters = ({offset}) => {
    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const {params} = getAuthParams({offset})
    
    const fetchCharacters = () => {
        setIsLoading(true)
        const promise = axios.get(API_ROUTES.CHARACTERS, {params})
        promise
        .then((res) => {
            setCharacters([...characters, ...res.data.data.results])
            setIsLoading(false)
        })
        .catch((err) => {
            setError(true)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        fetchCharacters()
    }, [offset])

    return{
        characters,
        isLoading,
        error
    }

}