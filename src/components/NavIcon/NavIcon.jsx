import { Link } from 'react-router-dom'
import './NavIcon.css'

function NavIcon({ icon }) {
    return(
        <Link>
            <div>
                <img src={icon} alt="Sportsee sidebar icon" />
            </div>
        </Link>
    )
}

export default NavIcon