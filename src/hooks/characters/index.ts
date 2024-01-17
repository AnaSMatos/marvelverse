import { useState, useEffect } from "react";
import { getAuthParams } from "../get-auth-query";
import { API_ROUTES } from "../api-routes";
import axios from "axios";
import { ApiProps } from "../../model/api-hook-type";
import { Character } from "../../model/character";

export const useGetCharacters = ({offset} : ApiProps) => {
    const [characters, setCharacters] = useState<Character[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const {params} = getAuthParams({offset})
    
    const fetchCharacters = () => {
        setIsLoading(true)
        const promise = axios.get(API_ROUTES.CHARACTERS, {params})
        promise
        .then((res: { data: {data: { results: Character[] }}}) => {
            setCharacters([...characters, ...res.data.data.results])
            setIsLoading(false)
        })
        .catch(() => {
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