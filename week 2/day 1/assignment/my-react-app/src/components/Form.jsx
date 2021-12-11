import React from 'react'
import { useRef, useState, useEffect } from 'react'
import Formdata from './Formdata'
import Table from './Table'
import table from '../utils/Request'
function Form() {
    const [page, setPage] = useState(0)
    const [formdata, setFormdata] = useState({
        username: "",
        age: "",
        file: "",
        ismarried: false
    })
    const [data, setData] = useState([])
    useEffect(() => {
        handleAdd()
    }, [page])
    const handleAdd = async () => {
        //methode 1
        // fetch(`http://localhost:3001/Form?_page=${page}&_limit=3`)
        //     .then((d) => d.json())
        //     .then(setData)

        //methode 2
        // const {data}=await axios.get(`http://localhost:3001/Form?_page=${page}&_limit=3`)
        // setData(data)

        // method 3
        const { data } = await table.get("/", {
            params: {
                _page: page,
                _limit: 4
            }
        })
        setData(data)
    };
    // console.log("data", data)
    const inputRef = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formdata)
        const { data } = await table.post("/", {
            ...formdata
        })
            .then(handleAdd())
            .then(e.target.username.value = "", e.target.age.value = "", e.target.address.value = "", e.target.salary.value = "", e.target.ismarried.checked = false, e.target.file.value = "")
            .then(handleAdd())




        // fetch("http://localhost:3001/Form", {
        //     method: "POST",
        // body: JSON.stringify({
        //     ...formdata,

        // }),

        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // }).then()
    };
    const handleurl = async (e) => {
        if (e.target.name === "department") {
            const { data } = await table.get("/", {
                params: {
                    department: e.target.value,
                    _page: page,
                    _limit: 4
                }
            })
            setData(data)
            // fetch(`http://localhost:3001/Form?department=${e.target.value}&_page=${page}&_limit=3`)
            //     .then((d) => d.json())
            //     .then(setData)
        }
        else if (e.target.name === "sort" && e.target.value === "Low To High") {
            const { data } = await table.get("/", {
                params: {
                    _order: "asc",
                    _sort: "salary",
                    _page: page,
                    _limit: 4
                }
            })
            setData(data)
            // fetch(`http://localhost:3001/Form?_sort=salary&_order=asc&_page=${page}&_limit=3`)
            //     .then((d) => d.json())
            //     .then(setData)
        }
        else if (e.target.name === "sort" && e.target.value === "High To Low") {
            const { data } = await table.get("/", {
                params: {
                    _order: "desc",
                    _sort: "salary",
                    _page: page,
                    _limit: 4
                }
            })
            setData(data)
            // fetch(`http://localhost:3001/Form?_sort=salary&_order=desc&_page=${page}&_limit=3`)
            //     .then((d) => d.json())
            //     .then(setData)
        }
    };
    const handleChange = (e) => {
        const file = inputRef.current.files[0];
        const { name, value, type, checked } = e.target;
        setFormdata({
            ...formdata,
            [name]: type === "checkbox" ? checked : value,
        })
    };
    const handledelete = async (id) => {
        console.log(id)
        const { data } = await table.delete(`/${id}`, {

        }).then(handleAdd())
    };
    return (
        <>
            <div className="col-6  mt-4">
                <Formdata handleChange={handleChange} handleSubmit={handleSubmit} inputRef={inputRef}></Formdata>
            </div>
            <div className="col-6  mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <label for="inputState" className="form-label">Filter By Department</label>
                        <select id="inputState" className="form-select" onChange={handleurl} required name="department">
                            <option selected>....</option>
                            <option>Mechnical</option>
                            <option>Electrical</option>
                            <option >Electronics</option>
                            <option>Civil</option>
                            <option>Computer Science</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label for="inputState" className="form-label">Sort by salary</label>
                        <select id="inputState" className="form-select" onChange={handleurl} required name="sort">
                            <option selected>....</option>
                            <option>High To Low</option>
                            <option>Low To High</option>
                        </select>
                    </div>
                </div>

                {
                    data.map((e) => (
                        <Table style={e} handledelete={handledelete}></Table>
                    ))
                }
                <div className="center">
                    <button className="next"
                        onClick={() => {
                            setPage(0 <= (page - 1))
                        }}>Priv</button>
                    <button className="next"
                        onClick={() => {
                            setPage((page + 1))
                        }}>Next</button>
                </div>
            </div>
        </>
    )
}

export default Form
