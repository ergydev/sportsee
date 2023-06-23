import { Link } from 'react-router-dom'
import logo from '../../assets/logo_sportsee.png'
import './Header.css'

function Header() {
    return(
        <header>
            <nav>
                <div className='logo'>
                    <Link to='/' className='logo-img'>
                        <img src={logo} alt="Sportsee" />
                    </Link>
                </div>
                <div className='nav__links'>
                    <Link className='nav__links--link'>Accueil</Link>
                    <Link className='nav__links--link'>Profil</Link>
                    <Link className='nav__links--link'>Réglages</Link>
                    <Link className='nav__links--link'>Communauté</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header