import {useState} from 'react'

export default function Trivia({getTrivia}){
    const [trivia, setTrivia] = useState(null)
    const [count, setCount] = useState(0)

    async function getData(){
        let data = await getTrivia()
        setTrivia(data.trivia[count])
        setCount(count+1)
    }

    return(
        <>
            <h2>Deep Rock Trivia</h2>
            <button onClick={() => getData()}>Get Me Trivia!</button>
            <p>{trivia}</p>
        </>
    )
}