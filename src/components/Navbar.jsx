export default function Navbar({tabSelected,setTabSelected}){
    return(
    <table className='tab-container'>
    <thead>
        <tr>
        {tabSelected === "DiveData"
        ? <th className='tab selected'><h2>Dive Data</h2></th>
        : <th className='tab' onClick={() => {setTabSelected("DiveData")}}><h2>Dive Data</h2></th>
        }
        {tabSelected === "DiveRecords"
        ? <th className='tab selected'><h2>Dive Records</h2></th>
        : <th className='tab' onClick={() => {setTabSelected("DiveRecords")}}><h2>Dive Records</h2></th>
        }
        {tabSelected === "Trivia"
        ? <th className='tab selected'><h2>Trivia</h2></th>
        : <th className='tab' onClick={() => {setTabSelected("Trivia")}}><h2>Trivia</h2></th>
        }
        {tabSelected === "Info"
        ? <th className='tab selected'><h2>Info</h2></th>
        : <th className='tab' onClick={() => {setTabSelected("Info")}}><h2>Info</h2></th>
        }
        </tr>
    </thead>
    </table>
    )
}