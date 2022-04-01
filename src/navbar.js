import './nav.css'
import home from './images/home.svg'
import about from './images/about.svg'
import { Link } from 'react-router-dom'
import add from './images/add.svg'

const Navbar = () => {
    return ( 
        <div className="nav">
            <div className="logo">
                <h2>SeriesPortal</h2>
            </div>
            <div className="navLinks">
                <ul>
                    <li><Link to="/"><img src={home} alt="" /></Link></li>
                    <li><Link to="/about"><img src={about} alt="" /></Link></li>
                    <li><Link to="/addSeries"><img src={add} alt="" /></Link></li>
                    <li><Link to="/favourites"><img src={add} alt="" /></Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;