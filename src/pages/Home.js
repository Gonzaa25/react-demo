import '../App'
import logo from '../../src/logo.svg';
import NavBar from '../components/NavBar'

function Home() {
    return (
        <div className="App">
            <NavBar params='home'/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Home Page!</h1>
            </header>
        </div>
    );
}

export default Home;
