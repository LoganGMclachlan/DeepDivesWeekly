import {useState} from 'react'

export default function Trivia({getData}){
    const [trivia, setTrivia] = useState(null)

    async function getTrivia(){
        let data = await getData()
        setTrivia(data.trivia[Math.floor(Math.random() * data.trivia.length)])
    }

    return(
        <>
            <h2>Deep Rock Trivia</h2>
            <button onClick={getTrivia} className='big-button'>Get Me Trivia!</button>
            <p>{trivia}</p>
        </>
    )
}