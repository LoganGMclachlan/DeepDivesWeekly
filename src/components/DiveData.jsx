import { useState } from "react"
import StageInfo from './StageInfo'

export default function DiveData({getDiveData}){
    const [diveData, setDiveData] = useState(null)

    async function getData(variant){
        let data = await getDiveData("https://drgapi.com/v1/deepdives")
        console.log(data.variants[variant])
        setDiveData(data.variants[variant])
    }

    return(
        <div className="dive-data">
            <p><u onClick={() => getData(0)}>Regular </u>
            or
            <u onClick={() => getData(1)}> Elite</u></p>
            {diveData
            ? <>
                <h2>{diveData.name}</h2>
                <p>Biome: {diveData.biome}</p>
                <div className="stage-container">
                    {diveData.stages.map(stage => {
                        return (<StageInfo stage={stage} key={stage.id}/>)
                    })}
                </div>
            </>    
            : <h2>Select a Dive</h2>
            }
        </div>
    )
}