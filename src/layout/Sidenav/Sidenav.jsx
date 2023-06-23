import { Link } from 'react-router-dom'
import NavIcon from '../../components/NavIcon/NavIcon'
import './Sidenav.css'

function Sidenav() {
    return(
        <div className='sidenav'>
            <div className="sidenav__wrapper">
                <div className='sidenav__menu'>
                    <Link to='/'>
                        <NavIcon icon={require('../../assets/icon_nav.png')}/>
                    </Link>
                </div>
                <div className='sidenav__menu'>
                    <Link to='/'>
                        <NavIcon icon={require('../../assets/icon_nav2.png')}/>
                    </Link>
                </div>
                <div className='sidenav__menu'>
                    <Link to='/'>
                        <NavIcon icon={require('../../assets/icon_nav3.png')}/>
                    </Link>
                </div>
                <div className='sidenav__menu'>
                    <Link to='/'>
                        <NavIcon icon={require('../../assets/icon_nav4.png')}/>
                    </Link>
                </div>
            </div>
            <p className='sidenav__copy'>Copiryght, SportSee 2020</p>
        </div>
    )
}

export default Sidenav