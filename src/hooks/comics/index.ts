import { useState, useEffect } from "react";
import { getAuthQuery } from "../get-auth-query";
import { API_ROUTES } from "../api-routes";
import axios from "axios";

export const useGetComics = () => {
    const [comics, setComics] = useState([])
    const {params} = getAuthQuery()
    
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