import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='card'>
        <Card
          img="katie-zaferes.png"
          rating="5.0"
          views={6}
          title="Life lessons with Katie Zaferes"
          price={136}
        />
        <Card
          img="katie-zaferes.png"
          rating="5.0"
          views={6}
          title="Life lessons with Katie Zaferes"
          price={136}
        />
         <Card
          img="katie-zaferes.png"
          rating="5.0"
          views={6}
          title="Life lessons with Katie Zaferes"
          price={136}
        />
      </div>
    </div>

  );
}

export default App;
