import image from '../assets/rock-&-stone.jpg'

export default function salutes({getData}){
    async function rockOn(){
        let data = await getData()
        alert(data.salutes[Math.floor(Math.random() * data.salutes.length)])
    }

    return(
    <>
        <img onClick={rockOn} className="image" src={image}/><br/>
        <button onClick={rockOn} className="big-button">Rock and Stone?</button>
    </>
    )
}