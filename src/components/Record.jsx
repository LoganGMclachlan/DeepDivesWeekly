import { useState } from "react"
import StageInfo from "./StageInfo"

export default function Record({record}){
    const [hide,setHide] = useState(true)

    const convertTimestamp = timestamp => {
        const date = timestamp.toDate()
        return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
    }

    const convertStage = (stage,id) => {
        return {
            "id":id,
            "primary":stage[0],
            "secondary":stage[1],
            "warning":stage[2],
            "anomaly":stage[3],
            "hazard":stage[4]
        }
    }

    return(
    <div>
        <h1>{record.Title}</h1>
        {record["Completion Time"] && <>
            <h2 style={{"color":"yellow"}}>Completed in: {record["Completion Time"]}</h2>
            
            {hide ? <button onClick={() => setHide(false)}>Show More</button> 
            :<>
                <div className="record-details">
                    Biome: {record.Biome}<b/>
                    Type: {record.Type}<b/>
                    Date: {convertTimestamp(record.Date)}
                </div>
                <div>
                    <h3>Players</h3>
                    <div className="player-list">
                        {record.Team.map(player => <p>{player}</p>)}
                    </div>
                </div>
                <div className="stage-container">
                    <StageInfo stage={convertStage(record["Stage 1"],1)}/>
                    <StageInfo stage={convertStage(record["Stage 2"],2)}/>
                    <StageInfo stage={convertStage(record["Stage 3"],3)}/>
                </div>
                <button onClick={() => setHide(true)}>Show Less</button>
            </>}
        </>}
    </div>
    )
}