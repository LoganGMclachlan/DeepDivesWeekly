import {useState} from 'react'
import image from '../assets/smart-stout.jpg'

export default function Trivia({getData}){
    const [trivia, setTrivia] = useState(null)

    async function getTrivia(){
        let data = await getData()
        setTrivia(data.trivia[Math.floor(Math.random() * data.trivia.length)])
    }

    return(
        <>
            <img src={image} onClick={getTrivia} className='image'/><br/>
            <button onClick={getTrivia} className='big-button'>Get Me Trivia!</button>
            <p>{trivia}</p>
        </>
    )
}