import { useState, useEffect } from "react";
import { getAuthParams } from "../get-auth-query";
import { API_ROUTES } from "../api-routes";
import axios from "axios";

export const useGetComics = ({offset}) => {
    const [comics, setComics] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const {params} = getAuthParams({offset})
    
    const fetchComics = () => {
        setIsLoading(true)
        const promise = axios.get(API_ROUTES.COMICS, {params})
        promise
        .then((res) => {
            setComics([...comics, ...res.data.data.results])
            setIsLoading(false)
        })
        .catch((err) => {
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