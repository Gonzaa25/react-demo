import '../App'
import logo from '../../src/logo.svg';
import NavBar from '../components/NavBar'

function About() {
    return (
        <div className="App">
            <NavBar params='about'/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>About Page!</h1>
            </header>
        </div>
    );
}

export default About;