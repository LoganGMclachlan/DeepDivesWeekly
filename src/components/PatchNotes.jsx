export default function PatchNotes(){
    const patchNotes = [
        {version:1.6, date:"11/06/2024",
        changes:["Added form to record dive times",
                "Added bug report section"]
        },
        {version:1.5, date:"07/06/2024",
        changes:["General Style changes.",
                "Moves rock and stone button to trivia tab",
                "Added Dive Records tab."]
        },
        {version:1.4, date:"29/09/2023",
        changes:["Fixed cave leech cluster icon not displaying."]
        },
        {version:1.3, date:"06/09/2023",
        changes:["Updated fonts for the title and the main content."]
        },
        {version:1.2, date:"01/09/2023",
        changes:["Dive stages now display its hazard level.",
                "Added patch notes section to info tab.",
                "Each dive biome now has its own unique colour."]
        },
        {version:1.1, date:"31/08/2023",
        changes:["Fixed issue where heading would clip below navigation bar on smaller screens."]
        },
        {version:1.0, date:"30/08/2023",
        changes:["Deployed app using firebase."]
        },
    ]

    return(
        <div className="patch-notes">
        <h2 style={{"textAlign":"center"}}>Patch Notes</h2>
        {patchNotes.map(patch =>
        <>
            <h3 style={{textDecoration:"underline",color:"orange"}}>Version: {patch.version}, date: {patch.date}</h3>
            <ul className="change-list">
                {patch.changes.map(change => 
                <li>{change}</li>)}
            </ul>
        </>)}
        </div>
    )
}