import { useEffect, useState } from "react"

export const useFetch = <T>({url}:{url:string}) =>{
    const [dados, setDados] = useState<T |null>(null)
    const [erro, setErro] = useState("")


    useEffect(()=>{
        fetch(`http://localhost:8080/${url}`).then(
            response => response.json()
        )
        .then(dados => setDados(dados))
        .catch((error)=>setErro(error))
    }, [url])

    return{dados, erro}
}