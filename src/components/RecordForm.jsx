import { useState } from "react"

export default function RecordForm({setShowForm}){
    const [time,setTime] = useState({"H":"","M":"","S":""})

    const setHours = value => {if(value >= 0 && value <= 3 && value !== " "){
        setTime({...time,"H":value})}}
    const setMinutes = value => {if(value >= 0 && value <= 59 && value !== " "){
        setTime({...time,"M":value})}}
    const setSeconds = value => {if(value >= 0 && value <= 59 && value !== " "){
        setTime({...time,"S":value})}}

    return(
    <form className="record-form">
        <h1>RECORD YOUR TIME</h1>
        <label>Dive Type:</label>
        <select>
            <option default value="Regular">Regular</option>
            <option value="Elite">Elite</option>
        </select>
        <>
            <h2>Completion Time: </h2>
            <input value={time.H} onChange={e => setHours(e.target.value)} placeholder="Hours"/>:
            <input value={time.M} onChange={e => setMinutes(e.target.value)} placeholder="Minutes"/>:
            <input value={time.S} onChange={e => setSeconds(e.target.value)} placeholder="Seconds"/>
        </>
        <>
            <h2>The Team</h2>
            <div>
                <label>Player Name:</label>
                <input/>
                <label>Class:</label>
                <select>
                    <option value="Scout">Scout</option>
                    <option value="Driller">Driller</option>
                    <option value="Gunner">Gunner</option>
                    <option value="Engineer">Engineer</option>
                </select>
                <b style={{"cursor":"pointer"}}>Add Player</b>
            </div>
        </>
        <hr/>
        <button type="submit">Submit</button>
        <button onClick={() => setShowForm(false)}>Cancel</button>
    </form>
    )
}