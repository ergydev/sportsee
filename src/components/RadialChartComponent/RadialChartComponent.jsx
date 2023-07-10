import { Legend, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import './radialChartComponent.css'

function RadialChartComponent() {

    const todayScore = 0.15

    const data = [  
        {
            name: 'score',
            value: todayScore * 100
        }
    ]

    function RadialTarget({ scoreData }){
        
        return (
            <div className='target__radial-chart'>
                <span className='target__radial-chart--score'> {`${scoreData}%`} </span>
                <p className='target__radial-chart--text'>
                    {`de votre objectif`}
                </p>
            </div>
        )
    }

    function CustomLegend(){
        return(
            <h3 className='radial__title'>Score</h3>
        )
    }

    return ( 
        <div className="radial__wrapper">
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart

                    data={data}
                    startAngle={270}
                    endAngle={0}
                    innerRadius={65}
                    outerRadius={80}
                >
                    <RadialBar 
                        name='score'
                        dataKey="value"
                        fill='#FF0000'
                        background
                        strokeLinejoin='round'
                        cornerRadius={100}

                    />
                    <Legend verticalAlign='top' content={CustomLegend} />
                </RadialBarChart>
            </ResponsiveContainer>
            <RadialTarget scoreData={todayScore *100} />
        </div>
     );
}

export default RadialChartComponent;