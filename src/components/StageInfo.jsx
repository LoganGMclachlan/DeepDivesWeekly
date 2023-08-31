// importing anomaly icons
import { useEffect } from "react"
import cw from "../assets/icons/anomalies/critical_weakness.webp"
import gr from "../assets/icons/anomalies/gold_rush.webp"
import gb from "../assets/icons/anomalies/golden_bugs.webp"
import lg from "../assets/icons/anomalies/low_gravity.webp"
import mm from "../assets/icons/anomalies/mineral_mania.webp"
import ra from "../assets/icons/anomalies/rich_atmosphere.webp"
import vg from "../assets/icons/anomalies/volatile_guts.webp"

// importing warning icons
import clc from "../assets/icons/warnings/cave_leech_cluster.webp"
import et from "../assets/icons/warnings/elite_threat.webp"
import ei from "../assets/icons/warnings/exploder_infestation.webp"
import hc from "../assets/icons/warnings/haunted_cave.webp"
import le from "../assets/icons/warnings/lethal_enemies.webp"
import lo from "../assets/icons/warnings/low_oxygen.webp"
import mp from "../assets/icons/warnings/mactera_plague.webp"
import p from "../assets/icons/warnings/parasites.webp"
import rb from "../assets/icons/warnings/regenerative_bugs.webp"
import rp from "../assets/icons/warnings/rival_presence.webp"
import sd from "../assets/icons/warnings/shield_disruption.webp"
import s from "../assets/icons/warnings/swarmageddon.webp"

export default function StageInfo({stage}){

    return(
    <div className="stage">
        <h3 style={{color:"white",textDecoration:"underline"}}>Stage {stage.id}</h3>
        <p>{stage.primary}</p>
        <p>{stage.secondary}</p>

        {stage.anomaly &&
        <>
        <label className="dive-anomaly">{stage.anomaly}</label>
        {stage.anomaly === "Critical Weakness" && <img src={cw} className="icon"/>}
        {stage.anomaly === "Gold Rush" && <img src={gr} className="icon"/>}
        {stage.anomaly === "Golden Bugs" && <img src={gb} className="icon"/>}
        {stage.anomaly === "Low Gravity" && <img src={lg} className="icon"/>}
        {stage.anomaly === "Mineral Mania" && <img src={mm} className="icon"/>}
        {stage.anomaly === "Rich Atmosphere" && <img src={ra} className="icon"/>}
        {stage.anomaly === "Volatile Guts" && <img src={vg} className="icon"/>}
        
        {stage.warning && <><br/><br/></>}
        </>
        }

        {stage.warning &&
        <>
            <label className="dive-warning">{stage.warning}</label>
            {stage.warning === "Cave Leach Cluster" && <img src={clc} className="icon"/>}
            {stage.warning === "Elite Threat" && <img src={et} className="icon"/>}
            {stage.warning === "Exploder Infestation" && <img src={ei} className="icon"/>}
            {stage.warning === "Haunted Cave" && <img src={hc} className="icon"/>}
            {stage.warning === "Lethal Enemies" && <img src={le} className="icon"/>}
            {stage.warning === "Low Oxygen" && <img src={lo} className="icon"/>}
            {stage.warning === "Mactera Plague" && <img src={mp} className="icon"/>}
            {stage.warning === "Parasites" && <img src={p} className="icon"/>}
            {stage.warning === "Regenerative Bugs" && <img src={rb} className="icon"/>}
            {stage.warning === "Rival Presence" && <img src={rp} className="icon"/>}
            {stage.warning === "Shield Disruption" && <img src={sd} className="icon"/>}
            {stage.warning === "Swarmageddon" && <img src={s} className="icon"/>}
        </>
        }
    </div>
    )
}