import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App() {

  const dataInfo = data.map(item => {
    return (
      <Card
        key={item.id} 
        img={item.img}
        location={item.location}
        rating={item.stats.rating}
        views={item.stats.views}
        title={item.title}
        price={item.price}
      />
    )
  }) 

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='card'>
        {dataInfo}
      </div>
    </div>

  )
}

export default App;
