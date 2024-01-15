import { useState, useEffect } from "react";
import { getAuthParams } from "../get-auth-query";
import { API_ROUTES } from "../api-routes";
import axios from "axios";

export const useGetComics = () => {
    const [comics, setComics] = useState([])
    const {params} = getAuthParams()
    
    const fetchComics = () => {
        const promise = axios.get(API_ROUTES.COMICS, {params})
        promise
        .then((res) => {
            setComics(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchComics()
    }, [])

    return{
        comics
    }

}