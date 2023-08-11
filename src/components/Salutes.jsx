
export default function salutes({getData}){
    async function rockOn(){
        let data = await getData()
        alert(data.salutes[Math.floor(Math.random() * data.salutes.length)])
    }

    return(<button onClick={rockOn} className="big-button">Rock and Stone?</button>)
}