import React, { useState } from 'react'
import Topsection from './Topsection'
import Listdata from './Listdata';
import { useEffect } from 'react';

function Bottom() {
    const [inventry, setInventry] = useState([]);
    const [Toorder, setToorder] = useState([]);
    const [ShowData, setShowData] = useState([])
    useEffect(() => {

    },[])
    const [button,setButton]=useState(false)
    const handleAdd=(id)=>{
        const updated=Toorder.filter((e)=>{
            if(e.id===id){
                e.stock=true
                e.status=true
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
        setShowData(updated)
        const updated1=inventry.filter((e)=>{
            if(e.id===id){
                e=!e  
            }
            return e;
        })
        setInventry(updated1) 
        setShowData(updated1)
    }
    const handleToggle=(id)=>{
        const updated=inventry.filter((e)=>{
            if(e.id===id){
                e.stock=!e.stock
            }
            return e;
        })
        setInventry(updated)
        
    }
    const handleAddCurrentInventry = (e) => {
        setInventry([...inventry, e])
        setShowData([...inventry,e])
       
    }
    const handleAddtoOrderInventry = (e) => {
        setToorder([...Toorder, e])
        setShowData([...Toorder,e])
        
    }
    return (
        <>
            <Topsection handleAddCurrentInventry={handleAddCurrentInventry} handleAddtoOrderInventry={handleAddtoOrderInventry}></Topsection>
            <div className="row pt-4">
                <div className="col col-4"></div>
                <div className="col btn-group mt-1" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary bg-dark" onClick={()=>{
                        setShowData([...inventry]);setButton(true)
                    }}>Show Inventry</button>
                    <button type="button" className="btn btn-outline-primary bg-dark" onClick={()=>{
                       setShowData([...Toorder]);
                       setButton(false)
                    }}>Show Orderlist</button>
                </div>
                <div className="col col-4"></div>
            </div>
            <div className="row mt-3">
                <div className="col col-3"></div>
                <div className="col"><Listdata List={ShowData} statusdata={button} handleAdd={handleAdd} handleToggle={handleToggle} handledelete={handledelete}></Listdata></div>
                <div className="col col-3"></div>
            </div>
            

        </>

    )
}

export default Bottom
