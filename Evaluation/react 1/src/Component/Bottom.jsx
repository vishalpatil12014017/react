import React, { useState } from 'react'
import Topsection from './Topsection'
import Listdata from './Listdata';
import { useEffect } from 'react';

function Bottom() {
    const [inventry, setInventry] = useState([]);
    const [Toorder, setToorder] = useState([]);
    const [ShowData, setShowData] = useState(inventry)
    useEffect(() => {
        handleAdd(Listdata);
    },[] )
    const [button,setButton]=useState()
    const handleAdd=(id)=>{
        const updated=Toorder.filter((e)=>{
            if(e.id===id){
                e.stock=true
                setInventry([...inventry,e])
                e=!e  
            }
            return e;
        })
        setToorder(updated)
        
    }
    const handledelete=(id)=>{
        const updated=Toorder.filter((e)=>{
            if(e.id===id){
                e=!e  
            }
            return e;
        })
        setToorder(updated)
        
    }
    const handleToggle=(id)=>{
        const updated=inventry.filter((e)=>{
            if(e.id===id){
                e.status=!e.status
            }
            return e;
        })
        setInventry(updated)
        
    }
    const handleAddCurrentInventry = (e) => {
        setInventry([...inventry, e])
    }
    const handleAddtoOrderInventry = (e) => {
        setToorder([...Toorder, e])
    }
    const ShowcurrentData = () => {
        setShowData([...inventry])
        setButton(true)
    }
    const ShowOrderData = () => {
        setShowData([...Toorder])
        setButton(false)
    }
    return (
        <>
            <Topsection handleAddCurrentInventry={handleAddCurrentInventry} handleAddtoOrderInventry={handleAddtoOrderInventry}></Topsection>
            <div className="row pt-4">
                <div className="col col-4"></div>
                <div className="col btn-group mt-1" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary bg-dark" onClick={ShowcurrentData}>Show Inventry</button>
                    <button type="button" className="btn btn-outline-primary bg-dark" onClick={ShowOrderData}>Show Orderlist</button>
                </div>
                <div className="col col-4"></div>
            </div>
            <div className="row mt-3">
                <div className="col col-3"></div>
                <div className="col"><Listdata List={ShowData} status={button} handleAdd={handleAdd} handleToggle={handleToggle} handledelete={handledelete}></Listdata></div>
                <div className="col col-3"></div>
            </div>
            

        </>

    )
}

export default Bottom
