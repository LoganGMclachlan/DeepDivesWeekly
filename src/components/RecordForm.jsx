import { useState } from "react"
import "./recordForm.css"

export default function RecordForm({setShowForm}){
    const [time,setTime] = useState({"H":"","M":"","S":""})
    const [team,setTeam] = useState([])
    const [playerName,setPlayerName] = useState("")
    const [playerClass,setPlayerClass] = useState("Scout")

    const setHours = value => {if(value >= 0 && value <= 3 && value !== " "){
        setTime({...time,"H":value})}}
    const setMinutes = value => {if(value >= 0 && value <= 59 && value !== " "){
        setTime({...time,"M":value})}}
    const setSeconds = value => {if(value >= 0 && value <= 59 && value !== " "){
        setTime({...time,"S":value})}}

    const addPlayer = () => {
        if(team.length === 4){alert("Cannot add more than 4 players to a team.");return}
        if(playerName === ""){alert("A player name is required.");return}
        setTeam(team.concat({"name":playerName,"class":playerClass}))
        setPlayerName("")
    }

    const removePlayer = index => {
        setTeam(team.filter((_,i) => i !== index))
    }

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
            {team.length > 0 && 
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                    </tr>
                    {team.map(player => <tr>
                        <td>{player.name}</td>
                        <td>{player.class}</td>
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