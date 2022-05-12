import Card from "./components/Card";
import Navbar from "./components/Navbar"
import data from "./data";

const App = () => {
  return (
      <>
        <Navbar />
        <div className="cards-div">{data.map(item => <Card item={item} />)}</div>
      </>
  )
}

export default App
