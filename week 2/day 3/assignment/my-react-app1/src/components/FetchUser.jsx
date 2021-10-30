import axios from 'axios'

const FetchUsers = (query, page) => {
    if(!query){
        return Promise.reject("Please Provide a query")
    }

    return axios.get("https://api.github.com/search/users?_page=1&_limit=5", {
        params:{
            q:query,
            _page:page,
            _limit:3,
        }
    })
}

export default FetchUsers