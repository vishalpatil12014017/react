import { useState } from "react"
import axios from 'axios'
import Covinlist from "./CovinList";
function Covin() {
    const [pincode, setPincode] = useState("");
    const [date, setDate] = useState("")
    const [data, setData] = useState([]);
    let n_date = date.split("-").reverse().join("-");
    console.log(data)
    console.log(n_date);
    const handleChange = async () => {
        const { data } = await axios.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin", {
            params: {
                pincode: pincode,
                date: n_date
            }
        })
        setData(data)
    }
    return (
        <div className="center">
            <h1>Find a slot for Vaccine</h1>
            <div className="input-group mb-3">
                <input value={pincode} className="form-control"
                    type="number"
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter your pincode here"
                />
                <input value={date} className="form-control"
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    placeholder=""
                />
            </div>
            <button className="btn btn-primary" onClick={handleChange} >Show Result</button>
            <Covinlist data={data} />
        </div>
    )
}
export default Covin