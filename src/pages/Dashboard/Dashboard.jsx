import { useParams } from 'react-router-dom';
import BarsChart from '../../components/BarsChart/BarsChart';
import './dashboard.css';

import useUserData from '../../services/hooks/useUserData';
import useUserActivity from '../../services/hooks/useUserActivity';
import useTodayScore from '../../services/hooks/useTodayScore';
import useUserPerformance from '../../services/hooks/useUserPerformance';

import Header from '../../layout/Header/Header';
import Sidenav from '../../layout/Sidenav/Sidenav';
import HealthStat from '../../components/HealthStat/HealthStat'
import Card from '../../components/Card/Card';

const Dashboard = () => {
    //get the id 
    const { id } = useParams()
    const userId = parseInt(id, 10)
    const { userData } = useUserData(userId)
    console.log('data ', userData)

    // get the firstname & today score completion
    const firstName = userData && userData.data && userData.data.userInfos && userData.data.userInfos.firstName;
    console.log('prénom ', firstName)

    const userScore = userData && userData.data && userData.data.todayScore
    const userScorePercentage = userScore ? Math.round(userScore * 100) : 0
    console.log('TodayScore ', userScorePercentage)

    const { userActivity } = useUserActivity(userId)

    console.log('Activity ', userActivity)

    const { userPerformance } = useUserPerformance(userId)
    console.log('Performance ', userPerformance)

    //get keyDatas 
    const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = userData?.data?.keyData || {}


    // const activityData = [
    //     { name: 'Calories brûlées (Kcal)', value: calorieCount},
    //     { name: }
    // ]


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
                                <BarsChart data={userActivity} />
                            </div>
                            <div className="stats">
                                <Card />
                                <Card />
                                <Card />
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