import './css/card.scss'
import Data from "./assets/json/data.json";
import Card from './components/Card';

  function App() {

    console.log(Data)

  return (

    <Card data={Data.content}/>

  )
}

export default App
