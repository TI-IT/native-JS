import './index.css'
import Header from "./components/Header.jsx";
import {ways} from './data/data.js'
import WayToTeach from "./components/WayToTeach.jsx";
import Button from "./components/Button/Button.jsx";

function App() {
    let content = 'Нажми на кнопку'
    function handleClick(type){
        console.log('Handle Click', type)
        content = type
    }
    return (
        <div>
            <Header/>
            <a href="https://youtu.be/kz23xxukY5s?t=4876">Lesson</a>
            <main>
                <section>
                    <h3>Наш подход к обучению</h3>
                    <ul>
                        <WayToTeach
                            title={ways[0].title}
                            description={ways[0].description}
                        />
                        <WayToTeach
                            {...ways[1]}
                        />
                        <WayToTeach
                            {...ways[2]}
                        />
                        <WayToTeach
                            {...ways[3]}
                        />
                    </ul>

                </section>
                <section>
                    <h3>Чем отличаемся от других</h3>
                    <Button onClick={() => handleClick('way')}>Подход</Button>
                    <Button onClick={() => handleClick('easy')}>Доступность</Button>
                    <Button onClick={() => handleClick('program')}>Концентрация</Button>

                    <p>{content}</p>
                </section>
          </main>
      </div>
  )
}

export default App
