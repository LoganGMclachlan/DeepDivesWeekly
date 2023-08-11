
export default function StageInfo({stage}){
    return(
        <div className="stage">
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