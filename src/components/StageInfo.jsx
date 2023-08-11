
export default function StageInfo({stage}){
    return(
        <>
        <ul>
            <li><label>Primary: </label><p>{stage.primary}</p></li>

            <li><label>Secondary: </label><p>{stage.secondary}</p></li>

            <li><label>Anomaly: </label>
            {stage.anomaly
            ?<p>{stage.anomaly}</p>
            :<p>None</p>
            }</li>

            <li><label>Warning: </label>
            {stage.warning
            ?<p>{stage.warning}</p>
            :<p>None</p>
            }</li>
        </ul>
        <hr/>
        </>
    )
}