import './covin.css'
function Covinlist({ data }) {
    return (
        <div id="table-div">
            <table id="table">
                <tr>
                    <th>Address</th>
                    <th>Block</th>
                    <th>State</th>
                    <th>Vaccine</th>
                </tr>
                {
                    data.sessions?.map((e) => (
                        <tr key={e.id}>
                            <td>{e.address}</td>
                            <td>{e.block_name}</td>
                            <td>{e.state_name}</td>
                            <td>{e.vaccine}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}



export default Covinlist