import { useState, useEffect, useCallback } from "react"
import { db } from "../config/firebase"
import { getDocs, collection } from 'firebase/firestore'

export default function DiveRecords(){
    const [records, setRecords] = useState([])

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
    {records.map(record => <div>
        <h1>{record.Title}</h1>
    </div>)}
    </>
    )
}