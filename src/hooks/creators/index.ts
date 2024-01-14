import { useState, useEffect } from "react";
import { getAuthQuery } from "../get-auth-query";
import { API_ROUTES } from "../api-routes";
import axios from "axios";

export const useGetCreators = () => {
    const [creators, setCreators] = useState([])
    const {params} = getAuthQuery()
    
    const fetchCreators = () => {
        const promise = axios.get(API_ROUTES.CREATORS, {params})
        promise
        .then((res) => {
            setCreators(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchCreators()
    }, [])

    return{
        creators
    }

}