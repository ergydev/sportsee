import { Legend, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import './radialChartComponent.css'

function RadialChartComponent({ userScorePercentage }) {

    const data = [  
        {
            name: 'score',
            value: userScorePercentage
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
                    startAngle={0}
                    endAngle={-360 + -userScorePercentage}
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
                        minAngle={15}
                        clockWise

                    />
                    <Legend verticalAlign='top' content={CustomLegend} />
                </RadialBarChart>
            </ResponsiveContainer>
            <RadialTarget scoreData={userScorePercentage} />
        </div>
     );
}

export default RadialChartComponent;