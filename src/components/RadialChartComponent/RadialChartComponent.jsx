import { Legend, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import { RadialTarget, CustomLegend } from '../../services/hooks/useTodayScore';
import './radialChartComponent.css'

function RadialChartComponent({ userScorePercentage }) {

    const data = [  
        {
            name: 'score',
            value: userScorePercentage
        }
    ]

    const endAngle = (userScorePercentage / 100) * 360

    return ( 
        <div className="radial__wrapper">
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart

                    data={data}
                    startAngle={0}
                    endAngle={endAngle}
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