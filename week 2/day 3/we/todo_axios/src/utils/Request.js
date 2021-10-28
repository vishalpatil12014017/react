
import axios from 'axios'

const Mockdata=axios.create({
    baseURL:"http://localhost:3001/Todos"
})

export default Mockdata
