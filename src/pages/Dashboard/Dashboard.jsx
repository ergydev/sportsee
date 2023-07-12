import { useParams } from 'react-router-dom';
import BarsChart from '../../components/BarsChart/BarsChart';
import LineChartComponent from '../../components/LineChartComponent/LineChartComponent';
import Radar from '../../components/Radar/RadarComponent';
import RadialChartComponent from '../../components/RadialChartComponent/RadialChartComponent';
import './dashboard.css';

import useUserData from '../../services/hooks/useUserData';
import useUserActivity from '../../services/hooks/useUserActivity';
import useAverageSession from '../../services/hooks/useAverageSession'
import useUserPerformance from '../../services/hooks/useUserPerformance';

import Header from '../../layout/Header/Header';
import Sidenav from '../../layout/Sidenav/Sidenav';
import HealthStat from '../../components/HealthStat/HealthStat'


const Dashboard = () => {
    //get the id 
    const { id } = useParams()
    const userId = parseInt(id, 10)
    const { userData } = useUserData(userId)
    console.log('data ', userData)

    // get the firstname & today score completion
    const firstName = userData && userData.data && userData.data.userInfos && userData.data.userInfos.firstName;

    const userScore = userData && userData.data && (userData.data.todayScore || userData.data.score ) 
    const userScorePercentage = userScore ? Math.round(userScore * 100) : 0

    const { userActivity } = useUserActivity(userId)
    const sessions = userActivity && userActivity.data && userActivity.data.sessions
  
    const { userPerformance } = useUserPerformance(userId)

    const { userAverageSession } = useAverageSession(userId)
    console.log('average:', userAverageSession)
    console.log(useAverageSession(userId).userSession)
    console.log(useAverageSession(userId))


    //get keyDatas 
    const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = userData?.data?.keyData || {}

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
                                {/* <LineChartComponent data={userAverageSession.sessions} /> */}
                                <LineChartComponent />
                                <Radar userPerformance={userPerformance} />
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