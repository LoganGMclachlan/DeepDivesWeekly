import { useState, lazy, Suspense } from "react"
const StageInfo = lazy(() => import('./StageInfo'))

export default function DiveData({getData}){
    const [diveData, setDiveData] = useState(null)
    let stageCount = 1

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
                        <Suspense fallback="Loading stages" key={stage.id} >
                            <StageInfo stage={stage} stageCount={stageCount++}/>
                        </Suspense>
                    )}
                </div>
            </>    
            : <h2>Select a Dive</h2>
            }
        </div>
    )
}