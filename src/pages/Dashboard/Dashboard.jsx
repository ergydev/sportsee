import { useParams } from 'react-router-dom';
import BarsChart from '../../components/BarsChart/BarsChart';
import LineChartComponent from '../../components/LineChartComponent/LineChartComponent';
import RadarComponent from '../../components/Radar/RadarComponent';
import RadialChartComponent from '../../components/RadialChartComponent/RadialChartComponent';

import useDashboardData from '../../services/hooks/useDashboardData';

import Header from '../../layout/Header/Header';
import Sidenav from '../../layout/Sidenav/Sidenav';
import HealthStat from '../../components/HealthStat/HealthStat'


const Dashboard = () => {
    //get the id 
    const { id } = useParams()
    const userId = parseInt(id, 10)
    const {
        userData,
        userPerformance,
        userSession,
        calorieCount,
        proteinCount,
        carbohydrateCount,
        lipidCount,
        firstName,
        sessions,
        userScorePercentage
    } = useDashboardData(userId)

    if (!userData || userData.length === 0) {
        return <div className='error__wrapper'>
            <h1 className='error--title'>Oups! Aucune donnée n'est disponible.</h1>
            <a href="/" className='error--link'>Retour à la page précédente</a>
        </div>;
    }

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
                            <div className="activity">
                                <BarsChart sessions={sessions} />
                            </div>
                            <div className="stats">
                                <LineChartComponent sessions={userSession} />

                                {userPerformance && userPerformance.data && (
                                    <RadarComponent userPerformance={userPerformance.data} />
                                )}

                                <RadialChartComponent userScorePercentage={userScorePercentage} />
                            </div>
                            <aside className='infos'>
                                <HealthStat cardIcon={require('../../assets/calories-icon.png')} cardText="Calories" cardTitle={calorieCount + 'kCal'} />
                                <HealthStat cardIcon={require('../../assets/protein-icon.png')} cardText="Protéines" cardTitle={proteinCount + 'g'} />
                                <HealthStat cardIcon={require('../../assets/carbs-icon.png')} cardText="Glucides" cardTitle={carbohydrateCount + 'g'} />
                                <HealthStat cardIcon={require('../../assets/fat-icon.png')} cardText="Lipides" cardTitle={lipidCount + 'g'} />
                            </aside>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Dashboard