import React from 'react'
import useFetch from '../utils/useFetch'
function Fetch() {
  const { Loading, error, data } = useFetch("https://reqres.in/api/users")
  console.log('data:', data)
  return Loading ? ("Loading...") : error ? ("Error...") : (<div className="App text-center text-white">
          {
             data?.data.map((e) => (
              <h1>Hello, {e.first_name}</h1>
            ))
          }
        </div>
      )
}
export default Fetch
