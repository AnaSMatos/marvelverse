import { useState, useEffect } from "react";
import { getAuthParams } from "../get-auth-query";
import { API_ROUTES } from "../api-routes";
import axios from "axios";
import { ApiProps } from "../../model/api-hook-type";
import { Character } from "../../model/character";

export const useGetCharacters = ({searchQuery} : ApiProps) => {
    const [characters, setCharacters] = useState<Character[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [hasMore, setHasMore] = useState(false)
    const [pageNumber, setPageNumber] = useState(0)
    const {params} = getAuthParams({offset: pageNumber * 20, searchQuery})

    const onSearchName = () => {
        setCharacters([])
        setPageNumber(0)
        fetchCharacters()
    }

    const fetchCharacters = () => {
        setIsLoading(true)
        setError(false)
        const promise = axios.get(API_ROUTES.CHARACTERS, {params})
        promise
        .then((res: { data: {data: { results: Character[], offset: number, total: number }}}) => {
            setCharacters(prevCharacters => [...prevCharacters, ...res.data.data.results]);
            setHasMore(res.data.data.total > res.data.data.offset)
            setIsLoading(false)
        })
        .catch(() => {
            setError(true)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        fetchCharacters()
    }, [pageNumber])

    return{
        characters,
        isLoading,
        error,
        onSearchName,
        setPageNumber,
        pageNumber,
        hasMore
    }

}