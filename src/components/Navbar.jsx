export default function Navbar({tabSelected,setTabSelected}){
    return(
    <table className='tab-container'>
    <thead>
        <tr>
        {tabSelected === "DiveData"
        ? <th className='tab selected'><h2>DIVE DATA</h2></th>
        : <th className='tab' onClick={() => {setTabSelected("DiveData")}}><h2>DIVE DATA</h2></th>
        }
        {tabSelected === "DiveRecords"
        ? <th className='tab selected'><h2>DIVE RECORDS</h2></th>
        : <th className='tab' onClick={() => {setTabSelected("DiveRecords")}}><h2>DIVE RECORDS</h2></th>
        }
        {tabSelected === "Trivia"
        ? <th className='tab selected'><h2>TRIVIA</h2></th>
        : <th className='tab' onClick={() => {setTabSelected("Trivia")}}><h2>TRIVIA</h2></th>
        }
        {tabSelected === "Info"
        ? <th className='tab selected'><h2>INFO</h2></th>
        : <th className='tab' onClick={() => {setTabSelected("Info")}}><h2>INFO</h2></th>
        }
        </tr>
    </thead>
    </table>
    )
}