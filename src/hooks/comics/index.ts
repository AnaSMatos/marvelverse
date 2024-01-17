import { useState, useEffect } from "react";
import { getAuthParams } from "../get-auth-query";
import { API_ROUTES } from "../api-routes";
import axios from "axios";
import { ApiProps } from "../../model/api-hook-type";
import { Comic } from "../../model/comic";


export const useGetComics = ({searchQuery} : ApiProps) => {
    const [comics, setComics] = useState<Comic[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [hasMore, setHasMore] = useState(false)
    const [pageNumber, setPageNumber] = useState(0)
    const {params} = getAuthParams({offset: pageNumber * 20, titleStartsWith: searchQuery})

    const onSearchName = () => {
        setComics([])
        setPageNumber(0)
        fetchComics()
    }

    const fetchComics = () => {
        setIsLoading(true)
        setError(false)
        const promise = axios.get(API_ROUTES.COMICS, {params})
        promise
        .then((res: { data: {data: { results: Comic[], offset: number, total: number }}}) => {
            setComics(prevComics => [...prevComics, ...res.data.data.results]);
            setHasMore(res.data.data.total > res.data.data.offset)
            setIsLoading(false)
        })
        .catch(() => {
            setError(true)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        fetchComics()
    }, [pageNumber])

    return{
        comics,
        isLoading,
        error,
        onSearchName,
        setPageNumber,
        pageNumber,
        hasMore
    }

}