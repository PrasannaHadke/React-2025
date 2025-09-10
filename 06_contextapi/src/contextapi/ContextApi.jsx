import React, { createContext, useContext, useEffect, useState } from "react";

export const ApiContext = createContext()

export const ApiProvider = ({children})=>{
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getProducts = async ()=>{
        try {
            const response = await fetch('https://dummyjson.com/products')
            const result = await response.json()
            setData(result)
        } catch (error) {
            console.log(error.message);
        } finally{
            setLoading(false)
        }
    }

    getProducts()
    },[])

    return (
        <ApiContext.Provider value ={{data, loading}}>
            {children}
        </ApiContext.Provider>
    )
}

