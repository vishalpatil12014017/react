import { useState , useEffect} from "react"
const useFetch = (url) => {
    const [loading, setLoading] = useState();
    const [data, setData] = useState()
    const [error, setError] = useState()
    useEffect(() => {
        setLoading(true)
        fetch(url).then( x => x.json()).then(data =>{
            setLoading(false);
            setData(data)
        }).catch((e) => {
            setLoading(false)
            setError(e)
        })
        
    }, [])
    return {
        loading,
        error,
        data
    }
}

export default useFetch