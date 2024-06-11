import {useState, lazy, Suspense} from 'react'
import DiveData from './components/DiveData'
import Navbar from './components/Navbar'
const Trivia = lazy(() => import('./components/Trivia'))
const Information = lazy(() => import('./components/Information'))
const DiveRecords = lazy(() => import('./components/DiveRecords'))

export default function App() {
  const [tabSelected, setTabSelected] = useState("DiveData")

  async function getData(url){
      return await fetch(url)
        .then(res => {return res.json()})
        .catch(err => console.log(err))
  }

  return (
    <>
    <div className='header'>
      <h1  className='title'>DEEP DIVES WEEKLY</h1>
    </div>

    <div className='body'>
      <Navbar tabSelected={tabSelected} setTabSelected={setTabSelected}/>
      
      <div className='content'>
        {tabSelected === "DiveData" &&
          <DiveData getData={() => getData("https://drgapi.com/v1/deepdives")}/>
        }
        <Suspense fallback="Loading...">
        {tabSelected === "DiveRecords" &&
          <DiveRecords/>
        }
        {tabSelected === "Trivia" &&
          <Trivia getData={getData}/>
        }
        {tabSelected === "Info" &&
          <Information/>
        }
        </Suspense>
      </div>
    </div>
    </>
  )
}