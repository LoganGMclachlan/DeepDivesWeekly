export default function PatchNotes(){
    const patchNotes = [
        
        {version:1.2, date:"01/09/2023",
        changes:["Dive stages now display its hazard level.",
                "Added patch notes section to info tab."]
        },
        {version:1.1, date:"31/08/2023",
        changes:["Fixed issue where heading would clip below navigation bar on smaller screens."]
        },
        {version:1.0, date:"30/08/2023",
        changes:["Deployed app using fireship."]
        },
    ]

    return(
        <div>
        <h2>Patch Notes</h2>
        {patchNotes.map(patch =>
        <>
            <h3 style={{textDecoration:"underline",color:"orange"}}>Version: {patch.version}, date: {patch.date}</h3>
            <ul className="patch-notes">
                {patch.changes.map(change => 
                <li>{change}</li>)}
            </ul>
        </>)}
        </div>
    )
}