
import axios from 'axios'

const table=axios.create({
    baseURL:"http://localhost:3001/Form"
})

export default table
