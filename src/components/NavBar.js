import {
    Link
} from "react-router-dom";

function NavBar(data) {
    console.log(data.params)
    let homenav;
    let aboutnav;
    if (data.params === 'home') {
        homenav = 'nav-item active';
        aboutnav = 'nav-item';
    } else {
        homenav = 'nav-item';
        aboutnav = 'nav-item active';
    }
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar navbar-dark bg-dark'>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav mr-auto'>
                        <li className={homenav}>
                            <Link to="/" className='nav-link'>Home</Link>
                        </li>
                        <li className={aboutnav}>
                            <Link to="/about" className='nav-link'>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;