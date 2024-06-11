import { useState } from "react"
import "./recordForm.css"
import { db } from "../config/firebase"
import { Timestamp, addDoc, collection } from "firebase/firestore"

export default function RecordForm({setShowForm, getRecords}){
    const [time,setTime] = useState({"H":"","M":"","S":""})
    const [team,setTeam] = useState([])
    const [playerName,setPlayerName] = useState("")
    const [playerClass,setPlayerClass] = useState("Scout")
    const [diveType,setDiveType] = useState(0)

    const setHours = value => {if(value >= 1 && value <= 3 && value !== " "){
        setTime({...time,"H":value})}}
    const setMinutes = value => {if(value >= 0 && value <= 59 && value !== " "){
        setTime({...time,"M":value})}}
    const setSeconds = value => {if(value >= 0 && value <= 59 && value !== " "){
        setTime({...time,"S":value})}}

    const addPlayer = () => {
        if(team.length === 4){alert("Cannot add more than 4 players to a team.");return}
        if(playerName === ""){alert("A player name is required.");return}
        setTeam(team.concat(`${playerName} (${playerClass}),`))
        setPlayerName("")
    }

    const removePlayer = index => {
        setTeam(team.filter((_,i) => i !== index))
    }

    const addHazards = (data,variant) => {
        // assigns a new property "hazard" to each stage
        if (variant === 0){
            data.stages[0].hazard = 3
            data.stages[1].hazard = 3.5
            data.stages[2].hazard = 3.5
        }else{
            data.stages[0].hazard = 4.5
            data.stages[1].hazard = 5
            data.stages[2].hazard = 5.5
        }
        return data
    }

    const addRecord = async e => {
        e.preventDefault()// stops default behavior that reloads page
        if(time["M"] === "" || time["S"] === ""){
            alert("You must input the completion time before submitting.")
            return
        }
        if(team.length < 1){
            alert("You must input at least 1 player into the team before submitting.")
            return
        }
        
        // gets dive data
        const dive = await fetch("https://drgapi.com/v1/deepdives")
            .then(res => res.json())
            .then(data => {return addHazards(data.variants[diveType],diveType)})
            .catch(err => console.log(err))
        
        // create collection object
        const record = {
            "Biome":dive.biome,
            "Completion Time":`${time["H"]}:${time["M"]}:${time["S"]}`,
            "Date":Timestamp.fromDate(new Date()),
            "Stage 1":[dive.stages[0].primary,dive.stages[0].secondary,
                dive.stages[0].warning,dive.stages[0].anomaly,dive.stages[0].hazard],
            "Stage 2":[dive.stages[1].primary,dive.stages[1].secondary,
                dive.stages[1].warning,dive.stages[1].anomaly,dive.stages[1].hazard],
            "Stage 3":[dive.stages[2].primary,dive.stages[2].secondary,
                dive.stages[2].warning,dive.stages[2].anomaly,dive.stages[2].hazard],
            "Team":team,
            "Title":dive.name,
            "Type":parseType()
        }

        // save to firebase
        try{
            await addDoc(collection(db,"Dive Records"),record)
            alert("Record saved successfully!")
            setShowForm(false)
            getRecords()
        }
        catch(err){
            alert("Something went wrong, try again later.")
            console.error(err)
        }
    }

    const parseType = () => {if(diveType===0){return "Regular"} return "Elite"}

    return(
    <form className="record-form" onSubmit={e => addRecord(e)}>
        <h1>RECORD YOUR TIME</h1>
        <label>Dive Type:</label>
        <select onChange={e => setDiveType(e.target.value)}>
            <option default value={0}>Regular</option>
            <option value={1}>Elite</option>
        </select>
        <>
            <h2>Completion Time: </h2>
            <input value={time.H} onChange={e => setHours(e.target.value)} placeholder="Hours"/>:
            <input value={time.M} onChange={e => setMinutes(e.target.value)} placeholder="Minutes"/>:
            <input value={time.S} onChange={e => setSeconds(e.target.value)} placeholder="Seconds"/>
        </>
        <>
            <h2>The Team</h2>
            {team.length > 0 && 
                <table>
                    <tr>
                        <th>Player</th>
                    </tr>
                    {team.map(player => <tr key={team.indexOf(player)}>
                        <td>{player}</td>
                        <td style={{"width":"70px","cursor":"pointer"}}
                            onClick={() => removePlayer(team.indexOf(player))}>Remove</td>
                    </tr>)}
                </table>
            }
            <div>
                <label>Player Name:</label>
                <input value={playerName} onChange={e => setPlayerName(e.target.value)}/>
                <label>Class:</label>
                <select onChange={e => setPlayerClass(e.target.value)}>
                    <option default value="Scout">Scout</option>
                    <option value="Driller">Driller</option>
                    <option value="Gunner">Gunner</option>
                    <option value="Engineer">Engineer</option>
                </select>
                <b style={{"cursor":"pointer"}} onClick={addPlayer}>Add Player</b>
            </div>
        </>
        <br/>
        <button type="submit">Submit</button>
        <button onClick={() => setShowForm(false)}>Cancel</button>
    </form>
    )
}