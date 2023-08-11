import {useState, lazy, Suspense} from 'react'
import DiveData from './components/DiveData'
const Salutes = lazy(() => import('./components/Salutes'))
const Trivia = lazy(() => import('./components/Trivia'))

export default function App() {
  const [tabSelected, setTabSelected] = useState("DiveData")

  async function getData(url){
      return await fetch(url)
      .then(res => res.json())
      .then(data => {return data})
      .catch(err => console.log(err))
  }

  return (
    <>
    <h1 className='header'>DEEP DIVES WEEKLY</h1>

    <div className='body'>
      <table className='tab-container'>
        <thead>
          <tr>
          {tabSelected === "DiveData"
            ? <th className='tab-selected'><h2>Dive Data</h2></th>
            : <th className='tab' onClick={() => {setTabSelected("DiveData")}}><h2>Dive Data</h2></th>
          }
          {tabSelected === "Trivia"
            ? <th className='tab-selected'><h2>Trivia</h2></th>
            : <th className='tab' onClick={() => {setTabSelected("Trivia")}}><h2>Trivia</h2></th>
          }
          {tabSelected === "Salutes"
            ? <th className='tab-selected'><h2>Salutes</h2></th>
            : <th className='tab' onClick={() => {setTabSelected("Salutes")}}><h2>Salutes</h2></th>
          }
          </tr>
        </thead>
      </table>
      
      <div className='content'>
        {tabSelected === "DiveData" &&
          <DiveData getDiveData={getData}/>
        }
        <Suspense fallback="Loading...">
        {tabSelected === "Trivia" &&
          <Trivia getTrivia={() => {getData("https://drgapi.com/v1/trivia")}}/>
        }
        {tabSelected === "Salutes" &&
          <Salutes getSalutes={() => {getData("https://drgapi.com/v1/salutes")}}/>
        }
        </Suspense>
      </div>
    </div>
    </>
  )
}