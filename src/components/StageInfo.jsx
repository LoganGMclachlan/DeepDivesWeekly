// importing anomaly icons
import cw from "../assets/icons/anomalies/critical_weakness.webp"
import gr from "../assets/icons/anomalies/gold_rush.webp"
import gb from "../assets/icons/anomalies/golden_bugs.webp"
import lg from "../assets/icons/anomalies/low_gravity.webp"
import mm from "../assets/icons/anomalies/mineral_mania.webp"
import ra from "../assets/icons/anomalies/rich_atmosphere.webp"
import vg from "../assets/icons/anomalies/volatile_guts.webp"

// importing warning icons

export default function StageInfo({stage, stageCount}){

    return(
    <div className="stage">
        <h3 style={{color:"white",textDecoration:"underline"}}>Stage {stageCount}</h3>
        <p>{stage.primary}</p>
        <p>{stage.secondary}</p>
        <label className="dive-anomaly">{stage.anomaly}</label>

        {stage.anomaly === "Critical Weakness" && <img src={cw} className="icon"/>}
        {stage.anomaly === "Gold Rush" && <img src={gr} className="icon"/>}
        {stage.anomaly === "Golden Bugs" && <img src={gb} className="icon"/>}
        {stage.anomaly === "Low Gravity" && <img src={lg} className="icon"/>}
        {stage.anomaly === "Mineral Mania" && <img src={mm} className="icon"/>}
        {stage.anomaly === "Rich Atmosphere" && <img src={ra} className="icon"/>}
        {stage.anomaly === "Volatile Guts" && <img src={vg} className="icon"/>}

        <p className="dive-warning">{stage.warning}</p>
    </div>
    )
}