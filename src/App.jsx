import './App.css'
import Card from './components/Card'
import MainContent from './components/Main'
import Navbar from './components/Navbar'
import data from './data/data'

function App() {
      const cards = data.map(item => {
        return (
            console.log(item),
            <Card
                key={item.id}
                {...item}
                
            />
        )
    })        

    return (
        <div>
            <Navbar />
            <MainContent />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
    }

    export default App
