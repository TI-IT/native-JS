import {useState} from "react";
import logo from '/logo-name.svg'


function Header () {
    const [now, setNow] = useState(new Date())
    const [numberPlus, setNaberPlus] = useState(0)

    setInterval(() => {
        setNow(new Date())
    }, 1000)

    // setNaberPlus(numberPlus + 1)
    return (
        <>
        <header>
            <img src={logo} alt="Result"/>
            <h3>Result</h3>
            <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </header>
            <h1>{numberPlus}</h1>
        </>
    )
}


export default Header