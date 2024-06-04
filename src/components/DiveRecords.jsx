import { useState, useEffect, useCallback } from "react"
import { db } from "../config/firebase"
import { getDocs, collection } from 'firebase/firestore'
import Record from "./Record"

export default function DiveRecords(){
    const [records, setRecords] = useState([{"Title":"Loading Records..."}])

    useEffect(() => {getRecords()}, [])

    const getRecords = useCallback(async () => {
        try{
            let rawData = await getDocs(collection(db,"Dive Records"))
            setRecords(rawData.docs.map(doc => ({
                ...doc.data(), id: doc.id
            })))
        }
        catch(err){console.error(err)}
    })

    return(
    <>
    {records.map(record => <Record record={record} key={record.id}/>)}
    </>
    )
}