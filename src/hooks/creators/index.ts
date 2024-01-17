import { useState, useEffect } from "react";
import { getAuthParams } from "../get-auth-query";
import { API_ROUTES } from "../api-routes";
import axios from "axios";

export const useGetCreators = ({offset}) => {
    const [creators, setCreators] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const {params} = getAuthParams({offset})
    
    const fetchCreators = () => {
        setIsLoading(true)
        const promise = axios.get(API_ROUTES.CREATORS, {params})
        promise
        .then((res) => {
            setCreators([...creators, ...res.data.data.results])
            setIsLoading(false)
        })
        .catch((err) => {
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