import logo from '/logo-name.svg'
var nowData = new Date()

function Header () {
    return (
        <header>
            <img src={logo} alt="Result" />
            <h3>Result</h3>
            <span>Время сейчас: { nowData.toLocaleTimeString() }</span>
        </header>
    )
}


export default Header