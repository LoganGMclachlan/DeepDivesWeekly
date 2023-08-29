
export default function StageInfo({stage, stageCount}){
    return(
    <div className="stage">
        <h3 style={{color:"white",textDecoration:"underline"}}>Stage {stageCount}</h3>
        <p>{stage.primary}</p>
        <p>{stage.secondary}</p>
        {stage.anomaly
        ?<p className="dive-anomaly">{stage.anomaly}</p>
        :<p>No Anomaly</p>}
        {stage.warning
        ?<p className="dive-warning">{stage.warning}</p>
        :<p>No Warning</p>}
    </div>
    )
}