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
    <div className="record">
        <h1>{record.Title}</h1>
        {record["Completion Time"] && <>
            <h2 style={{"color":"yellow"}}>Completed in: {record["Completion Time"]}</h2>
            
            {hide ? <button onClick={() => setHide(false)}
                        className="record-btn">Show More +</button> 
            :<div className="record-expand">
                <div className="record-details">
                    Biome: {record.Biome}<b/>
                    Type: {record.Type}<b/>
                    Date: {convertTimestamp(record.Date)}
                </div>
                <div className="player-list">
                    <p>Players:</p>
                    {record.Team.map(player => <p>{player}</p>)}
                </div>
                <div className="stage-container">
                    <StageInfo stage={convertStage(record["Stage 1"],1)}/>
                    <StageInfo stage={convertStage(record["Stage 2"],2)}/>
                    <StageInfo stage={convertStage(record["Stage 3"],3)}/>
                </div>
                <br/>
                <button onClick={() => setHide(true)}
                    className="record-btn">Show Less -</button>
            </div>}
        </>}
    </div>
    )
}