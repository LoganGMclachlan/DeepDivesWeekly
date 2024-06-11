import { useState, useEffect, useCallback } from "react"
import { db } from "../config/firebase"
import { getDocs, collection } from 'firebase/firestore'
import Record from "./Record"
import RecordForm from "./RecordForm"

export default function DiveRecords(){
    const [records, setRecords] = useState([{"Title":"Loading Records..."}])
    const [showForm, setShowForm] = useState(false)

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
        <div className="record-list">
            {records.map(record => <Record record={record}/>)}
            <button onClick={() => setShowForm(true)}
                className="record-btn" style={{"width":"100%"}}>Add Record</button>
        </div>
        {showForm && <RecordForm setShowForm={setShowForm} getRecords={getRecords}/>}
    </>
    )
}