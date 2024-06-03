import image1 from '../assets/rock-&-stone.jpg'
import image2 from '../assets/smart-stout.jpg'
import {useState} from 'react'

export default function trivia({getData}){
    const [trivia, setTrivia] = useState(null)

    async function rockOn(){
        let data = await getData("https://drgapi.com/v1/salutes")
        alert(data.salutes[Math.floor(Math.random() * data.salutes.length)])
    }

    async function getTrivia(){
        let data = await getData("https://drgapi.com/v1/trivia")
        setTrivia(data.trivia[Math.floor(Math.random() * data.trivia.length)])
    }

    return(
    <>
        <img src={image2} onClick={getTrivia} className='image'/><br/>
        <button onClick={getTrivia} className='big-button'>Bottoms Up!</button>
        <p>{trivia}</p>

        <img onClick={rockOn} className="image" src={image1}/><br/>
        <button onClick={rockOn} className="big-button">Rock and Stone?</button>
    </>
    )
}