
import List from "./List";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getusers } from "../../store/GitchUsers/actions";

const Github = () => {
    const dispatch = useDispatch()
    const { loading, error, data } = useSelector(store => store.users.users)
    useEffect(() => {
        getdata()
    }, [])
    const getdata = async () => {
      dispatch(getusers())
    }
    
    return (
        <>
            <List data={data} />
        </>
    )

}

export default Github