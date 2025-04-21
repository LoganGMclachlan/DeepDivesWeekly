import { useState, useEffect, useCallback } from "react"
import { db } from "../config/firebase"
import { getDocs, collection } from 'firebase/firestore'
import Record from "./Record"
import RecordForm from "./RecordForm"

export default function DiveRecords(){
    const [records, setRecords] = useState([[{"Title":"Loading Records..."}]])
    const [recordTab, setRecordTab] = useState(0)
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {getRecords()}, [])

    const getRecords = useCallback(async () => {
        try{
            let rawData = await getDocs(collection(db,"Dive Records"))
            let mappedData = rawData.docs.map(doc => ({
                ...doc.data(), id: doc.id
            }))
        setRecords(chunkList(mappedData,4))
        }
        catch(err){console.error(err)}
    })

    const chunkList = (list,size) => {
        return Array.from({ length: Math.ceil(list.length / size) }, (v, i) =>
            list.slice(i * size, i * size + size)
        )
    }

    return(
    <>
        <div className="record-list">
            {records[recordTab].map(record => <Record record={record}/>)}

            <div className="record-tab-button-container">
                {records.length > 1 && <>
                    {recordTab > 0 ? <button className="record-btn" onClick={() => setRecordTab(recordTab-1)}>
                        Page {recordTab}</button>
                        : <button className="record-btn" onClick={() => setRecordTab(records.length-1)}>
                        Page {records.length}</button>}
                    {recordTab < records.length-1 ? <button className="record-btn" onClick={() => setRecordTab(recordTab+1)}>
                        Page {recordTab+2}</button>
                        : <button className="record-btn" onClick={() => setRecordTab(0)}>
                        Page 1</button>}
                </>}
            </div>

            <button onClick={() => setShowForm(true)}
                className="record-btn" style={{"width":"100%"}}>Add Record</button>
        </div>
        {showForm && <RecordForm setShowForm={setShowForm} getRecords={getRecords}/>}
    </>
    )
}