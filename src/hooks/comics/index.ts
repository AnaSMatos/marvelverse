import { useState, useEffect } from "react";
import { getAuthParams } from "../get-auth-query";
import { API_ROUTES } from "../api-routes";
import axios from "axios";

export const useGetComics = ({offset}) => {
    const [comics, setComics] = useState([])
    const {params} = getAuthParams({offset})
    const [isLoading, setIsLoading] = useState(false)
    
    const fetchComics = () => {
        setIsLoading(true)
        const promise = axios.get(API_ROUTES.COMICS, {params})
        promise
        .then((res) => {
            setComics([...comics, ...res.data.data.results])
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        fetchComics()
    }, [offset])

    return{
        comics,
        isLoading
    }

}