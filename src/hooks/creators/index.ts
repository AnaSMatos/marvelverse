import { useState, useEffect } from "react";
import { getAuthParams } from "../get-auth-query";
import { API_ROUTES } from "../api-routes";
import axios from "axios";
import { ApiProps } from "../../model/api-hook-type";
import { Creator } from "../../model/creator";

export const useGetCreators = ({offset} : ApiProps) => {
    const [creators, setCreators] = useState<Creator[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const {params} = getAuthParams({offset})
    
    const fetchCreators = () => {
        setIsLoading(true)
        const promise = axios.get(API_ROUTES.CREATORS, {params})
        promise
        .then((res: { data: {data: { results: Creator[] }}}) => {
            setCreators([...creators, ...res.data.data.results])
            setIsLoading(false)
        })
        .catch(() => {
            setError(true)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        fetchCreators()
    }, [offset])

    return{
        creators,
        isLoading,
        error
    }

}