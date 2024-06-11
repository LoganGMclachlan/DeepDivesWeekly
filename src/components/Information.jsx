import image from "../assets/poster.jpg"
import PatchNotes from "./PatchNotes"

export default function Information(){
    return(
        <>
        <div className="about">
            <h2 >About this site</h2>
            <img src={image} style={{marginTop:"-15px", marginBottom:"-15px"}}/>
            <p>
                This website uses the drgapi to fetch data about the game Deep Rock Galactic.<br/>
                More info can be found here: <a href="https://drgapi.com" style={{color: "yellow"}}>drgapi.com</a><br/>
            </p>
            <h2>Report a Bug</h2>
            <p>Found a bug? tell me about it via email at <u>logan.g.mclachlan@gmail.com</u>.</p>
        </div>
        <PatchNotes/>
        </>
    )
}