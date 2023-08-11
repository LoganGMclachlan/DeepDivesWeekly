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
            {diveData
            ? <>
                <h2>{diveData.name}</h2>
                <p>Biome: {diveData.biome}</p>
                {diveData.stages.map(stage => {
                    return (<StageInfo stage={stage} key={stage.id}/>)
                })}
            </>    
            : <h2>Select a Dive</h2>
            }
            
            <p><u onClick={() => getData(0)}>Regular </u>
            or
            <u onClick={() => getData(1)}> Elite</u></p>
        </div>
    )
}