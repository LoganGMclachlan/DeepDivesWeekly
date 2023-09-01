import { useState, lazy, Suspense } from "react"
const StageInfo = lazy(() => import('./StageInfo'))

export default function DiveData({getData}){
    const [diveData, setDiveData] = useState(null)

    function addHazards(data,variant){
        // assigns a new property "hazard" to each stage
        if (variant === 0){
            data.stages.map(stage => {
                switch (stage.id) {
                    case 1:
                        stage.hazard = 3
                        return stage
                    case 2:
                        stage.hazard = 3.5
                        return stage
                    case 3:
                        stage.hazard = 3.5
                        return stage
                }
            })
        }else{
            data.stages.map(stage => {
                switch (stage.id) {
                    case 1:
                        stage.hazard = 4.5
                        return stage
                    case 2:
                        stage.hazard = 4
                        return stage
                    case 3:
                        stage.hazard = 5.5
                        return stage
                }
            })
        }
        return data
    }

    async function getDiveData(variant){
        let data = await getData()
        setDiveData(addHazards(data.variants[variant],variant))
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
            {diveData
            ? <>
                <h2>{diveData.name}</h2>
                <p style={{color:getColour(diveData.biome)}}>Biome: {diveData.biome}</p>
                <p>Seed: {diveData.seed}</p>
                <div className="stage-container">
                    {diveData.stages.map(stage =>
                        <Suspense fallback="Loading stages" key={stage.id} >
                            <StageInfo stage={stage}/>
                        </Suspense>
                    )}
                </div>
            </>    
            : <h2>Select a Dive</h2>
            }
        </div>
    )
}