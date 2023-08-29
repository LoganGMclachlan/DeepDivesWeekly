import { useState } from "react"
import StageInfo from './StageInfo'

export default function DiveData({getData}){
    const [diveData, setDiveData] = useState(null)

    async function getDiveData(variant){
        let data = await getData()
        setDiveData(data.variants[variant])
    }

    return(
        <div className="dive-data">
            <p><u onClick={() => getDiveData(0)}>Regular </u>
            or
            <u onClick={() => getDiveData(1)}> Elite</u></p>
            {diveData
            ? <>
                <h2>{diveData.name}</h2>
                <p>Biome: {diveData.biome}</p>
                <div className="stage-container">
                    {diveData.stages.map(stage => 
                        <StageInfo stage={stage} key={stage.id}/>
                    )}
                </div>
            </>    
            : <h2>Select a Dive</h2>
            }
        </div>
    )
}