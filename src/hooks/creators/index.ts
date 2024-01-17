import { useState, useEffect } from "react";
import { getAuthParams } from "../get-auth-query";
import { API_ROUTES } from "../api-routes";
import axios from "axios";
import { ApiProps } from "../../model/api-hook-type";
import { Creator } from "../../model/creator";

export const useGetCreators = ({searchQuery} : ApiProps) => {
    const [creators, setCreators] = useState<Creator[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [hasMore, setHasMore] = useState(false)
    const [pageNumber, setPageNumber] = useState(0)
    const {params} = getAuthParams({offset: pageNumber * 20, searchQuery: searchQuery})

    const onSearchName = () => {
        setCreators([])
        setPageNumber(0)
        fetchCreators()
    }

    const fetchCreators = () => {
        setIsLoading(true)
        setError(false)
        const promise = axios.get(API_ROUTES.CREATORS, {params})
        promise
        .then((res: { data: {data: { results: Creator[], offset: number, total: number }}}) => {
            setCreators(prevCreators => [...prevCreators, ...res.data.data.results]);
            setHasMore(res.data.data.total > res.data.data.offset)
            setIsLoading(false)
        })
        .catch(() => {
            setError(true)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        fetchCreators()
    }, [pageNumber])

    return{
        creators,
        isLoading,
        error,
        onSearchName,
        setPageNumber,
        pageNumber,
        hasMore
    }

}