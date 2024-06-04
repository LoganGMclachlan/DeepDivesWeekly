import { useState, lazy, Suspense, useEffect } from "react"
const StageInfo = lazy(() => import('./StageInfo'))

export default function DiveData({getData}){
    const [diveData, setDiveData] = useState(null)

    useEffect(() => {getDiveData(0)},[])

    async function getDiveData(variant){
        let data = await getData()
        setDiveData(addHazards(data.variants[variant],variant))
    }

    function addHazards(data,variant){
        // assigns a new property "hazard" to each stage
        if (variant === 0){
            data.stages[0].hazard = 3
            data.stages[1].hazard = 3.5
            data.stages[2].hazard = 3.5
        }else{
            data.stages[0].hazard = 4.5
            data.stages[1].hazard = 5
            data.stages[2].hazard = 5.5
        }
        return data
    }

    function getColour(biome){
        switch (biome) {
            case "Radioactive Exclusion Zone":
                return "lightgreen"
            case "Azure Weald":
                return "violet"
            case "Crystalline Caverns":
                return "lightblue"
            case "Dense Biozone":
                return "blue"
            case "Fungus Bogs":
                return "green"
            case "Glacial Strata":
                return "white"
            case "Magma Core":
                return "red"
            case "Salt Pits":
                return "lightred"
            case "Sandblasted Corridors":
                return "beige"
            case "Hollow Bough":
                return "brown"
            default:
                return "white";
        }
    }

    return(
        <div className="dive-data">
            <p><u onClick={() => getDiveData(0)}>Regular </u>
            or
            <u onClick={() => getDiveData(1)}> Elite</u></p>
            {diveData && <>
                <h2>{diveData.name}</h2>
                <p style={{color:getColour(diveData.biome)}}>Biome: {diveData.biome}</p>
                <div className="stage-container">
                    {diveData.stages.map(stage =>
                        <Suspense fallback="Loading stages" key={stage.id} >
                            <StageInfo stage={stage}/>
                        </Suspense>
                    )}
                </div>
            </>}
        </div>
    )
}