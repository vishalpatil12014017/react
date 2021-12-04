import axios from 'axios'

const FetchUsers = (query, page) => {
    if(!query){
        return Promise.reject("Please Provide a query")
    }

    return axios.get("https://api.github.com/search/users?&per_page=100&page=1", {
        params:{
            q:query,
        }
    })
}

export default FetchUsers