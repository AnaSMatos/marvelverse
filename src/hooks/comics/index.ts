import { useState, useEffect } from "react";
import { getAuthParams } from "../get-auth-query";
import { API_ROUTES } from "../api-routes";
import axios from "axios";
import { ApiProps } from "../../model/api-hook-type";
import { Comic } from "../../model/comic";


export const useGetComics = ({offset} : ApiProps) => {
    const [comics, setComics] = useState<Comic[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const {params} = getAuthParams({offset})
    
    const fetchComics = () => {
        setIsLoading(true)
        const promise = axios.get(API_ROUTES.COMICS, {params})
        promise
        .then((res: { data: {data: { results: Comic[] }}}) => {
            setComics([...comics, ...res.data.data.results])
            setIsLoading(false)
        })
        .catch(() => {
            setError(true)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        fetchComics()
    }, [offset])

    return{
        comics,
        isLoading,
        error
    }

}