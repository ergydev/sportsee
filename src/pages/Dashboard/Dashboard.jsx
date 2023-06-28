import { useParams } from 'react-router-dom';
import './dashboard.css';

import useUserData from '../../services/hooks/useUserData';

import Header from '../../layout/Header/Header';
import Sidenav from '../../layout/Sidenav/Sidenav';
import HealthStat from '../../components/HealthStat/HealthStat'
import Card from '../../components/Card/Card';

const Dashboard = () => {
    const { id } = useParams()
    const userId = parseInt(id, 10)
    const { userData } = useUserData(userId)
    const firstName = userData && userData.data && userData.data.userInfos && userData.data.userInfos.firstName;
    console.log(userData)
    console.log(firstName)

    return (
        <div>
            <Header />
            <div className="main-container">
                <Sidenav />
                <div className="App">
                    <div className="container">
                        <section className="title">
                            <h1>Bonjour <span className='user_name'>{firstName ?? ''}</span></h1>
                            <p className='title__text'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                        </section>
                        <section className="charts">
                            <div className="activity"></div>
                            <div className="stats">
                                <Card />
                                <Card />
                                <Card />
                            </div>
                            <aside className='infos'>
                                <HealthStat cardIcon={require('../../assets/calories-icon.png')} cardText="Calories" cardTitle='170Cal' />
                                <HealthStat cardIcon={require('../../assets/protein-icon.png')} cardText="Protéines" cardTitle='170Cal' />
                                <HealthStat cardIcon={require('../../assets/carbs-icon.png')} cardText="Glucides" cardTitle='170Cal' />
                                <HealthStat cardIcon={require('../../assets/fat-icon.png')} cardText="Lipides" cardTitle='170Cal' />
                            </aside>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Dashboard