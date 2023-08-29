import image from "../assets/poster.jpg"

export default function Information(){
    return(
        <>
            <h2>About this site</h2>
            <img src={image} style={{marginTop:"-15px", marginBottom:"-15px"}}/>
            <p>
                This website uses the drgapi to fetch data about the game Deep Rock Galactic.<br/>
                More info can be found here: <a href="https://drgapi.com" style={{color: "yellow"}}>drgapi.com</a><br/>
            </p>
        </>
    )
}