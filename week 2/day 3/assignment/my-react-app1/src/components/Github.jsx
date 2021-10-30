import { useEffect, useState } from "react"
import FetchUsers from "./FetchUser"
import List from "./List";
const Github = () => {
    const [query, setQuery] = useState("");
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        setLoading(true)
        setIsError(false)
        FetchUsers("vishal")
            .then((res) => {
                console.log(res.data.items);
                setUser(res.data.items)
            })
            .catch((err) => {
                setIsError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const handleSearch = () => {
        setLoading(true)
        setIsError(false)
        FetchUsers(query)
            .then((res) => {
                // console.log(res.data.items);
                setUser(res.data.items)
            })
            .catch((err) => {
                setIsError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <div>
                <h3>GitHub Users</h3>
                <div className="input-group mb-3"style={{width:"300px"}}>
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"  value={query}
                    placeholder="Search Here"
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }} />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"disabled={loading} onClick={handleSearch}>{loading ? "loading" : "Search"}</button>
                </div>

                <div>{isError ? "Fill the text please" : null}</div>
                <List data={user} />
            </div>
        </>
    )

}

export default Github